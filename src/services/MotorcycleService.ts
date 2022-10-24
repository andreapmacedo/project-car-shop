import { isValidObjectId } from 'mongoose';
import { ShowError } from '../errors/customError';
import IService from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';

export default class MotorcycleService implements IService<IMotorcycle> {
  private _motorcycle: IModel<IMotorcycle>;
  constructor(model: IModel<IMotorcycle>) {
    this._motorcycle = model;
  }
 
  public async create(obj: unknown): Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._motorcycle.create(parsed.data);
  }

  public read(): Promise<IMotorcycle[]> {
    return this._motorcycle.read();
  }

  public async readOne(_id: string): Promise<IMotorcycle> {
    if (!isValidObjectId(_id)) {
      throw new ShowError(400, 'InvalidId');
    }
    const car = await this._motorcycle.readOne(_id);
    if (!car) throw new ShowError(404, 'NotFound');
    return car;
  }

  public async update(_id: string, obj: unknown): Promise<IMotorcycle> {
    if (!obj || JSON.stringify(obj) === '{}') {
      throw new ShowError(400, 'EmptyBody');
    }
    if (!isValidObjectId(_id)) {
      throw new ShowError(400, 'InvalidId');
    }
    const car = await this._motorcycle.update(_id, obj as Partial<IMotorcycle>);
    if (!car) throw new ShowError(404, 'NotFound');
    const updatedCar = await this._motorcycle.readOne(_id);
    return updatedCar as IMotorcycle;
  }
}
