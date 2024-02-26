"use client";

import { Heading } from "@/components/custom/Heading";
import ImagePrompt from "./_components/ImagePrompt";
import { useState } from "react";
import { Image as LucidImage } from "lucide-react";
import ImageCard from "./_components/ImageCard";

export default function Conversation() {
  const [images, setImages] = useState([]);

  return (
    <>
      <Heading
        title="Image Generation"
        description="something descriptive"
        icon={LucidImage}
        iconColor="text-pink-500"
        bgColor="bg-pink-700/10"
      />

      <ImagePrompt images={images} setImages={setImages} />

      {/* TODO add conversaation style message output 
      consider st5ramnig output like chatgpt
      */}

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-8 w-[400px] mx-auto">
        {images.map((image, i) => (
          <ImageCard key={i} image={image} />
        ))}
      </div>
    </>
  );
}
