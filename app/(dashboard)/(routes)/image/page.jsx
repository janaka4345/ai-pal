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
      <h1>dalle 3 free tier only allowes 1 image and resolution 1024 only</h1>
      <h1>dalle 2free tier only allowes 5 image per min</h1>
      <ImagePrompt images={images} setImages={setImages} />
      {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}
      {/* <pre>{JSON.stringify(images, null, 2)}</pre> */}
      {images.map((image, i) => (
        <img key={i} src={image.url} alt="horse" />
      ))}
    </>
  );
}
