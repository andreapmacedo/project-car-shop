// import { isValidObjectId } from 'mongoose';
// import { AppError, ErrorTypes } from '../errors/error';

// import { ErrorTypes } from '../errors/customError';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { VehicleZodSchema } from '../interfaces/IVehicle';

import IService from '../interfaces/IService';
import IModel from '../interfaces/IModel';
// import CarModel from '../models/CarModel';

export default class Car implements IService<ICar> {
  constructor(private _model: IModel<ICar>) {}
  
  create(obj: unknown): Promise<ICar> {
    const parsedVehicle = VehicleZodSchema.safeParse(obj);
    const parsedCar = CarZodSchema.safeParse(obj);
    if (!parsedVehicle.success) throw parsedVehicle.error;
    if (!parsedCar.success) throw parsedCar.error;
    const parsed = { ...parsedVehicle.data, ...parsedCar.data };
    return this._model.create(parsed);
  }
}