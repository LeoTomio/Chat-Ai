import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
let robot = "https://static.vecteezy.com/system/resources/previews/010/265/384/original/cute-happy-3d-robot-png.png"

export default function Home() {
  return (
    <div className="flex pt-36 item-center bg-slate-100 justify-center">
      <Card className="w-[450px] h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Version SDK to create a chat bot</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>LT</AvatarFallback>
              <AvatarImage src="https://github.com/LeoTomio.png" />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Humano:</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo asperiores quas ipsum rem nulla iure perspiciatis praesentium veniam quia placeat delectus quidem libero, quibusdam possimus commodi iste fuga nihil omnis!
            </p>
          </div>


          <div className="flex gap-3 text-slate-600 text-sm">
            <Avatar>
              <AvatarFallback>LT</AvatarFallback>
              <AvatarImage src={robot} />
            </Avatar>
            <p className="leading-relaxed">
              <span className="block font-bold text-slate-800">Robô:</span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo asperiores quas ipsum rem nulla iure perspiciatis praesentium veniam quia placeat delectus quidem libero, quibusdam possimus commodi iste fuga nihil omnis!
            </p>
          </div>

        </CardContent>
        <CardFooter className="space-x-2">
          <Input placeholder="How can i help you?" />
          <Button type="submit">Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
} 
