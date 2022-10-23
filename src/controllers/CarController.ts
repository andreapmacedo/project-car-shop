import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import ICar from '../interfaces/ICar';

class Car {
  constructor(private _service: IService<ICar>) {}
  
  async create(req: Request, res: Response) {
    console.log(req.body);
    const result = await this._service.create(req.body);
    res.status(201).json(result);
  }
}

export default Car;