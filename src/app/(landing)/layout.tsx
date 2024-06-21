"use client"
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { isSignedIn } = useAuth();
  if (isSignedIn) {
    router.push("/dashboard");
  }
  return (
    <main className="h-full w-full overflow-auto">
      <div className="mx-auto h-full w-full max-w-screen-xl">{children}</div>
    </main>
  );
};

export default LandingLayout;
