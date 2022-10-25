import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Request, Response } from 'express';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import CarController from '../../../controllers/CarController';
import { car, carId, cars } from '../../mocks/carMock';

describe('Verifica a camada controller para carro', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(car);
    sinon.stub(carService, 'read').onCall(0).resolves(cars).onCall(1).resolves([]);
    sinon.stub(carService, 'readOne').resolves(carId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  describe('se', () => {
    it('é possível adicionar um carro com sucesso.', async () => {
      req.body = car;
      await carController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(car)).to.be.true;
    });
  });

  describe('se é possível ao pesquisar carros', () => {
    it('um lista de carros é encontrada com sucesso.', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(cars)).to.be.true;
    })

    it('caso não haja registros, retorne uma lista vazia.', async () => {
      await carController.read(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([])).to.be.true;
    })
  })

  describe('se é possível ao pesquisar por um carro', () => {
    it('um carro é encontrado com sucesso.', async () => {
      req.params = { id: carId._id };
      await carController.readOne(req, res)

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carId)).to.be.true;
    })
  })

});