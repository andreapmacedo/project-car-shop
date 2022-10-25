import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model } from 'mongoose';
import CarModel from '../../../models/CarModel';
import { car, carId, cars } from '../../mocks/carMock';
// import { customError } from '../../../errors/customError'

describe('Verifica a camada model para carro', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carId);
    sinon.stub(Model, 'find').onCall(0).resolves(cars).onCall(1).resolves([]);
    sinon.stub(Model, 'findOne').resolves(carId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('se', () => {
    it('é possível adicionar um carro com sucesso.', async () => {
      const response = await carModel.create(car);
      expect(response).to.be.deep.equal(carId);
    });
  });

  describe('se é possível ao pesquisar carros', () => {
    it('um lista de carros é encontrada com sucesso.', async () => {
      const response = await carModel.read();

      expect(response).to.be.deep.equal(response);
    })

    it('caso não haja registros, retorne uma lista vazia.', async () => {
      const response = await carModel.read();

      expect(response).to.be.deep.equal([]);
    })
  })

  describe('se é possível ao pesquisar por um carro', () => {
    it('um carro é encontrado com sucesso.', async () => {
      const response = await carModel.readOne(carId._id);

      expect(response).to.be.deep.equal(carId);
    })

    // it('_id invalid', async () => {
    //   let error;
    //   try {
    //     await carModel.readOne('123ERRADO');
    //   } catch (err: any) {
    //     error = err.message
    //   }

    //   expect(error).to.be.deep.equal(customError.InvalidId);
    // })
  })

});