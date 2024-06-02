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
        res.status(404).json({ message: 'Car not found' });
    }
});



export default router;
