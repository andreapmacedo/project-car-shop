import { isValidObjectId } from 'mongoose';
import { ShowError } from '../errors/customError';
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

  public read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar> {
    if (!isValidObjectId(_id)) {
      throw new ShowError(400, 'InvalidId');
    }
    const car = await this._car.readOne(_id);
    if (!car) throw new ShowError(404, 'NotFound');
    return car;
  }

  public async update(_id: string, obj: unknown): Promise<ICar> {
    if (!obj || JSON.stringify(obj) === '{}') {
      throw new ShowError(400, 'EmptyBody');
    }
    if (!isValidObjectId(_id)) {
      throw new ShowError(400, 'InvalidId');
    }
    const car = await this._car.update(_id, obj as Partial<ICar>);
    if (!car) throw new ShowError(404, 'NotFound');
    const updatedCar = await this._car.readOne(_id);
    return updatedCar as ICar;
  }
}
