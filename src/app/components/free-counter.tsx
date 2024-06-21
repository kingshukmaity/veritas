import React, { useEffect, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Progress } from "./ui/progress";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import Link from "next/link";

const FreeCounter = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const splitName = (str: string) => {
    return str.slice(0, 12);
  };

  const splitEmail = (str: string) => {
    return str.slice(0, 20);
  };

  return (
    <main className="px-3">
      <Card className="border-0 bg-white/10">
        <CardContent className="flex flex-col gap-5 py-6">
          <div className="flex items-center justify-center gap-3 text-white">
            <Link href="/settings">
              {isSignedIn ? (
                <UserButton afterSignOutUrl="/" />
              ) : (
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              )}
            </Link>
            <div className="flex w-full flex-col gap-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  {user ? `${splitName(user?.fullName || "")}....` : "User"}
                </span>
                <Badge className="ml-2 bg-emerald-500 text-xs text-white">
                  Free
                </Badge>
              </div>
              <span className="text-sm text-gray-300">
                {user
                  ? `${splitEmail(user?.emailAddresses[0]?.emailAddress || "")}....`
                  : "User@gmail.com"}
              </span>
            </div>
          </div>

          <Button className="w-full" variant="premium">
            Upgrade Pro
            <Zap className="ml-2 h-4 w-4 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </main>
  );
};

export default FreeCounter;
