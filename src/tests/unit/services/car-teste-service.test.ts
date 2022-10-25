import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { car, carId, cars } from '../../mocks/carMock';
import { Model } from 'mongoose';
import { ZodError } from 'zod';

import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
// import { customError } from '../../../errors/customError'

const carModel = new CarModel();
const carService = new CarService(carModel);


describe('Verifica a camada service para carro', () => {

  before(async () => {
    sinon.stub(Model, 'create').resolves(carId);
    sinon.stub(Model, 'find').onCall(0).resolves(cars).onCall(1).resolves([]);
    sinon.stub(Model, 'findOne').onCall(0).resolves(carId).onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  })

  describe('se', () => {
    it('é possível adicionar um carro com sucesso.', async () => {
      const response = await carService.create(car);
      expect(response).to.be.deep.equal(carId);
    });

    it('Falha', async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err;
      }
      expect(error).to.be.instanceOf(ZodError);
    })
  });

  describe('se é possível ao pesquisar carros', () => {
    it('um lista de carros é encontrada com sucesso.', async () => {
      const response = await carService.read();
      expect(response).to.be.deep.equal(response);
    })

    it('caso não haja registros, retorne uma lista vazia.', async () => {
      const response = await carService.read();
      expect(response).to.be.deep.equal([]);
    })
  })

  describe('se é possível ao pesquisar por um carro', () => {
    it('um carro é encontrado com sucesso.', async () => {
      const response = await carService.readOne(carId._id);
      expect(response).to.be.deep.equal(carId);
    })

    // it('_id not found', async () => {
    //   let error;
    //   try {
    //     await carService.readOne(carsId._id);
    //   } catch (err: any) {
    //     error = err.message
    //   }
    //   expect(error).to.be.deep.equal(customError.NotFound);
    // })
  })
});