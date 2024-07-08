import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    remember: z.boolean().optional(),
});

export const registerSchema = z.object({
    firstName: z.string().trim().min(1, 'First name is required'),
    lastName: z.string().trim().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address').trim(),
    password: z.string().min(6, 'Password must be at least 6 characters long') // Minimum length
        .trim() // Remove leading/trailing whitespace
    // .satisfy(
    //     (password) => /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password),
    //     'Password must contain lowercase, uppercase, and numeric characters'
    // ) // Enforce character classes
    ,
    confirmPassword: z.string().trim().min(6, 'Confirm password must be at least 6 characters long'),
    terms: z.boolean().refine((value) => value === true, {
        message: "You must agree to terms and conditions",
    }), // Optional "Remember Me" checkbox
});

