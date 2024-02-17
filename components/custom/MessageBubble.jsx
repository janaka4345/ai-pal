import React from "react";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MessageBubble({ message, avatar, role }) {
  return (
    <div
      className={cn("flex  items-start  gap-2.5 m-10   w-fit", {
        "ml-auto flex-row-reverse ": role === "user",
        "ml-10 flex-row ": role === "assistant",
      })}
    >
      <img className="w-8 h-8 rounded-full" src={avatar} alt="Jese image" />
      <div
        className={cn(
          "flex flex-col relative w-full max-w-[320px] leading-1.5 p-4 border-gray-200   ",
          {
            "bg-green-100 rounded-s-xl rounded-ee-xl ": role === "user",
            "bg-red-100 rounded-e-xl rounded-es-xl": role === "assistant",
          }
        )}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 ">
            Bonnie Green
          </span>
        </div>
        <p className="text-sm font-normal py-2.5 text-gray-900 ">{message}</p>
        {role === "assistant" && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0"
          >
            <Copy className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
