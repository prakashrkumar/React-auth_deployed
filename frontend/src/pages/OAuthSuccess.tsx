import useAuth from '@/auth/Store'
import { Spinner } from '@/components/ui/spinner';
import { refreshToken } from '@/service/AuthService';
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

const OAuthSuccess = () => {
const[isRefreshing,setIsRefreshing] =useState<boolean>(false);
const navigate=useNavigate();
    const changeLocalLoginData=useAuth((state)=>state.changeLocalLoginData)
    useEffect(()=>{
      async function getAccessToken(){
        if(!isRefreshing){

            //refresh token ki api call
        try{
       setIsRefreshing(true);
            const reponseLoginData=await refreshToken();
          // login
                changeLocalLoginData(
                   reponseLoginData.accessToken,
                    reponseLoginData.user,
                    true
                );
                toast.success("Login success !")
                navigate("/dashboard")
        }
        catch(error){
           toast.error("Error while login  !") 
           console.log(error)

        }finally{
            setIsRefreshing(false);
        }
                
            
        }
      }
      getAccessToken()  ;

    },[])
  return (
    <div className='p-10 flex flex-col gap-3 justify-center items-center'>
     <Spinner/>
     <h1 className='text-2xl font-semibold'>Please wait...</h1>
    </div>
  )
}

export default OAuthSuccess
