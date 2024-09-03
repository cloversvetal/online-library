import express, {Express, Request, Response} from 'express';

const app: Express = express();
const port: Number = 3000;

app.get('/', (req: Request, res:Response) => {
    res.send('Hello, Typescript');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });