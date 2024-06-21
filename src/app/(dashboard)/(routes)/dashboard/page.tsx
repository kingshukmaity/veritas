"use client";

import { Card } from "~/app/components/ui/card";
import { cn } from "~/app/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { tools } from "./contsants";
import { useTheme } from "next-themes";

export default function DashboardPage() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <main className="">
      <section className="mb-8 space-y-4">
        <h2 className="text-center text-2xl font-bold md:text-4xl">
          Your Personal Mindful Companion, Guided by MindSync
        </h2>
        <p className="text-center text-sm font-light text-muted-foreground md:text-lg px-5">
          MindSync: Chat with Your Mental Wellness Companion - Explore the
          Depths of Self-Discovery – Embrace a Healthier Mind Today.
        </p>
      </section>

      <section className="space-y-4 px-4 md:px-20 lg:px-32">
        {tools.map((tool) => {
          return (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className={`group flex cursor-pointer items-center justify-between border-black/5 p-4 transition hover:shadow-md ${theme === 'dark' && 'bg-zinc-800 text-white'}`}
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("w-fit rounded-md p-2", tool.bgColor)}>
                  <tool.icon className={cn("h-8 w-8", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="h-5 w-5 group-hover:animate-bounce" />
            </Card>
          );
        })}
      </section>
    </main>
  );
}
