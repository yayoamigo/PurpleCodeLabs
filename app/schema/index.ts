import * as z from 'zod';

export const LoginSchema = z.object({
    company: z.string().min( 4,{
        message: "Please you company name"
    }),
    message: z.string().min(20, {
        message: "This field cannot be empty"
})
})