import express, {Express, Request, Response} from 'express';
import router from './routes/BookRoutes';
import cors from 'cors';
import * as crypto from 'crypto';
import { hashPassword, verifyPassword } from './utils/SecurityUtils';
import { errorHandler, methodLogger } from './middlewares/error-handler';

const app: Express = express();
const port: Number = 5000;
const MASTER_KEY = "bea28b710d2176c127d1fd7060f84ec736352d98";
const MASTER_USER = 'masterUser';

app.use(express.json());
app.use(cors());
app.use(methodLogger);


app.use('/books', router);


app.post('/login', (req: Request, res:Response) => {
    const {username, password} = req.body;
    const hashedInputPassword = hashPassword(password);

    if (username === MASTER_USER && hashedInputPassword === MASTER_KEY) {
        res.json({ SECRET_KEY: MASTER_KEY });
    } else {
        res.status(401).json({ message: 'Credenziali non valide' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

//app.use(errorHandler); // Posso metterlo anche alla fine perché è un middleware speciale chiamato solo in caso di errore

