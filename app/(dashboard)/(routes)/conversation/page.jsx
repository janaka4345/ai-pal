import { MessageSquare } from "lucide-react";
import { Heading } from "@/components/custom/Heading";
import MessageForm from "./components/MessageForm";

export default function Conversation() {
  return (
    <>
      <Heading
        title="Conversation"
        description="something descriptive"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-secondary"
      />
      <MessageForm />
    </>
  );
}
