// import { Router } from 'express';
import { Router, Request, Response } from 'express';
import MotorcycleController from '../controllers/MotorcycleController';
import MotorcycleModel from '../models/MotorcycleModel';
import MotorcycleService from '../services/MotorcycleService';

const route: Router = Router();

const motorcycle = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycle);
const motorcycleController = new MotorcycleController(motorcycleService);

route.post('/motorcycles', (req: Request, res: Response) => motorcycleController.create(req, res));
route.get('/motorcycles', (req: Request, res: Response) =>
  motorcycleController.read(req, res));

route.get('/motorcycles/:id', (req: Request, res: Response) =>
  motorcycleController.readOne(req, res));

route.put('/motorcycles/:id', (req: Request, res: Response) =>
  motorcycleController.update(req, res));

export default route;