import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';

class Car {
  constructor(private _service: IService<ICar>) {}
  async create(req: Request, res: Response) {
    console.log(req.body);
    const result = await this._service.create(req.body);
    res.status(200).json(result);
  }
}

export default Car;