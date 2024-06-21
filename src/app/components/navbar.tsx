import React from "react";
import MobileSidebar from "./mobile-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MobileRidebar from "./mobile-ridebar";
import UserAvatar from "./user-avatar";

const NavBar = () => {
  return (
    <div className="flex flex-row items-center justify-between px-4 py-3">
      <MobileSidebar />
      <div className="flex flex-row gap-2">
        <div className="sm:hidden">
          <UserAvatar />
        </div>
        <MobileRidebar />
      </div>
    </div>
  );
};

export default NavBar;
