"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, MoreHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";
import Ridebar from "./ridebar";

const MobileRidebar = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon" className="md:hidden">
            <MoreHorizontal />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <Ridebar />
        </SheetContent>
      </Sheet>
    </main>
  );
};

export default MobileRidebar;
