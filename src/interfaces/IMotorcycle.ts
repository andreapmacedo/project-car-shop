import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().int().gt(0).lte(2500),
});
// Sem o extend
// export type IMotorcycle = z.infer<typeof MotorcycleZodSchema> & IVehicle;
export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;