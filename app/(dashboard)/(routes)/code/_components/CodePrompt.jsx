"use client";
import { codePromptSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
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

export default function CodePrompt({ messages, setMessages }) {
  const router = useRouter();

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
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prompt</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Your Prompt to generate code"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Generate code</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type="submit">
            {!isLoading ? "Submit" : "Submitting"}
          </Button>
        </form>
      </Form>
    </>
  );
}
