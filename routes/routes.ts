import express, { Request, Response, Router } from 'express';
import Cars from '../models/cars';
import cars from '../db/dbCars';

const router = Router();

let maxId = 4;

router.get('/', (req: Request, res: Response) => {
    res.status(200).json(cars);
});

router.get('/:id', (req: Request, res: Response) => {
    const car = cars.filter(vehicles => vehicles.id === +req.params?.id);
    if (car.length === 1) {
        res.status(200).json(car);
    } else {
        res.status(404).json({ "error": 'Car not found' });
    }
});

router.post('/', (req: Request, res: Response) => {
    const car: Cars = {
        id: ++maxId,
        make: req.body.make,
        models: []
    };
    cars.push(car);
    res.status(201).json(car);
});

router.put('/:id', (req: Request, res: Response) => {
    const car = cars.find(vehicles => vehicles.id === +req.params.id);
    if (car) {
        res.status(200).json(car);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
});

router.patch('/:id', (req: Request, res: Response) => {
    const car = cars.find(vehicles => vehicles.id === +req.params.id);
    if (car) {
        if (req.body.model) {
             car.models = req.body.models;
        }
        res.status(200).json(car);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
});

router.delete('/:id', (req: Request, res: Response) => {
    const index = cars.findIndex(vehicles => vehicles.id === +req.params.id);
    if (index !== -1) {
        cars.splice(index, 1);
        res.status(200).json(cars);
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
});

export default router;
