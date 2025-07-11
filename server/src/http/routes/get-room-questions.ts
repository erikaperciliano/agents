import { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { schema } from "../../db/schema/index.ts";
import { db } from "../../db/connection.ts";
import { eq, desc } from "drizzle-orm";
import z from "zod/v4";
import { questions } from "../../db/schema/questions.ts";

export const getRoomsQuestions: FastifyPluginCallbackZod = (app) => {
    app.get('/rooms/:roomId/questions', {
       schema: {
            params: z.object({
                roomId: z.string()
            })
       },
    },
    
    async(request) => {
        const { roomId } = request.params

        const result = await db
            .select({
                id: schema.questions.id,
                questions: schema.questions.question,
                answer: schema.questions.answer,
                createdAt: schema.questions.createdAt,
            })
            .from(schema.questions)
            .where(eq(questions.roomId, roomId))
            .orderBy(desc(schema.questions.createdAt))

            return result
       }
    )
}
