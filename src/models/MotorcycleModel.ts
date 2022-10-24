import { Schema, model as mongooseCreateModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const mongooseMotorcycleSchema = new Schema<IMotorcycle>({
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
  },
  buyValue: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true, 
  },
  engineCapacity: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
});

class MotorcyclesModel extends MongoModel<IMotorcycle> {
  constructor(model = mongooseCreateModel('Motorcycles', mongooseMotorcycleSchema)) {
    super(model);
  }
}

export default MotorcyclesModel;