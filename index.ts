import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
const host = process.env.HOST;

app.listen(port, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
