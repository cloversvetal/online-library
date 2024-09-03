import express, {Express, Request, Response} from 'express';
import router from './routes/BookRoutes';
const app: Express = express();
const port: Number = 3000;

app.use(express.json());
app.use('/books', router);

app.get('/', (req: Request, res:Response) => {
    res.send('Hello, Typescript');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });