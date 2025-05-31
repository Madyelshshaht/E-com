// Import Zod
import { z } from "zod";



//Zod Schema
const SignupSchema = z
    .object({
        firstName: z.string().trim().min(1, { message: "First name is required " }),
        lastName: z.string().trim().min(1, { message: "Last name is required " }),
        email: z.string().min(1, { message: "Email is required " }).email(),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters longs" })
            .regex(/.*[!@#$%^&*()_+{}|[\]\\:";`<>?,./].*/, {
                message: "Password should contain at least 1 special character ",
            }),
        confirmPassword: z
            .string()
            .min(1, { message: "confirm Password  is required " }),
    })
    .refine((input) => input.password === input.confirmPassword, {
        message: "ConfirmPassword and Password does not match",
        path: ["confirmPassword"],
    });

// Type
type signUpType = z.infer<typeof SignupSchema>;


export {SignupSchema , type signUpType } ;