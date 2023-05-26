import express from 'express';
import { workRoutes } from './routes/work.routes'

const app = express();

app.use(express.json());

app.use(workRoutes);

app.listen(3333, ()=> console.log('Server is running'));