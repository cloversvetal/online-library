import express, {Express, Request, Response} from 'express';
import router from './routes/BookRoutes';
import cors from 'cors';
const app: Express = express();
const port: Number = 5000;

app.use(express.json());
app.use(cors());
app.use('/books', router);

app.get('/', (req: Request, res:Response) => {
    res.send('Hello, Typescript');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });