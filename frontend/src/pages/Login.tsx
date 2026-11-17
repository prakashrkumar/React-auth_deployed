
import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Fingerprint,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import type LoginData from "@/models/LoginData";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useAuth from "@/auth/Store";
import { Alert, AlertTitle } from "@/components/ui/alert";

export default function Login() {
  const navigate=useNavigate()
  const login=useAuth((state)=>state.login)
 const[loginData,setLoginData]=useState<LoginData>({
  email:"",
  password:""
 })

 const[loading,setLoading]=useState<boolean>(false);
const [error,setError]=useState<any>(null);
const[showPassword,setShowPassword]=useState<boolean>(false);
const[rememberMe,setRememberMe]=useState<boolean>(false);

const handleOAuth = (provider: "google" | "github") => {
  window.location.href = `http://localhost:8083/oauth2/authorization/${provider}`;
};
const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
  setLoginData({
    ...loginData,
    [event.target.name]:event.target.value
  })
  
  // server call for login
}

const handleLogin=async(event:React.FormEvent)=>{
    event.preventDefault();
    // console.log(event.target)
    // console.log(loginData)
    if(loginData.email.trim()===""){
      toast.error("Input required!")
      return
    }
    if(loginData.password.trim()===""){
      toast.error("Input required!")
      return ;
    }
    try{
      setLoading(true)
      // const useInfo=await loginUser(loginData);
     await login(loginData);
      toast.success("Login success")
      // console.log(useInfo)
      navigate("/dashboard")

      // save the cureent user logged in information
      //localstroage

    }
    catch(error:any){
      console.log(error)
      toast.error("Error !!");
      setError(error)
    }
    finally{
      setLoading(false)
    }

  }
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070711] px-4 py-8 text-white sm:px-6">

      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* Main card */}
      <div className="relative z-10 grid w-full max-w-[1050px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d1b]/90 shadow-[0_25px_100px_rgba(0,0,0,0.6)] backdrop-blur-2xl lg:grid-cols-2">

        {/* LEFT PANEL */}
        <section className="relative hidden min-h-[680px] flex-col justify-between overflow-hidden border-r border-white/[0.08] bg-gradient-to-br from-violet-950/60 via-[#101024] to-blue-950/40 p-10 lg:flex">

          {/* Ambient glow */}
          <div className="absolute -left-20 top-32 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

          {/* Brand */}
          <a href="/" className="relative flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-600/30">
              <ShieldCheck size={25} />
            </div>

            <span className="text-xl font-bold tracking-tight">
              Nexus<span className="text-violet-400">Auth</span>
              <span className="text-violet-400">.</span>
            </span>
          </a>

          {/* Visual */}
          <div className="relative flex flex-1 flex-col items-center justify-center py-12">

            <div className="relative flex h-64 w-64 items-center justify-center">

              {/* Orbital rings */}
              <div className="absolute h-56 w-56 rounded-full border border-violet-400/30 shadow-[0_0_50px_rgba(139,92,246,0.1)]" />

              <div className="absolute h-44 w-64 rotate-[-35deg] rounded-[50%] border border-cyan-400/40" />

              <div className="absolute h-44 w-64 rotate-[35deg] rounded-[50%] border border-violet-400/50" />

              <div className="absolute h-36 w-36 rounded-full bg-gradient-to-br from-violet-500/40 to-blue-500/20 blur-2xl" />

              {/* Center icon */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-violet-300/30 bg-gradient-to-br from-violet-500/30 to-blue-500/20 shadow-[0_0_70px_rgba(124,58,237,0.35)] backdrop-blur-xl">
                <Fingerprint
                  size={65}
                  strokeWidth={1.1}
                  className="text-violet-200"
                />
              </div>

              {/* Floating particles */}
              <div className="absolute right-3 top-7 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
              <div className="absolute bottom-8 left-0 h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_20px_#a78bfa]" />
              <Sparkles className="absolute -right-6 bottom-12 text-violet-300" size={23} />
              <Sparkles className="absolute -left-6 top-12 text-cyan-300" size={17} />
            </div>

            <div className="mt-10 text-center">
              <h2 className="text-4xl font-bold tracking-tight">
                Welcome <span className="text-violet-400">Back.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-slate-400">
                Your digital identity, protected by intelligent
                security and built for the future.
              </p>
            </div>
          </div>

          {/* Bottom features */}
          <div className="relative">
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Zap, title: "Lightning fast" },
                { icon: ShieldCheck, title: "Ultra secure" },
                { icon: Fingerprint, title: "Your identity" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.035] p-4"
                  >
                    <Icon size={21} className="text-violet-400" />
                    <span className="text-center text-[10px] font-medium text-slate-400">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mt-8 text-center text-[11px] text-slate-600">
              © {new Date().getFullYear()} NexusAuth. Secure your world.
            </p>
          </div>
        </section>

        {/* RIGHT PANEL */}
        <section className="relative flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-14">

          {/* Mobile logo */}
          <a href="/" className="mb-10 flex items-center gap-3 lg:hidden">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600">
              <ShieldCheck size={23} />
            </div>
            <span className="text-xl font-bold">
              Nexus<span className="text-violet-400">Auth</span>.
            </span>
          </a>

          {/* Top navigation */}
          <div className="mb-12 flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div className="relative text-sm font-semibold text-white">
            Login 
              <div className="absolute -bottom-[21px] left-0 h-[2px] w-full bg-gradient-to-r from-violet-500 to-blue-500" />
            </div>

            <a
              href="/register"
              className="flex items-center gap-1 text-sm text-slate-400 transition hover:text-violet-300"
            >
              Create account
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Heading */}
          <div className="mb-9">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-3 py-1.5 text-[11px] font-medium text-violet-300">
              <Sparkles size={13} />
              YOUR SECURITY JOURNEY STARTS HERE
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-[42px]">
              Hello again
              <span className="ml-2 inline-block">👋</span>
            </h1>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              Welcome back! Enter your credentials to access
              your account and continue where you left off.
            </p>
          </div>
          {/* error section */}
          {error && (
            <div className="mt-2">
              <Alert variant={"destructive"}>
              <CheckCircle2/>
              <AlertTitle>
                {error?.response?.data?.message ?? error?.message}
              </AlertTitle>
            </Alert>
            </div>
          )}

          {/* Login form */}
          <form onSubmit={handleLogin} autoComplete="on" className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-300"
              >
                Email address
              </label>

              <div className="group relative">
                <Mail className="absolute left-4 top-1/2 z-10 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 transition group-focus-within:text-violet-400" />

                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                 name="email"
                 value={loginData.email}
                 onChange={handleInputChange}
                  className="h-12 rounded-xl border-white/10 bg-white/[0.035] pl-12 text-sm text-white placeholder:text-slate-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/20"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-xs font-medium text-slate-300"
                >
                  Password
                </label>

                <a
                  href="/forgot-password"
                  className="text-xs font-medium text-violet-400 transition hover:text-violet-300"
                >
                  Forgot password?
                </a>
              </div>

              <div className="group relative">
                <LockKeyhole className="absolute left-4 top-1/2 z-10 h-[18px] w-[18px] -translate-y-1/2 text-slate-500 transition group-focus-within:text-violet-400" />

                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  minLength={8}
                 name="password"
                 value={loginData.password}
                 onChange={handleInputChange}
                  className="h-12 rounded-xl border-white/10 bg-white/[0.035] pl-12 pr-12 text-sm text-white placeholder:text-slate-600 focus-visible:border-violet-500 focus-visible:ring-violet-500/20"
                  style={showPassword ? {WebkitTextSecurity:"none"} as React.CSSProperties : {WebkitTextSecurity:"disc"} as React.CSSProperties}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center justify-between pt-1">
              <label className="flex cursor-pointer items-center gap-2.5 text-xs text-slate-400">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 accent-violet-500"
                />
                Remember me
              </label>

              <span className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                <ShieldCheck size={14} />
                Secure login
              </span>
            </div>

            {/* Continue */}
            <Button
              type="submit"
              disabled={loading}
              className="group h-12 w-full rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-sm font-semibold shadow-lg shadow-violet-600/20 transition hover:shadow-violet-500/30 hover:brightness-110 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "continue"}
              {!loading && (
                <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              )}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/[0.09]" />
            <span className="text-xs text-slate-600">OR CONTINUE WITH</span>
            <div className="h-px flex-1 bg-white/[0.09]" />
          </div>

          {/* Google */}
          <Button
            type="button"
            variant="outline"
            onClick={() => handleOAuth("google")}
            className="h-12 w-full rounded-xl border-white/10 bg-white/[0.025] text-sm text-slate-200 transition hover:border-violet-400/30 hover:bg-white/[0.06] hover:text-white"
          >
            <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-sm font-bold">
              <span className="bg-gradient-to-r from-blue-500 via-green-500 to-red-500 bg-clip-text text-transparent">
                G
              </span>
            </span>
            Continue with Google
          </Button>

          {/* GitHub */}
          <Button
            type="button"
            variant="outline"
            onClick={() => handleOAuth("github")}
            className="mt-3 h-12 w-full rounded-xl border-white/10 bg-white/[0.025] text-sm text-slate-200 transition hover:border-violet-400/30 hover:bg-white/[0.06] hover:text-white"
          >
            <FaGithub className="mr-2 h-5 w-5" />
            Continue with GitHub
          </Button>

          {/* Register */}
          <p className="mt-9 text-center text-sm text-slate-500">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-semibold text-violet-400 transition hover:text-violet-300"
            >
              Create an account
            </a>
          </p>

          {/* Footer */}
          <div className="mt-10 flex items-center justify-center gap-5 border-t border-white/[0.07] pt-6 text-[10px] text-slate-600">
            <a href="/privacy" className="transition hover:text-slate-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="/terms" className="transition hover:text-slate-300">
              Terms of Service
            </a>
          </div>

        </section>
      </div>
    </main>
  );
}
