"use client";
import React from "react";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
import LoadingSkeleton from "@/components/Skeletons/LoadingSkeleton";

export default function MessageBubble({ message, avatar, role }) {
  return (
    //role === "assistant"||role ==="model"  assistance required for open ai responses and model required for gemini ai api
    // TODO change api response to return an uniform responses across different apis
    <div
      className={cn("flex  items-start  gap-2.5 m-10 min-w-[200px]   w-fit", {
        "ml-auto flex-row-reverse ": role === "user",
        "ml-10 flex-row ": (role === "assistant"||role ==="model"),
      })}
    >
      <img className="w-8 h-8 rounded-full" src={avatar} alt="avatar image" />
      <div
        className={cn(
          "flex flex-col relative w-full max-w-[320px] leading-1.5 p-4 border-gray-200   ",
          {
            "bg-green-100 rounded-s-xl rounded-ee-xl ": role === "user",
            "bg-red-100 rounded-e-xl rounded-es-xl": (role === "assistant"||role ==="model"),
          }
        )}
      >
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <span className="text-sm font-semibold text-gray-900 ">
            {role === "user" ? "Bonnie Green" : "AI Assistant"}
          </span>
        </div>

        {message === "loading" ? (
          <LoadingSkeleton />
        ) : (
          <p className="text-sm font-normal py-2.5 text-gray-900 ">{message}</p>
        )}

        {(role === "assistant"||role ==="model") && message != "loading" && (
          <Button
            onClick={() => navigator.clipboard.writeText(message)}
            variant="ghostCopy"
            size="icon"
            className="absolute top-0 right-0 "
          >
            <Copy className="w-5 h-5" />
          </Button>
        )}
      </div>
    </div>
  );
}
