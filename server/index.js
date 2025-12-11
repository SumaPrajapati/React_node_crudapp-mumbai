const express = require('express');
const sql = require('mssql');
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();
const { v4: uuidv4 } = require('uuid');


const uuid = uuidv4();

const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());

const config = {
    server: 'myserver',
    database: 'myDataBase',
    user: 'myuser',
    password: 'mypassword',
    options: {
        trustedConnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    },
    port: 1433
};

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(PORT, () => console.log(`Port is listening on: ${PORT}/`));
 
app.use(bodyParser.urlencoded({extended: true}));

app.get('/users', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = pool.request().query('SELECT * FROM users');
        result.then(response => {
            return res.json(response.recordsets);
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log(err);
    }
});

app.get('/users/:id', async (req, res) => {
    try {

        const pool = await sql.connect(config);
        const result = pool.request()
            .input("user_id", sql.Int, req.params.id)
            .query('SELECT * FROM users WHERE user_id = @user_id');
        result.then(response => {
            return res.json(response.recordsets);
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
        //console.log(err);
    }
});

app.post('/users', async (req, res) => {
   try {
        const { first_name, last_name, email } = req.body;
        console.log("HIiii",req.body);

            const pool = await sql.connect(config);
            const result = await pool.request()
               // .input('user_id', sql.Int, user_id)
                .input('first_name', sql.NVarChar, first_name)
                .input('last_name', sql.NVarChar, last_name)
                .input('email', sql.NVarChar, email)
                .query('INSERT INTO users (first_name,last_name,email) VALUES (@first_name,@last_name,@email)')
                return res.status(200).json(result.recordsets[0]);
            
    } catch (err) {
        res.status(500).json({ message: 'Failed to insert data', error: err});
    } 
});
 
app.put('/users/:id', async (req, res) => {
    try {
         const {user_id, first_name, last_name, email } = req.body;
         console.log("HIiii",req.body);
 
             const pool = await sql.connect(config);
             const result = await pool.request()
                 .input('user_id', sql.Int, req.params.id)
                 .input('first_name', sql.NVarChar, first_name)
                 .input('last_name', sql.NVarChar, last_name)
                 .input('email', sql.NVarChar, email)
                 .query('UPDATE users SET first_name= @first_name,last_name= @last_name,email=@email WHERE user_id = @user_id')
                 return res.status(200).json(result.recordsets[0]);
             
     } catch (err) {
         res.status(500).json({ message: 'Failed to insert data', error: err});
     } 
 });

 app.delete('/users/:id', async (req, res) => {
    try {
        const pool = await sql.connect(config);
        const result = pool.request()
            .input("user_id", sql.Int, req.params.id)
            .query('DELETE FROM users WHERE user_id = @user_id');
        result.then(response => {
            return res.json(response.recordsets);
        });
    } catch (err) {
        res.status(500).json({ message: err.message })
        //console.log(err);
    }
});




