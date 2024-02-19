import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ImageCard({ image }) {
  return (
    <Card className="rounded-lg overflow-hidden ">
      <CardContent className="p-0 pb-6">
        <div className="relative aspect-square ">
          <Image
            alt="image"
            fill
            src={image}
            className="cursor-pointer"
            onClick={() => console.log("click")}
          />
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button>Download</Button>
        <Button variant="ghost">Save</Button>
      </CardFooter>
    </Card>
  );
}
