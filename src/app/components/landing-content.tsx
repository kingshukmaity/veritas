"use client"
import { cn } from "../lib/utils";
import React from "react";
import Marquee from "react-fast-marquee";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { useTheme } from "next-themes";

const tools = [
  {
    id: 1,
    label: "Mindful AI",
    color: "text-blue-500",
    description:
      "Mindful AI provides guided meditation sessions and emotional well-being support.",
  },
  {
    id: 2,
    label: "Thought Tracker",
    color: "text-indigo-500",
    description:
      "Thought Tracker helps you monitor and analyze your daily thoughts for mental wellness.",
  },
  {
    id: 3,
    label: "Calmify",
    color: "text-green-500",
    description:
      "Calmify is a relaxation tool for stress reduction and relaxation.",
  },
  {
    id: 4,
    label: "Mood Mapper",
    color: "text-red-500",
    description:
      "Mood Mapper tracks your emotions and provides insights for mood improvement.",
  },
  {
    id: 5,
    label: "Sleep Serenity",
    color: "text-purple-500",
    description:
      "Sleep Serenity offers sleep tracking and personalized sleep improvement recommendations.",
  },
  {
    id: 6,
    label: "FocusForge",
    color: "text-yellow-500",
    description:
      "FocusForge enhances productivity with focus tracking and concentration exercises.",
  },
  {
    id: 7,
    label: "Gratitude Journal",
    color: "text-pink-500",
    description:
      "Gratitude Journal promotes positivity through daily gratitude reflections.",
  },
  {
    id: 8,
    label: "Social Connection",
    color: "text-gray-500",
    description:
      "Social Connection fosters emotional well-being through virtual social interactions.",
  },
];

const accordianData = [
  {
    id: 1,
    value: "item 1",
    question: "What is Mindful AI?",
    answer:
      "Mindful AI is a feature-rich tool designed to provide users with guided meditation sessions and emotional well-being support. It aims to enhance mental wellness through mindfulness practices.",
  },
  {
    id: 2,
    value: "item 2",
    question: "How does Thought Tracker contribute to mental wellness?",
    answer:
      "Thought Tracker helps users monitor and analyze their daily thoughts, providing valuable insights into their mental well-being. By understanding thought patterns, users can make informed decisions for a healthier mindset.",
  },
  {
    id: 3,
    value: "item 3",
    question: "What can users expect from the Sleep Serenity tool?",
    answer:
      "Sleep Serenity offers sleep tracking and personalized recommendations to improve sleep quality. It assists users in understanding their sleep patterns and provides actionable insights for a more restful night.",
  },
  {
    id: 4,
    value: "item 4",
    question: "How does FocusForge enhance productivity?",
    answer:
      "FocusForge is designed to boost productivity by offering features such as focus tracking and concentration exercises. It provides a structured approach to improving focus and managing tasks efficiently.",
  },
  {
    id: 5,
    value: "item 5",
    question: "Tell us about Social Connection and its role in the app.",
    answer:
      "Social Connection is a feature that fosters emotional well-being through virtual social interactions. It allows users to connect with others, share experiences, and build a supportive community within the app.",
  },
];


const LandingContent = () => {
  const { theme } = useTheme();
  return (
    <main className="flex flex-col gap-3 p-5 sm:gap-6">
      <div className="flex items-center justify-center">
        <h2 className="mb-6 text-2xl font-semibold sm:text-3xl">
          Explore Lifestyle Tools
        </h2>
      </div>
      <div className="flex items-center justify-center">
        <Marquee direction="right" pauseOnClick>
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`mx-2 flex h-40 w-60 flex-col items-center justify-center gap-1 rounded-lg border border-gray-300 p-6 text-center shadow-lg transition duration-300 ease-in-out hover:shadow-xl sm:mx-3 sm:w-96 sm:gap-2 ${
                theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
              }`}
            >
              <span className="text-md font-semibold sm:text-lg">
                {tool.label}
              </span>
              <p className="text-xs sm:text-sm">{tool.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="mb-10 flex items-center justify-center">
        <Marquee direction="left" pauseOnClick>
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`mx-2 flex h-40 w-60 flex-col items-center justify-center gap-1 rounded-lg border border-gray-300 p-6 text-center shadow-lg transition duration-300 ease-in-out hover:shadow-xl sm:mx-3 sm:w-96 sm:gap-2 ${
                theme === "dark" ? "bg-zinc-900" : "bg-zinc-100"
              }`}
            >
              <span className="text-md font-semibold sm:text-lg">
                {tool.label}
              </span>
              <p className="text-xs sm:text-sm">{tool.description}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="py-10">
        <h1 className="tex-4xl font-semibold">FAQs</h1>
        <Accordion type="single" collapsible className="w-full">
          {accordianData.map((accordian) => (
            <AccordionItem value={accordian?.value} key={accordian?.id}>
              <AccordionTrigger>{accordian?.question}</AccordionTrigger>
              <AccordionContent>{accordian?.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
};

export default LandingContent;
