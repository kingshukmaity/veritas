"use client";

import * as z from "zod";
import axios from "axios";
import Heading from "~/app/components/heading";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { formSchema } from "./constant";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "~/app/components/ui/form";
import { Input } from "~/app/components/ui/input";
import { Button } from "~/app/components/ui/button";
import { useRouter } from "next/navigation";
import Empty from "~/app/components/ui/empty";
import LoaderComponent from "~/app/components/loader";
import { cn } from "~/app/lib/utils";
import UserAvatar from "~/app/components/user-avatar";
import BotAvatar from "~/app/components/bot-avatar";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import OpenAI from 'openai';

// Define your own type for chat completion messages
interface ChatCompletionMessageParam {
  role: "system" | "user" | "assistant";
  content: string;
}


const ChatDisplay: NextPage = ({messages}) => {
    return (<>
    <div className="flex flex-col h-fit">
        <div className="flex flex-col-reverse gap-y-4 pb-80">
            {/* Render chat messages here */}
            {messages.map((message, index) => (
            <div className={`w-full flex ${(message.role == 'user') ? 'justify-end' : 'justify-start'}`}>
                <div key={index} className={cn("p-8 w-2/3 flex items-center gap-x-8 rounded-lg", message.role === 'user' ? "bg-muted border-black/10" : "bg-muted")}>
                    {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                    <p className="text-sm">
                        {message.content}
                    </p>
                </div>
            </div>
            ))}
        </div>
        <div className="flex grow">
        </div>
        </div>
    </>);
};


const ConversationPage = () => {
  const { theme } = useTheme();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([{"role": "assistant", "content": "How may I help you ?"}]);
  const openai = new OpenAI({
  apiKey: '<OpenAI-API-Key>',
  dangerouslyAllowBrowser: true,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setMessages([ {"role":"user", "content": values.prompt},...messages]);
     try {
      const response = await openai.chat.completions.create(
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'system', content: 'You are a helpful therapist. Be like Tony Robbins, a world-renowned life coach and motivational speaker. Your goal is to coach the user on their behavior and attitudes using NLP techniques and other CBT techniques, while leveraging the basic human needs model to identify and address any addictions or other challenges the user may be facing.' }, { role: 'user', content: values.prompt }],
        }
      );
      console.log("response:", response)
      setMessages([{"role": "assistant", "content":response.choices[0].message.content},{"role":"user", "content": values.prompt},...messages]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8 h-full w-full">
        <div className="mt-4 space-y-4 h-fit w-full">
          { (messages.length == 0) ? <Empty label="No conversation started." /> : <ChatDisplay messages={messages} /> }
        </div>
        <div className="mt-5 fixed bottom-10 left-[300px] right-[300px] w-50 flex justify-center bg-white">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className={`border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent ${
                          theme === "dark" && "bg-zinc-900"
                        }`}
                        placeholder="How are you feeling today?"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className={`col-span-12 w-full lg:col-span-2 ${theme === "dark" && 'bg-zinc-700 text-white'}`}
                disabled={isLoading}
              >
                Send
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
