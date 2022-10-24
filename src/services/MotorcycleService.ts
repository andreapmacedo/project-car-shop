import IService from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';

export default class CarService implements IService<IMotorcycle> {
  private _motorcycle: IModel<IMotorcycle>;
  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }
 
  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._motorcycle.create(parsed.data);
  }
}
