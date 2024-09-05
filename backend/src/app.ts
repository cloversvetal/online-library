import express, {Express, Request, Response} from 'express';
import router from './routes/BookRoutes';
import cors from 'cors';

const app: Express = express();
const port: Number = 5000;
const SECRET_KEY = "bea28b710d2176c127d1fd7060f84ec736352d98";

app.use(express.json());
app.use(cors());


app.use('/books', router);


app.post('/login', (req: Request, res:Response) => {
    const {username, password} = req.body;
    
    if(username === 'masterUser' && password === 'passwordprova') {
        res.json({SECRET_KEY});  
    }
    else {
        res.status(401).json({message: 'Invalid credentials'});
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});