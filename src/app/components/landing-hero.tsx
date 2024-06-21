"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import TypeWriterComponent from "typewriter-effect";
import { Button } from "./ui/button";

const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <main className="space-y-5 pt-40 pb-20 text-center font-bold">
      <div className="space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-6xl">
        <h1>Transforming Mental Wellness with</h1>
        <div className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          <TypeWriterComponent
            options={{
              strings: [
                "Emotional Support",
                "Mindfulness Practices",
                "Personalized Guidance",
                "Stress Management",
                "Positive Affirmations",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm font-light text-zinc-400 md:text-xl px-2">
        Your AI Mental Wellness Companion - Nourishing Your Mind, One Thought at
        a Time.
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button
            variant="premium"
            className="rounded-full p-4 font-semibold md:p-6 md:text-lg"
          >
            Start Your Wellness Journey
          </Button>
        </Link>
      </div>
      <div className="text-xs font-normal text-zinc-400 md:text-sm">
        No credit card required.
      </div>
    </main>
  );
};

export default LandingHero;
