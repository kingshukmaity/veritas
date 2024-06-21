import React from "react";
import { BellDot } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import Notification from "./notification";

const emotionData = [
  {
    id: 1,
    icon: "😀",
    label: "Happy",
  },
  {
    id: 2,
    icon: "😊",
    label: "Calm",
  },
  {
    id: 3,
    icon: "😑",
    label: "Neutral",
  },
  {
    id: 4,
    icon: "😓",
    label: "Sad",
  },
  {
    id: 5,
    icon: "😡",
    label: "Angry",
  },
];

const activitiesData = [
  {
    id: 1,
    lable: "Recent Activities",
    selected: true,
  },
  {
    id: 2,
    lable: "Social",
    selected: false,
  },
  {
    id: 3,
    lable: "Stress Relieve",
    selected: false,
  },
  {
    id: 4,
    lable: "Meditation",
    selected: false,
  },
];

const Ridebar = () => {
  const { theme } = useTheme();
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  return (
    <div
      className={`flex min-h-screen w-full flex-col gap-3 p-4 drop-shadow-xl sm:w-80 ${
        theme === "dark" ? "bg-zinc-800 text-white" : "bg-white"
      }`}
    >
      {/* Navigation */}
      <nav className="flex h-10 items-center justify-end gap-8">
        <Notification />
        <Link href="/settings">
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          )}
        </Link>
        <Button
          size="sm"
          variant="secondary"
          className="bg-black text-white hover:bg-black/70"
        >
          Share
        </Button>
      </nav>

      {/* Separator */}
      <div className="h-px w-full bg-black/20"></div>

      {/* Main Section */}
      <section className="mt-2 flex flex-col gap-8">
        {/* Greeting */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">
              Good morning,{" "}
              <span className="">{user ? `${user.firstName}` : "User"}</span>
            </h1>
            <span>How are you feeling today?</span>
          </div>

          {/* Emotions */}
          <div className="flex justify-between">
            {emotionData.map((emotion) => (
              <div
                key={emotion.icon}
                className="group flex cursor-pointer flex-col items-center justify-center gap-1"
              >
                <div
                  className={`rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-125 ${
                    theme === "dark" ? "bg-zinc-700" : "bg-gray-100"
                  }`}
                >
                  {emotion.icon}
                </div>
                <span className="text-sm font-medium text-blue-600 underline-offset-2 group-hover:underline">
                  {emotion.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Activities */}
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">Explore activities</h1>
          <div className="flex cursor-pointer flex-row gap-2 overflow-x-scroll">
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                className={`whitespace-nowrap rounded-full border px-3 py-2 text-xs font-semibold ${
                  activity.selected && "bg-indigo-500 text-white"
                }`}
              >
                {activity.lable}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`relative flex flex-col gap-3 rounded-lg p-2 drop-shadow-lg ${
            theme === "dark" ? "bg-zinc-700 text-white" : "bg-zinc-100"
          }`}
        >
          <div
            className={`absolute left-4 top-4 cursor-pointer rounded-full border px-3 py-1 text-xs shadow-sm hover:shadow-md ${
              theme == "dark"
                ? "bg-zinc-500 hover:bg-zinc-700"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            Self Esteem
          </div>
          <img
            src="/self-esteem.jpg"
            alt=""
            className="h-40 w-full object-fill"
          />
          <p className="text-sm">
            Mirror, Mirror: Practicing Positive Self-Talk for improved
            Self-Esteem
          </p>
          <span className="text-xs text-gray-400">10m</span>
        </div>
      </section>
    </div>
  );
};

export default Ridebar;
