"use client";

import { Heading } from "@/components/custom/Heading";
import ImagePrompt from "./_components/ImagePrompt";
import { useState } from "react";
import { Image as LucidImage } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
      {/* <pre>{JSON.stringify(images, null, 2)}</pre> */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 mt-8">
        {images.map((image, i) => (
          <Card key={i * 10 + 10} className="rounded-lg overflow-hidden">
            <CardContent>
              <div className="relative aspect-square">
                <Image alt="image" fill src={image} />
              </div>
            </CardContent>
            <CardFooter>
              <p className="p-2">download button</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
