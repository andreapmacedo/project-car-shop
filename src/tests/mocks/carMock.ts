import { ICar } from "../../interfaces/ICar";

export const car: ICar = {
  "model": "Ferrari Maranello",
  "year": 1963,
  "color": "red",
  "buyValue": 3500000,
  "seatsQty": 2,
  "doorsQty": 2,
};

export const carId: ICar & { _id: string } = {
  "_id": "4edd40c86762e0fb12000003",
  "doorsQty": 2,
  "seatsQty": 2,
  "model": "Ferrari Maranello",
  "year": 1963,
  "color": "red",
  "buyValue": 3500000
}

export const cars: ICar[] & { _id: string }[] = [
  {
		"_id": "4edd40c86762e0fb12000003",
		"doorsQty": 2,
		"seatsQty": 2,
		"model": "Ferrari Maranello",
		"year": 1963,
		"color": "red",
		"buyValue": 3500000
	},
	{
		"_id": "4edd40c86762e0fb12000004",
		"doorsQty": 2,
		"seatsQty": 2,
		"model": "Ferrari Maranello",
		"year": 1963,
		"color": "red",
		"buyValue": 3500000
	},
];