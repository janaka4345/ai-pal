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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const amountOptions = [
  { value: "1", label: "1 photo" },
  { value: "2", label: "2 photos" },
  { value: "3", label: "3 photos" },
  { value: "4", label: "4 photos" },
];
export const resolutionOptions = [
  { value: "256x256", label: "256x256" },
  { value: "512x512", label: "512x512" },
  { value: "1024x1024", label: "1024x1024" },
];

export default function ImagePrompt({ images, setImages }) {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(imagePromptSchema),
    defaultValues: {
      imagePrompt: "",
      amount: "",
      resolution: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values) {
    console.log(values);
    setImages([]);
    try {
      // console.log({ newImages });
      //TODO Use server actions here
      const response = await axios.post("/api/image", values);

      // setImages(response);

      // if (response.status != 200) {
      //   throw new Error("Network response was not ok");
      // }
      //   // Handle response data

      // const urls=response.data.map(url=>(

      // ))
      const urls = response.data.data;
      setImages(urls);
      console.log(urls);
      // TODO form fselet fields arnt resreting
      form.reset({
        imagePrompt: "",
        amount: "",
        resolution: "",
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
          className="space-y-8 w-fit mx-auto"
        >
          <FormField
            control={form.control}
            name="imagePrompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image Prompt</FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Your Image Prompt"
                    {...field}
                  />
                </FormControl>
                <FormDescription>What do you want draw?</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of images needed</FormLabel>
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of images required" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {amountOptions.map((amountOption) => (
                      <SelectItem
                        key={amountOption.value}
                        value={amountOption.value}
                      >
                        {amountOption.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="resolution"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image resolution</FormLabel>
                <Select
                  disabled={isLoading}
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select image resolution" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {resolutionOptions.map((resolutionOption) => (
                      <SelectItem
                        key={resolutionOption.value}
                        value={resolutionOption.value}
                      >
                        {resolutionOption.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
