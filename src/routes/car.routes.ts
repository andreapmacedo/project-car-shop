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
route.get('/cars', (req: Request, res: Response) => carController.read(req, res));
route.get('/cars/:id', (req: Request, res: Response) => carController.readOne(req, res));
route.put('/cars/:id', (req: Request, res: Response) => carController.update(req, res));
route.delete('/cars/:id', (req, res) => carController.delete(req, res));

export default route;