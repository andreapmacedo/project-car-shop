// import { z } from 'zod';
// // import { VehicleZodSchema } from './IVehicle';

// const CarZodSchema = z.object({
//   _id: z.string().optional(),
//   model: z.string().min(3),
//   year: z.number().int().gte(1900).lte(2022),
//   color: z.string().min(3),
//   status: z.boolean().optional(),
//   buyValue: z.number().int(),
//   doorsQty: z.number().int().gte(2).lte(4),
//   seatsQty: z.number().int().gte(2).lte(7),
// });

// // const CarZodSchema = VehicleZodSchema.extend({
// //   doorsQty: z.number().int().gte(2).lte(4),
// //   seatsQty: z.number().int().gte(2).lte(7),
// // });

// type ICar = z.infer<typeof CarZodSchema>;

import { z } from 'zod';

const CarZodSchema = z.object({
  _id: z.string().optional(),
  model: z.string().min(3),
  year: z.number().int().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().int(),
  doorsQty: z.number().int().gte(2).lte(4),
  seatsQty: z.number().int().gte(2).lte(7),
});

type ICar = z.infer<typeof CarZodSchema>;

export default ICar;
export { CarZodSchema };