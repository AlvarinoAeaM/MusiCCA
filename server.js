const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const dbConfig = {
    user: 'Admin',
    password: 'root',
    server: 'ALVARINO\SQLEXPRESS', 
    database: 'MusiCCA BD',
    options: {
        encrypt: true, // Utiliza true si usas Azure SQL
        trustServerCertificate: true // Utiliza true para un servidor local
    }
};

app.get('/songs', async (req, res) => {
    try {
        await sql.connect(dbConfig);
        const result = await sql.query`SELECT TOP (1000) [id], [Track Name], [Artist Name(s)], [Album Image URL] FROM [dbo].[BaseGeneral]`;
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
