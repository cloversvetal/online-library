# online-library

Libreria online
Il progetto della libreria è suddiviso in 3 parti principali:

1. Database Postgres 'Libreria' con tabelle: libro, autore
2. Server backend realizzato con tecnologia Node.js ed Express.js
3. Client realizzato con React

   03.09.2024
   Come primo step, si inizializza la parte backend e si crea il DB su postgres.
   Si utilizza github con git per tracciare le versioni

Installiamo i componenti necessari per typescript ed express
npm init -y
npm install express @types/express typescript ts-node @types/node nodemon pg

npm install dotenv
npm install @types/dotenv --save-dev
