"use client";
import { promptSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Spinner from "@/components/custom/Spinner";

export default function MessagePrompt({ messages, setMessages }) {
  const form = useForm({
    resolver: zodResolver(promptSchema),
    defaultValues: {
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values) {
    const userMessage = {
      role: "user",
      // parts: values.message,
      parts:[{ text: values.message }]
    };

    const newMessages = [...messages, userMessage];
    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      { role: "model", parts:[{ text: 'loading' }] },
    ]);

    try {
      //TODO Use server actions here
      const response = await axios.post("/api/gemniConversation", {
        messages: newMessages,
      });

      // console.log({'message1':messages});
// console.log(response);

      setMessages((currentMessages) => {
        const updateArray = [...currentMessages];
        updateArray[updateArray.length - 1] = response.data;
        return updateArray;
      });

      if (response.status != 200) {
        throw new Error("Network response was not ok");
      }
      // Handle response data
      // console.log({'message2':messages});

      form.reset();
    } catch (error) {
      // TODO activate pro
      console.log(error);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[80%] mx-auto  "
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative">
                    <div className="absolute  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <ChatBubbleIcon className="text-violet-500 " />
                    </div>

                    <Input
                      autoFocus
                      className="pl-10 "
                      disabled={isLoading}
                      placeholder="Chat with AI"
                      {...field}
                    />
                    <Button
                      size="sm"
                      variant="send"
                      className="absolute end-0 bottom-0.5"
                      disabled={isLoading || field.value === ""}
                      type="submit"
                    >
                      {!isLoading ? "Send" : <Spinner text="Sending..." />}
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
