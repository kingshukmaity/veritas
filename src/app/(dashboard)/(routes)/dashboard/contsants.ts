import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Search,
  CreditCard,
  MessagesSquare,
  Music,
  Code,
  Settings,
} from "lucide-react";

export const tools = [
  {
    label: "Coversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Chats",
    icon: MessagesSquare,
    href: "/chats",
    color: "text-pink-500",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Search",
    icon: Search,
    href: "/search",
    color: "text-orange-500",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Manage Subscription",
    icon: CreditCard,
    href: "/manage-subscription",
    color: "text-emerald-500",
    bgColor: "bg-emerald-700/10",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];