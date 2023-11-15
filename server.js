const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'twitter_clone',
});

connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
    } else {
        console.log('Connected to MySQL database');
    }
});

// API endpoint to get all tweets
app.get('/tweets', (req, res) => {
    const query = 'SELECT * FROM tweets';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error fetching tweets:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Add more API endpoints for CRUD operations as needed

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
