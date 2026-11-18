import useAuth from "@/auth/Store";
import { refreshToken } from "@/service/AuthService";
import axios from "axios"

const apiClient=axios.create({
    baseURL:import.meta.env.VITE_API_URL || "http://localhost:8083/api/v1",
    headers:{
        "Content-Type":"application/json",
    },
    withCredentials:true,
    timeout:10000,

})
// every request:before
apiClient.interceptors.request.use((config)=>{
 const accessToken=   useAuth.getState().accessToken
 if(accessToken){
    config.headers.Authorization=`Bearer ${accessToken}`
 }

 return config;
})
let isRefreshing=false;
let pending:any[]=[];

function queueRequest(cb:any){
    pending.push(cb);
}
function resolveQueue(newToken:String){
    pending.forEach((cb)=>cb(newToken));
    pending=[];
}
//repons interceptors
apiClient.interceptors.response.use(
    (response)=>response,
    async(error)=>{
        console.log(error)
        const is401=error.response?.status=== 401;
        const original=error.config;
        console.log("original retry:", original._retry)
        if(!is401 || original._retry){
            //message
            return Promise.reject(error)
        }
       
        original._retry=true
        // we will try to refresh the token
        if(isRefreshing){
            return new Promise((resolve,reject)=>{
                queueRequest((newToken:String)=>{
                    if(!newToken){
                        return reject();
                    }
                    original.headers.Authorization=`Bearer ${newToken}`;
                    resolve(apiClient(original));
                })
            })
        }
        // start  refresh
        isRefreshing=true;
        try{
            const loginResponse=await refreshToken();
            const newToken=loginResponse.accessToken;
            if(!newToken){
                throw new Error("no access token received")
            }
           useAuth.getState()
           .changeLocalLoginData(
            loginResponse.accessToken,
            loginResponse.user,
            true
           
           );
           // resolve token
           resolveQueue(newToken);
           original.headers.Authorization=`Bearer ${newToken}`;
           return apiClient(original)

        }
        catch(error){
            resolveQueue("null");
            useAuth.getState().logout();
            return Promise.reject(error)

        }
        finally{
            isRefreshing=false;
        }
    }
)

export default apiClient;