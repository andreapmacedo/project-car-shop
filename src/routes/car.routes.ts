// import { Router } from 'express';
import { Router, Request, Response } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const route: Router = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

route.post('/cars', (req: Request, res: Response) => carController.create(req, res));

export default route;