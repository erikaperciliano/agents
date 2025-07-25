import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'

const createQuestionSchema = z.object({
  question: z
    .string()
    .min(1, 'Question is mandatory')
    .min(10, 'Question must be at least 10 characters long')
    .max(500, 'Question must be less than 500 characters'),
})

type CreateQuestionFormData = z.infer<typeof createQuestionSchema>

interface QuestionFormProps {
  roomId: string
}

export function QuestionForm({ roomId }: QuestionFormProps) {
  const form = useForm<CreateQuestionFormData>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues: {
      question: '',
    },
  })

  function handleCreateQuestion(data: CreateQuestionFormData) {
    // biome-ignore lint/suspicious/noConsole: dev
    console.log(data, roomId)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ask a Question</CardTitle>
        <CardDescription>
          Enter your question below to receive an AI-generated answer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleCreateQuestion)}
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Question</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px]"
                      placeholder="What would you like to know?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Send question</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
