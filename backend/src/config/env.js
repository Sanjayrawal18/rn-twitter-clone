import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

export const ENV = z
  .object({
    PORT: z.string().default("5000"),
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    MONGO_URI: z.string(),
    CLERK_PUBLISHABLE_KEY: z.string(),
    CLERK_SECRET_KEY: z.string(),
    CLOUDINARY_CLOUD_NAME: z.string(),
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_API_SECRET: z.string(),
    ARCJET_ENV: z.enum(["development", "production"]).default("development"),
    ARCJET_KEY: z.string(),
  })
  .parse(process.env);
