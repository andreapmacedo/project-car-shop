import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

class Car {
  constructor(private _service: IService<IMotorcycle>) {}
  
  public async create(req: Request, res: Response) {
    console.log(req.body);
    const result = await this._service.create(req.body);
    res.status(201).json(result);
  }
  
  public async read(req: Request, res: Response) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }
  
  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.update(id, req.body);
    return res.status(200).json(result);
  }
}

export default Car;