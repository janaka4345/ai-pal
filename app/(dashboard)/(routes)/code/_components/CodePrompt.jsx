"use client";
import { codePromptSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { ChatBubbleIcon } from "@radix-ui/react-icons";
import Spinner from "@/components/custom/Spinner";

export default function CodePrompt({ messages, setMessages }) {
  const form = useForm({
    resolver: zodResolver(codePromptSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values) {
    try {
      const userMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      // console.log({ newMessages });
      //TODO Use server actions here
      const response = await axios.post("/api/code", {
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
    }
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-[80%] mx-auto"
        >
          <FormField
            control={form.control}
            name="prompt"
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
                      placeholder="Your Prompt to generate code"
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
