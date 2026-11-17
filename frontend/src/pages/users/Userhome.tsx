
import useAuth from "@/auth/Store";
import type User from "@/models/User";
import { getCurrentUser } from "@/service/AuthService";
import { Button } from "@/components/ui/button";
import {
  FolderKanban,
  Users,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Download,
  Settings,
  UserRound,
  Activity,
  CheckCircle2,
  CircleDot,
  MoreHorizontal,
  Code2,
  Bell,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const stats = [
  {
    title: "Total Projects",
    value: "24",
    change: "+12.5%",
    positive: true,
    icon: FolderKanban,
    color: "bg-indigo-500/10 text-indigo-400",
  },
  {
    title: "Profile Views",
    value: "1,284",
    change: "+18.2%",
    positive: true,
    icon: Eye,
    color: "bg-cyan-500/10 text-cyan-400",
  },
  {
    title: "Connections",
    value: "356",
    change: "+8.4%",
    positive: true,
    icon: Users,
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    title: "Tasks Completed",
    value: "48",
    change: "-2.4%",
    positive: false,
    icon: CheckCircle2,
    color: "bg-emerald-500/10 text-emerald-400",
  },
];

const activities = [
  {
    title: "Profile updated successfully",
    description: "You updated your professional information.",
    time: "10 minutes ago",
    icon: UserRound,
    color: "text-indigo-400 bg-indigo-500/10",
  },
  {
    title: "New project created",
    description: "Employee Management System was created.",
    time: "2 hours ago",
    icon: FolderKanban,
    color: "text-cyan-400 bg-cyan-500/10",
  },
  {
    title: "Task completed",
    description: "JWT Authentication implementation completed.",
    time: "Yesterday",
    icon: CheckCircle2,
    color: "text-emerald-400 bg-emerald-500/10",
  },
  {
    title: "New connection",
    description: "You connected with a developer.",
    time: "2 days ago",
    icon: Users,
    color: "text-purple-400 bg-purple-500/10",
  },
];

const projects = [
  {
    name: "Employee Management",
    category: "Spring Boot + React",
    progress: 85,
    status: "In Progress",
    color: "bg-indigo-500",
  },
  {
    name: "Authentication System",
    category: "NestJS + TypeScript",
    progress: 100,
    status: "Completed",
    color: "bg-emerald-500",
  },
  {
    name: "Developer Portfolio",
    category: "Next.js + Tailwind",
    progress: 65,
    status: "In Progress",
    color: "bg-purple-500",
  },
];

export default function Userhome() {
  const user=useAuth((state)=>state.user)
  const[user1,setUser1]=useState<User | null>(null)
  const getUserData=async()=>{
    try{
    const user1=  await getCurrentUser(user?.email)
    setUser1(user1)
    toast.success("you are able to access secured apis")
    }
    catch(error){
      console.log(error);
      toast.error("error ingetting data")

    }
  }
  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-7 space-y-7">

      {/* Welcome Section */}
      <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">
            Monday, November 17, 2026
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mt-2">
            Welcome back, {user?.name ?? "User"}! 👋
          </h1>
          <p className="text-slate-400 mt-2">
            Here's what's happening with your account today.
          </p>
        </div>

        <div className="flex gap-3">
          <button className="p-3 rounded-xl border border-slate-700 hover:bg-slate-800">
            <Bell size={19} />
          </button>

          <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 font-medium transition">
            <Plus size={18} />
            New Project
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-indigo-500/40 transition"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">
                  {stat.title}
                </span>

                <div className={`p-3 rounded-xl ${stat.color}`}>
                  <Icon size={20} />
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-5">
                {stat.value}
              </h2>

              <div className="flex items-center gap-2 mt-3 text-sm">
                {stat.positive ? (
                  <ArrowUpRight size={17} className="text-emerald-400" />
                ) : (
                  <ArrowDownRight size={17} className="text-red-400" />
                )}

                <span className={stat.positive ? "text-emerald-400" : "text-red-400"}>
                  {stat.change}
                </span>

                <span className="text-slate-500">
                  vs last month
                </span>
              </div>
            </div>
          );
        })}
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Projects */}
        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5">

          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">
                Recent Projects
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Track your latest work
              </p>
            </div>

            <button className="text-sm text-indigo-400 hover:text-indigo-300">
              View all
            </button>
          </div>

          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name}>
                <div className="flex justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-medium">
                      {project.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {project.category}
                    </p>
                  </div>

                  <span className={`text-xs px-3 py-1 rounded-full h-fit ${
                    project.status === "Completed"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-indigo-500/10 text-indigo-400"
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${project.color}`}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>

                  <span className="text-xs text-slate-400">
                    {project.progress}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Completion */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="font-semibold text-lg">
            Profile Overview
          </h2>

          <div className="flex flex-col items-center py-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  stroke="currentColor"
                  strokeWidth="9"
                  fill="none"
                  className="text-slate-800"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  stroke="currentColor"
                  strokeWidth="9"
                  fill="none"
                  strokeDasharray="301.6"
                  strokeDashoffset="45.2"
                  strokeLinecap="round"
                  className="text-indigo-500"
                />
              </svg>

              <div className="absolute text-center">
                <h3 className="text-3xl font-bold">85%</h3>
                <p className="text-xs text-slate-400">Completed</p>
              </div>
            </div>

            <p className="text-sm text-slate-400 text-center mt-3">
              Your profile is looking great! Complete the remaining
              details to improve your profile.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ["Personal Information", true],
              ["Profile Picture", true],
              ["Professional Skills", true],
              ["Social Links", false],
              ["Portfolio Website", false],
            ].map(([label, done]) => (
              <div key={String(label)} className="flex justify-between items-center text-sm">
                <span className="text-slate-300">{label}</span>
                {done ? (
                  <CheckCircle2 size={17} className="text-emerald-400" />
                ) : (
                  <CircleDot size={17} className="text-slate-500" />
                )}
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition font-medium">
            Complete Profile
          </button>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-lg font-semibold">
                Recent Activity
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Your latest account activities
              </p>
            </div>

            <MoreHorizontal className="text-slate-400" />
          </div>

          <div className="space-y-6">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div key={activity.title} className="flex gap-4">
                  <div className={`p-3 rounded-xl h-fit ${activity.color}`}>
                    <Icon size={19} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-medium">
                      {activity.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {activity.description}
                    </p>
                    <span className="text-xs text-slate-500 mt-2 block">
                      {activity.time}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h2 className="text-lg font-semibold mb-5">
            Quick Actions
          </h2>

          <div className="space-y-3">
            {[
              { title: "Edit Profile", icon: UserRound },
              { title: "Create Project", icon: Plus },
              { title: "Download Report", icon: Download },
              { title: "Account Settings", icon: Settings },
              { title: "View Activity", icon: Activity },
            ].map((action) => {
              const Icon = action.icon;

              return (
                <button
                  key={action.title}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 transition text-sm"
                >
                  <span className="flex items-center gap-3">
                    <Icon size={18} className="text-indigo-400" />
                    {action.title}
                  </span>

                  <ArrowUpRight size={16} className="text-slate-500" />
                </button>
              );
            })}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
            <div className="flex gap-2 items-center text-indigo-300">
              <Code2 size={19} />
              <span className="font-medium text-sm">
                Developer Tip
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-3 leading-5">
              Keep your projects updated and maintain your
              professional profile to showcase your latest work.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-slate-600 py-4">
        © 2026 Your Dashboard. All rights reserved.
      </footer>
      {/* Dummy CTA */}
      <div className="text-center">
        <Button onClick={getUserData} className="rounded-2xl px-8 text-lg">Get Current user</Button>
     <p>{user1?.name}</p>
      </div>
      

    </main>
    
    
  );
}
