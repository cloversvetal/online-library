import express, {Express, Request, Response} from 'express';
import router from './routes/BookRoutes';
import cors from 'cors';
import * as crypto from 'crypto';
import { hashPassword, verifyPassword } from './utils/SecurityUtils';

const app: Express = express();
const port: Number = 5000;
const MASTER_KEY = "bea28b710d2176c127d1fd7060f84ec736352d98";
const MASTER_USER = 'masterUser';

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next(); // Call the next middleware function
});


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
