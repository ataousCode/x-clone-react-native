import express from 'express';
import { EVN } from './config/env.js';
import { connectDB } from './config/db.js';

const app = express();

connectDB();

app.get('/api/', (req, res) => res.send('Hello connection'));

app.listen(EVN.PORT, () => console.log(`Server running on PORT: ${EVN.PORT}`));
