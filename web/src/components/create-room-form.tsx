import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useCreateRoom } from "./http/use-create-room";


const createRoomSchema = z.object({
    name: z.string().min(3, { message: 'Include at least 3 characters'}),
    description: z.string()
})

type CreateRoomFormData = z.infer<typeof createRoomSchema>

export function CreateRoomForm() {
    const { mutateAsync: createRoom } = useCreateRoom()

    const createRoomForm = useForm<CreateRoomFormData>({
        resolver: zodResolver(createRoomSchema),
        defaultValues: {
            name:'',
            description: ''
        }
    })

    async function handleCreateRoom({ name, description }: CreateRoomFormData){
        await createRoom({ name, description })
        createRoomForm.reset()
    }
        
    return(
        <Card>
            <CardHeader>
                <CardTitle>Create room</CardTitle>
                <CardDescription>Create a new room to start asking questions and receiving answers from the AI.</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...createRoomForm}>
                    <form onSubmit={createRoomForm.handleSubmit(handleCreateRoom)} className="flex flex-col gap-4">
                        <FormField 
                            control={createRoomForm.control} 
                            name="name"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Room name</FormLabel>
                                        <FormControl>
                                            <Input {...field} placeholder="Enter the name of the room..."/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )
                            }}  
                        />

                        <FormField 
                            control={createRoomForm.control} 
                            name="description"
                            render={({ field }) => {
                                return (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )
                            }}  
                        />

                        <Button type="submit" className="w-full">Create room</Button>
                    </form>
                </Form>
               
            </CardContent>
        </Card>
    )
}