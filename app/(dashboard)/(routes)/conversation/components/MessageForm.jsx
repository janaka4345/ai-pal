"use client";
import { formSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export default function MessageForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values) {
    const messages = values.message;
    await new Promise((resolve) => setTimeout(resolve, 5000));
    try {
      //TODO Use server actions here
      // const response = await fetch("/api/conversation", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     // Add any additional headers if needed
      //   },
      // body: JSON.stringify(messages),
      // });
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // Handle response data
      // const responseData = await response.json();
      // console.log("Response:", responseData);
    } catch (error) {
      console.log(error);
    }
    console.log(messages);
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
                <Input placeholder="Your Message" {...field} />
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
