// import { Router } from 'express';
import { Router, Request, Response } from 'express';
import CarController from './controllers/CarController';
import CarModel from './models/CarModel';

const carModel = new CarModel();
const carController = new CarController(carModel);

const route: Router = Router();
route.post('/cars', (req: Request, res: Response) => carController.create(req, res));

// route.get('/cars', (req: Request, res: Response) => {  
//   res.status(200).json('message');
// });
export default route;