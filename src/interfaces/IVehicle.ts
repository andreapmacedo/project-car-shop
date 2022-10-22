import { z } from 'zod';

// export const VehicleZodSchema = z.object({
//   _id: z.string().optional(),
//   model: z.string().min(3),
//   year: z.number().int().gte(1900).lte(2022),
//   color: z.string().min(3),
//   status: z.boolean().optional(),
//   buyValue: z.number().int(),
// });

// export type IVehicle = z.infer<typeof VehicleZodSchema>;
// export { VehicleZodSchema };
const VehicleZodSchema = z.object({
  _id: z.string().optional(),
  model: z.string().min(3),
  year: z.number().int().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;
export { VehicleZodSchema };