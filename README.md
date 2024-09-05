# online-library

/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/

PREREQUISITI E SETUP:  
"node": ">=16.18.0",
"npm": ">=8.0.0"

1. CLONA LA REPOSITORY

   ```
   git clone https://github.com/cloversvetal/online-library.git
   cd online-library
   ```

2. ISTALLA LE DIPENDENZE BACKEND

   ```
   cd backend
   npm install
   ```

3. INSTALLA LE DIPENDENZE FRONTEND

   ```
   cd ../frontend
   npm install
   ```

4. START DEL SERVER BACKEND

   ```
   cd ../backend
   npx tsc
   npm start
   ```

5. In a new terminal, start the frontend
   ```
   cd ../frontend
   npx tsc
   npm start
   ```
6. L'applicazione dovrebbe essere accessibile alla porta 'http://localhost:3000' mentre
   il server alla porta 'http://localhost:5000'

/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/
/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/

Libreria online
Il progetto della libreria è suddiviso in 3 parti principali:

1. Database Postgres 'Libreria' con tabelle: books, users
2. Server backend realizzato con tecnologia Node.js ed Express.js
3. Client realizzato con React

/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/
/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/

03.09.2024  
Come primo step, si inizializza la parte backend e si crea il DB su postgres.
Si utilizza github con git per tracciare le versioni

1. Creazione del file di configurazione per il Dabatase in
   "backend/src/config/database.ts"

2. Creazione del file model per gestire le chiamate al DB in
   "backend/src/models/BookModel.ts"

3. Crezione del controller che si occupa di gestire le richieste
   e le risposte del server per quanto riguarda il lavoro con i libri
   "backend/src/config/BookController.ts"

4. Creazione del file BookRoutes.ts per gestire le routes in
   "backend/src/config/BookRoutes.ts"

La creazione delle cartelle e dei file segue il design pattern MVC.

/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/
/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/

04.09.2024  
Creazione del frontend con React. Sono stati creati singolarmente i componenti per
il funzionamento della web app.
E' stato inoltre utilizzato Bootstrap per personalizzare lo stile grafico dell'applicazione

1. Tutti i componenti sono presenti nella cartella "frontend/src/components" e sono stati creati nel seguente ordine: BookItem.ts - BookList.ts - ResearchBook.ts - AddBookForm.ts - LoginForm.ts

Per realizzare questa parte sono state tenute in considerazioni le caratteristiche architteturali di React
che sono: Isolamento dei componenti, One-Way Data Flow e i Hooks

/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/
/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/

05.09.2024  
Sono state apportate ulteriori modifiche per semplicificare ed accorciare il codice sia
della parte frontend sia della parte backend

/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/
/****\*\*\*\*****\*\*\*\*****\*\*\*\*****\*\*****\*\*\*\*****\*\*\*\*****\*\*\*\*****/
