"use client"

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { UserButton, useAuth } from "@clerk/nextjs";

const UserAvatar = () => {
  const { isSignedIn } = useAuth();
  return (
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
  );
};

export default UserAvatar;
