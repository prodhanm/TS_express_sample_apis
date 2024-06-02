import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import routes from './routes/routes';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/cars', routes);

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}/api/cars`);
});
