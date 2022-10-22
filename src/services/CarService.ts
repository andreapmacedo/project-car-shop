// import { isValidObjectId } from 'mongoose';
// import { AppError, ErrorTypes } from '../errors/error';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';
import IModel from '../interfaces/IModel';
import CarModel from '../models/CarModel';

export default class Car implements IService<ICar> {
  constructor(private model: IModel<ICar> = new CarModel()) {}
  // create(obj: unknown): Promise<ICar> {
  create(obj: unknown): Promise<ICar> {
  // create(obj: unknown) {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      // throw new AppError(400, parsed.error.message);
      // return { code: 400, message: { message: 'All fields must be filled' } }; 
    }
    return this.model.create(obj as ICar);
  }
}