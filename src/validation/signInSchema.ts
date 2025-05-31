import {z} from "zod";



const SignInSchema = z.object({
    email: z.string().trim().min(1, {message: "Email address Is Required"}).email(),
    password: z.string().min(1, {message: "Password is Required"}),
})

type signInType = z.infer<typeof SignInSchema>

export { SignInSchema, type signInType } ;