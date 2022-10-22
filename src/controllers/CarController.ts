import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import IService from '../interfaces/IService';
import CarService from '../services/CarService';

class Car {
  constructor(private service: IService<ICar> = new CarService()) {}
  async create(req: Request, res: Response) {
    const result = await this.service.create(req.body);
    // const result = await this.service.create(req.body);
    return res.status(201).json(result);
    // res.status(result.code).json(result.message);
  }
}

export default Car;