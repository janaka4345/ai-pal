"use client";
import { promptSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

export default function MessagePrompt() {
  const router = useRouter();
  const [messages, setMessages] = useState([]);

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
      //TODO Use server actions here
      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });
      console.log(response.data);
      form.reset();
      // setMessages((currentMessages) => [
      //   ...currentMessages,
      //   userMessage,
      //   response.data,
      // ]);
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // // Handle response data
      // const responseData = await response.json();
      // console.log(responseData);
      // console.log({ response: response });
    } catch (error) {
      // TODO activate pro
      console.log(error);
    } finally {
      router.refresh();
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-fit mx-auto"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Your Message"
                  {...field}
                />
              </FormControl>
              <FormDescription>What do you want to know?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {!isLoading ? "Submit" : "Submitting"}
        </Button>
      </form>
    </Form>
  );
}
