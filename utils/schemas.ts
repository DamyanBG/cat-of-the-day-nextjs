import { z } from "zod"
import { toFormikValidationSchema } from "zod-formik-adapter";

export const userRegisterSchema = toFormikValidationSchema(
    z.object({
        first_name: z.string().min(2).max(255),
        last_name: z.string().min(2).max(255),
        password: z.string().min(8).max(255),
        email: z.string().email(),
    })
);

export const userLoginSchema = toFormikValidationSchema(
    z.object({
        password: z.string().min(8, { message: "At least 8 characters!" }).max(255),
        email: z.string().email(),
    })
)

export const addCatSchema = toFormikValidationSchema(
    z.object({
        name: z.string().min(2).max(255),
        microchip_id: z.string().max(255).optional(),
        passport_id: z.string().max(255).optional(),
        photo: z.string().min(2, { message: "Please, upload photo!" }),
        breed: z.string().max(255).optional(),
    })  
);
