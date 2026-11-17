import apiClient from "@/config/ApiClient";
import type LoginData from "@/models/LoginData";
import type LoginResponseData from "@/models/LoginResponseData";
import type RegisterData from "@/models/RegisterData";
import type User from "@/models/User";
// for register
export const registerUser=async(signupData:RegisterData)=>{
    // api calll server to save data
 const reoponse= await apiClient.post(`/auth/register`,signupData)

 return reoponse.data;

    
}

// for login 

export const loginUser=async(loginData:LoginData)=>{
   const response=await apiClient.post<LoginResponseData>("/auth/login",loginData);
   return response.data; 

}
// logout
export const logoutUser=async()=>{
    const response= await apiClient.post(`/auth/logout`)
    return  response.data;
}

// get login user
export const getCurrentUser=async(emailId:String| undefined)=>{
    const reoponse=await apiClient.get<User>(`/users/email/${emailId}`);
    return reoponse.data;

}