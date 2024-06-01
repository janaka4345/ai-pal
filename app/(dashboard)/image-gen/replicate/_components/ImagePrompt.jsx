"use client";
import { imagePromptSchema } from "@/lib/shema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Spinner from "@/components/custom/Spinner";
import { ChatBubbleIcon } from "@radix-ui/react-icons";

export default function ImagePrompt({ images, setImages }) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(imagePromptSchema),
    defaultValues: {
      imagePrompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values) {
    console.log(values);
    setImages([]);
    try {
      // console.log({ newImages });
      //TODO Use server actions here
      const response = await axios.post("/api/imageReplicate", values);
      // setImages(response);

      // if (response.status != 200) {
      //   throw new Error("Network response was not ok");
      // }
      //   // Handle response data

      // const urls=response.data.map(url=>(

      // ))
      const urls = response.data;
      setImages(urls);
      // TODO form fselet fields arnt resreting
      form.reset({
        imagePrompt: "",
      });

      // console.log({ response });
    } catch (error) {
      //   // TODO activate pro
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
          className="space-y-8 w-[80%] mx-auto"
        >
          <FormField
            control={form.control}
            name="imagePrompt"
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
                      placeholder="Your Image Prompt"
                      {...field}
                    />
                    <Button
                      size="sm"
                      variant="send"
                      className="absolute end-0 bottom-0.5"
                      disabled={isLoading || field.value === ""}
                      type="submit"
                    >
                      {!isLoading ? (
                        "Generate"
                      ) : (
                        <Spinner text="Generating..." />
                      )}
                    </Button>
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </>
  );
}
