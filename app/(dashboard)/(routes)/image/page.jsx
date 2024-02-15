"use client";

import { Heading } from "@/components/custom/Heading";
import ImagePrompt from "./_components/ImagePrompt";
import { useState } from "react";
import { Image } from "lucide-react";

export default function Conversation() {
  const [images, setImages] = useState([]);

  return (
    <>
      <Heading
        title="Image Generation"
        description="something descriptive"
        icon={Image}
        iconColor="text-pink-500"
        bgColor="bg-pink-700/10"
      />
      <ImagePrompt images={images} setImages={setImages} />
      {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
      <pre>{JSON.stringify(images, null, 2)}</pre>
    </>
  );
}
