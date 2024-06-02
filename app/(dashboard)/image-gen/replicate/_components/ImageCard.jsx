import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'

export default function ImageCard({ image }) {
    return (
        <Card className="mx-auto h-[300px] w-[200px] overflow-hidden rounded-lg">
            <Dialog>
                <CardContent className="p-0 pb-6">
                    <div className="relative aspect-square">
                        <DialogTrigger>
                            <Image
                                alt="image"
                                fill
                                src={image}
                                className="cursor-pointer"
                            />
                        </DialogTrigger>
                    </div>
                </CardContent>
                <DialogContent className="h-5/6 w-3/4">
                    <Image
                        alt="image"
                        fill
                        src={image}
                        className="cursor-pointer"
                    />
                    {/* <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader> */}
                </DialogContent>
            </Dialog>

            <CardFooter className="justify-center">
                <Button
                // onClick={() =>
                //   handleDownloadFileAtUrl("http://localhost:3000/out-0.png")
                // }
                >
                    Download
                </Button>
                <Button variant="ghost">Save</Button>
            </CardFooter>
        </Card>
    )
}
