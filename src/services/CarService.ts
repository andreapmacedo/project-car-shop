import { isValidObjectId } from 'mongoose';
import { AppError } from '../errors/customError';
import IService from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

export default class CarService implements IService<ICar> {
  private _car: IModel<ICar>;
  constructor(model: IModel<ICar>) {
    this._car = model;
  }
 
  public async create(obj: unknown): Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._car.create(parsed.data);
  }
  
  public async readOne(_id: string): Promise<ICar> {
    if (!isValidObjectId(_id)) {
      throw new AppError(400, 'InvalidId');
    }
    const car = await this._car.readOne(_id);
    if (!car) throw new AppError(404, 'NotFound');
    return car;
  }
}
