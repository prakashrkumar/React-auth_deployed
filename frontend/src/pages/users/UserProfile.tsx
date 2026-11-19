
import { useState } from "react";
import {
  Camera,
  MapPin,
  Mail,
  Phone,
  Globe,
  Pencil,
  BriefcaseBusiness,
  CalendarDays,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";


import type { UserProfileInterface } from "./UserProfileInterface";

const initialProfile:UserProfileInterface = {
  id: "USR-001",
  name: "Prakash Kumar",
  username: "prakash.dev",
  email: "prakashr17032000@gmail.com",
  phone: "+91 9660996763",
  location: "Noida, India",
  bio: "Full Stack Developer passionate about building scalable applications and beautiful user experiences.",
  designation: "Full Stack Developer",
  company: "Software Engineer",
  avatar: "https://res.cloudinary.com/dftot7h9f/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1794936863/WhatsApp_Image_2026-11-17_at_10.24.31_PM_ltmyle.jpg",
  coverImage:
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1600",
 skills: [
  // Frontend Development
  
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux Toolkit",
  "Context API",
  "Tailwind CSS",
  "Bootstrap",
  "Shadcn UI",
  "Responsive Design",

  // Backend Development - MERN
  "Node.js",
  "Express.js",
  "NestJS",
  "REST APIs",
  "GraphQL",
  "Microservices",
  "WebSockets",
  "Socket.IO",

  // Java Full Stack
  "Java",
  "Core Java",
  "Advanced Java",
  "Spring Boot",
  "Spring MVC",
  "Spring Security",
  "Spring Data JPA",
  "Hibernate",
  "JPA",
  "Spring Cloud",

  // Databases
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "SQL",
  "Redis",
  "Database Design",
  "Database Optimization",

  // Authentication & Security
  "JWT Authentication",
  "OAuth2",
  "Role-Based Access Control",
  "Spring Security",
  "API Security",

  // DevOps & Cloud
  "Docker",
  "AWS",
  "CI/CD",
  "Git",
  "GitHub",
  "GitHub Actions",
  // Payment & File Handling
  "Multer",
  "Razorpay Integration",
  "File Upload",


],
  github: "https://www.linkedin.com/in/prakashfullstackdeveloper/",
  linkedin: "https://github.com/prakashrkumar",
  website: "https://example.com",
  leetCode:"https://leetcode.com/u/prakash_17032000/",
  gfg:"https://www.geeksforgeeks.org/profile/prakashr17032000"
};

export default function UserProfie() {
  const [profile, setProfile] = useState(initialProfile);
  const [activeTab, setActiveTab] = useState("overview");
  const [editing, setEditing] = useState(false);

  const updateField = (
    field: keyof UserProfileInterface,
    value: string
  ) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const saveProfile = () => {
    setEditing(false);
    // Connect your PUT/PATCH API here.
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Page heading */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-400">Account / Profile</p>
            <h1 className="text-3xl font-bold mt-1">
              My Profile
            </h1>
          </div>

          <button
            onClick={() =>
              editing ? saveProfile() : setEditing(true)
            }
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 px-5 py-3 rounded-xl font-semibold transition"
          >
            <Pencil size={17} />
            {editing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

        {/* Profile card */}
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
          <div className="h-48 md:h-64 relative">
            <img
              src={profile.coverImage}
              alt="Profile cover"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />

            <button
              className="absolute top-4 right-4 bg-black/50 p-3 rounded-xl"
              aria-label="Change cover"
            >
              <Camera size={19} />
            </button>
          </div>

          <div className="px-6 pb-7">
            <div className="flex flex-col md:flex-row md:items-end gap-5 -mt-14 relative">
              <div className="relative w-fit">
                {profile.avatar ? (
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-28 h-28 rounded-3xl border-4 border-slate-900 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                ) : null}
                <div className={`w-28 h-28 rounded-3xl border-4 border-slate-900 bg-indigo-600 flex items-center justify-center text-3xl font-bold ${profile.avatar ? "hidden" : ""}`}>
                  {profile.name.slice(0, 2).toUpperCase()}
                </div>
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-slate-900" />
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  {profile.name}
                  <BadgeCheck className="text-indigo-400" size={20} />
                </h2>
                <p className="text-slate-400 mt-1">
                  @{profile.username} · {profile.designation}
                </p>
              </div>

              <span className="text-sm text-emerald-400 bg-emerald-400/10 px-4 py-2 rounded-full w-fit">
                ● Available for opportunities
              </span>
            </div>

            <p className="text-slate-300 mt-6 max-w-3xl leading-7">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-5 mt-5 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> {profile.location}
              </span>
              <span className="flex items-center gap-2">
                <BriefcaseBusiness size={16} /> {profile.company}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={16} /> Joined recently
              </span>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-white/10 overflow-x-auto">
          {["overview", "personal", "professional"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 capitalize whitespace-nowrap ${
                activeTab === tab
                  ? "text-indigo-400 border-b-2 border-indigo-400"
                  : "text-slate-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === "overview" && (
          <div className="grid md:grid-cols-3 gap-6">

            <section className="md:col-span-2 bg-slate-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-6">
                Personal Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Full Name", key: "name" },
                  { label: "Email Address", key: "email" },
                  { label: "Phone Number", key: "phone" },
                  { label: "Location", key: "location" },
                ].map((item) => (
                  <div key={item.key}>
                    <p className="text-sm text-slate-500 mb-2">
                      {item.label}
                    </p>
                    {editing ? (
                      <input
                        value={String(profile[item.key as keyof UserProfileInterface])}
                        onChange={(e) =>
                          updateField(
                            item.key as keyof UserProfileInterface,
                            e.target.value
                          )
                        }
                        className="w-full bg-slate-800 border border-white/10 rounded-lg p-3 outline-none focus:border-indigo-400"
                      />
                    ) : (
                      <p className="font-medium break-words">
                        {profile[item.key as keyof UserProfileInterface]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-slate-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-5">
                Connect
              </h3>

              {[
                { name: "GitHub", icon: FaGithub, url: profile.github },
                { name: "LinkedIn", icon: FaLinkedin, url: profile.linkedin },
                { name: "Website", icon: Globe, url: profile.website },
                { name: "LeetCode", icon: SiLeetcode, url: profile.leetCode },
                { name: "GeeksforGeeks", icon: SiGeeksforgeeks, url: profile.gfg },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-800 transition"
                >
                  <span className="flex items-center gap-3">
                    <item.icon size={19} />
                    {item.name}
                  </span>
                  <ArrowUpRight size={17} />
                </a>
              ))}

              <div className="mt-5 border-t border-white/10 pt-5">
                <p className="text-slate-400 text-sm mb-3">
                  Contact
                </p>
                <p className="flex gap-2 text-sm break-all">
                  <Mail size={16} /> {profile.email}
                </p>
                <p className="flex gap-2 text-sm mt-3">
                  <Phone size={16} /> {profile.phone}
                </p>
              </div>
            </section>

            <section className="md:col-span-3 bg-slate-900 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-5">
                Skills & Expertise
              </h3>

              <div className="flex flex-wrap gap-3">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-400/20 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === "personal" && (
          <section className="bg-slate-900 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">
              Personal Details
            </h3>
            <p className="text-slate-400">
              Manage your name, email, phone and location in the
              overview section.
            </p>
          </section>
        )}

        {activeTab === "professional" && (
          <section className="bg-slate-900 rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-semibold mb-4">
              Professional Details
            </h3>
            <p className="text-slate-400">
              {profile.designation} · {profile.company}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {profile.skills.map((skill) => (
                <span key={skill} className="bg-slate-800 px-3 py-2 rounded-lg text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
