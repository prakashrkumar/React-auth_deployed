import React, { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Fingerprint,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import type RegisterData from "@/models/RegisterData";
import { registerUser } from "@/service/AuthService";
import { useNavigate } from "react-router";
import OAuth2Button from "@/components/ui/OAuth2Button";

export default function Signup() {
const[data,setData]=useState<RegisterData>({
  name:"",
  email:"",
  password:""
});
const[loading,setLoading]=useState<boolean>(false)
const[error,setError]=useState<string|null>(null)
const[showPassword,setShowPassword]=useState<boolean>(false)
const navigate=useNavigate();

  // text input ,email,password,number,textarea
  // handling form change
  const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
    // console.log(event.target.name);
    // console.log(event.target.value)

    setData((value)=>({
      ...value,
      [event.target.name]:event.target.value
    }))
  }

  //handling form
const handleFormSubmit=async(event:React.FormEvent)=>{
  event.preventDefault()
  setError(null)
  console.log(data)
  if(data.name.trim()===""){
    toast.error("Name is reuired")
    return ;
  }
  if(data.email.trim()===""){
    toast.error("Email is reuired")
    return ;
  }
  if(data.password.trim()===""){
    toast.error("password is reuired")
    return ;
  }

  // from submit for registration
try{
  setLoading(true)
 const result=await registerUser(data);
 console.log(result)
 toast.success("User register successfully......")
 setData({
  name:"",
  email:"",
  password:""
 })
 // navigate login page
 navigate("/login");
}
catch(error){
  console.log(error)
  toast.error("Error in registering the user...")

}
  
}
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070711] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[130px]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:55px_55px]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-5 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] shadow-[0_25px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl lg:grid-cols-2">

          {/* LEFT SECTION */}
          <section className="relative hidden min-h-[760px] flex-col justify-between overflow-hidden border-r border-white/10 p-12 lg:flex">
            <div className="absolute -left-20 top-40 h-80 w-80 rounded-full bg-violet-600/20 blur-[100px]" />
            <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[100px]" />

            {/* Brand */}
            <div className="relative z-10 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/15 text-violet-300">
                <Fingerprint size={25} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Nexus<span className="text-violet-400">Auth</span>
              </span>
            </div>

            {/* Illustration */}
            <div className="relative z-10 flex flex-col items-center py-10">
              <div className="relative flex h-72 w-72 items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-violet-400/20" />
                <div className="absolute inset-5 rounded-full border border-cyan-400/20" />
                <div className="absolute inset-10 rounded-full border border-violet-400/30" />
                <div className="absolute h-48 w-48 animate-pulse rounded-full bg-violet-600/20 blur-3xl" />

                <div className="relative flex h-32 w-32 items-center justify-center rounded-[35px] border border-white/20 bg-gradient-to-br from-violet-500/30 to-cyan-500/20 shadow-[0_0_70px_rgba(139,92,246,0.3)]">
                  <Fingerprint size={65} strokeWidth={1.2} className="text-cyan-200" />
                </div>

                <div className="absolute right-5 top-12 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#171629] text-cyan-300 shadow-xl">
                  <ShieldCheck size={23} />
                </div>

                <div className="absolute bottom-10 left-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#171629] text-violet-300 shadow-xl">
                  <LockKeyhole size={22} />
                </div>

                <div className="absolute left-5 top-8 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#67e8f9]" />
                <div className="absolute bottom-12 right-3 h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_15px_#a78bfa]" />
              </div>

              <div className="mt-8 text-center">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
                  <Sparkles size={14} />
                  NEXT-GENERATION SECURITY
                </div>

                <h2 className="text-4xl font-bold leading-tight tracking-tight">
                  Your digital world.
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                    Your identity.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-slate-400">
                  Experience a smarter way to authenticate.
                  One secure identity, endless possibilities.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="relative z-10 flex items-center justify-between text-xs text-slate-500">
              <span>© 2026 NexusAuth</span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Secure authentication
              </span>
            </div>
          </section>

          {/* RIGHT SECTION */}
          <section className="flex items-center justify-center px-6 py-12 sm:px-12 lg:px-14">
            <div className="w-full max-w-md">

              {/* Mobile brand */}
              <div className="mb-10 flex items-center gap-3 lg:hidden">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Fingerprint size={23} />
                </div>
                <span className="text-xl font-bold">
                  Nexus<span className="text-violet-400">Auth</span>
                </span>
              </div>

              {/* Heading */}
              <div className="mb-8">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.07] px-3 py-1.5 text-xs font-medium text-cyan-300">
                  <Zap size={13} />
                  CREATE YOUR SECURE IDENTITY
                </div>

                <h1 className="text-4xl font-bold tracking-tight sm:text-[42px]">
                  Create your
                  <br />
                  <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    account.
                  </span>
                </h1>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  Join the next generation of secure authentication.
                  Create your account and get started in seconds.
                </p>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleFormSubmit} className="space-y-5">

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Full name
                  </label>

                  <div className="relative">
                    <UserRound className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
              
                      required
                      autoComplete="name"
                     
                      name="name"
                      value={data.name}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email address
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                     
                      required
                      autoComplete="email"
                     name="email"
                      value={data.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium text-slate-300">
                    Password
                  </label>

                  <div className="relative">
                    <LockKeyhole className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />

                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                    
                      required
                      minLength={8}
                      autoComplete="new-password"
                      name="password"
                      value={data.password}
                      onChange={handleInputChange}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={showPassword ? "Hide password" : "Show password"}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                    >
                      {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                    </button>
                  </div>

                  <p className="text-xs text-slate-500">
                    Use at least 8 characters for your password.
                  </p>
                </div>

                {/* Error */}
                {error && (
                  <p role="alert" className="text-sm text-red-400">
                    {error}
                  </p>
                )}

                {/* Primary CTA */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="group h-12 w-full bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold text-white shadow-[0_8px_30px_rgba(124,58,237,0.25)] transition-all hover:from-violet-500 hover:to-indigo-500"
                >
                  {loading ? "Creating account..." : "Create account"}
                  {!loading && (
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </Button>
              </form>

              {/* Social Login - Below Signup Form */}
              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-slate-500">
                  OR CONTINUE WITH
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <OAuth2Button/>

              {/* <OAuth2Button/> */}

              {/* Login Link */}
              <p className="mt-7 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="font-semibold text-violet-400 transition hover:text-violet-300"
                >
                  Sign in
                </a>
              </p>

              {/* Security */}
              <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck size={15} className="text-emerald-400" />
                Your data is encrypted and securely protected.
              </div>

              {/* Footer */}
              <div className="mt-8 flex justify-center gap-6 text-xs text-slate-600">
                <a href="/privacy" className="transition hover:text-slate-300">
                  Privacy Policy
                </a>
                <a href="/terms" className="transition hover:text-slate-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

