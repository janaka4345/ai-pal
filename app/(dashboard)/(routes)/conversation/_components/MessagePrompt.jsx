"use client";
import { promptSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function MessagePrompt({ messages, setMessages }) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values) {
    try {
      const userMessage = {
        role: "user",
        content: values.message,
      };
      const newMessages = [...messages, userMessage];
      // console.log({ newMessages });
      //TODO Use server actions here
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((currentMessages) => [
        ...currentMessages,
        userMessage,
        response.data,
      ]);

      if (response.status != 200) {
        throw new Error("Network response was not ok");
      }
      // Handle response data
      form.reset();
    } catch (error) {
      // TODO activate pro
      console.log(error);
    } finally {
      router.refresh();
    }
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-fit mx-auto"
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-[800px]">
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <ChatBubbleIcon />
                    </div>

                    <Input
                      className="pl-10"
                      disabled={isLoading}
                      placeholder="Chat with AI"
                      {...field}
                    />
                    <Button
                      variant="small"
                      className="absolute end-0 bottom-0"
                      disabled={isLoading || field.value === ""}
                      type="submit"
                    >
                      {!isLoading ? "Send" : "Sending"}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}
