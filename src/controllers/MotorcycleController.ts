import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

class Car {
  constructor(private _service: IService<IMotorcycle>) {}
  
  async create(req: Request, res: Response) {
    console.log(req.body);
    const result = await this._service.create(req.body);
    res.status(201).json(result);
  }
}

export default Car;