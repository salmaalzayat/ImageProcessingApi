import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import helmet from 'helmet';
import router from './router/resizeApi';

//loads thr variables into the process
dotenv.config();

//to start a new express aplication
const app = express();

//to log Http requests
app.use(morgan('tiny'));

//to secure express application by setting various HTTP headers
app.use(helmet());

//puts thr middleware function at the router path
app.use('/api/images', router);

//to start Image Processing Api server
const PORT: string | number = process.env.PORT || 3000;

//bind and listen the connections
app.listen(PORT, (): void => {
  console.log(`server running on http://localhost:${PORT}`);
});
//get the EndPoint
app.get('/', (req: express.Request, res: express.Response): void => {
  res.status(200).json({ server: 'server is processing' });
});

//limit other EndPoints
app.get('/*', (req: express.Request, res: express.Response): void => {
  res.status(404).json({ Error: ' Not Found ' });
});

export default app;
