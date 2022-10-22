// import { Router } from 'express';
import { Router, Request, Response } from 'express';
import CarController from './controllers/CarController';

const carController = new CarController();

const route = Router();

route.post('/cars', (req: Request, res: Response) => carController.create(req, res));

export default route;