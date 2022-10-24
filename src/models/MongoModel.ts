import { Model, UpdateQuery } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }
  
  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }

  public async readOne(_id: string): Promise<T | null> {
    return this._model.findOne({ _id });
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  public async delete(_id: string): Promise<T | null> {
    return this._model.findByIdAndDelete({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    return this._model.findByIdAndUpdate({ _id }, { ...obj } as UpdateQuery<T>);
  }
}

// import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
// import IModel from '../interfaces/IModel';

// abstract class MongoModel<Entity> implements IModel<Entity> {
//   constructor(protected _repository: Model<Entity>) {}

//   protected static validateId(_id: string): void {
//     if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');
//   }

//   public async create(data: Entity): Promise<Entity> {
//     return this._repository.create({ ...data });
//   }

//   public async read(): Promise<Entity[]> {
//     return this._repository.find();
//   }

//   public async readOne(_id: string): Promise<Entity | null> {
//     MongoModel.validateId(_id);
//     return this._repository.findById(_id);
//   }

//   public async update(_id: string, data: Entity): Promise<Entity | null> {
//     MongoModel.validateId(_id);
//     return this._repository.findByIdAndUpdate({ _id }, { ...data } as UpdateQuery<Entity>);
//     // return this._repository.findByIdAndUpdate({ _id }, { ...data }, { new: true });
//   }

//   public async delete(_id: string): Promise<Entity | null> {
//     MongoModel.validateId(_id);
//     return this._repository.findByIdAndDelete({ _id });
//   }
// }

export default MongoModel;