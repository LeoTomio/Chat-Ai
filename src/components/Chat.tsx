'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { useChat } from 'ai/react'

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat/',
    })

    return (
        <Card className="w-[440px]">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Using Version SDK to create a chat bot</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className='h-[640px] w-full pr-4'>
                    {messages.map(message => {
                        return (
                            <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>LT</AvatarFallback>
                                        <AvatarImage src="https://github.com/LeoTomio.png" />
                                    </Avatar>
                                )}
                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>RS</AvatarFallback>
                                        <AvatarImage src="https://static.vecteezy.com/system/resources/previews/010/265/384/original/cute-happy-3d-robot-png.png" />
                                    </Avatar>
                                )}

                                <p className="leading-relaxed text-justify">
                                    <span className="block font-bold text-slate-700">
                                        {message.role === 'user' ? 'Usuário' : 'AI'}:</span>
                                    {message.content}
                                </p>
                            </div>
                        )
                    })
                    }
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="How can i help you?" value={input} onChange={handleInputChange} />
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )

}