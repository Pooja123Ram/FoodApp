const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose(); // Import SQLite3
const app = express();
const port = 3800;

// Connect to SQLite database
const db = new sqlite3.Database('./Foodrecipe.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the database.');
        // Create the table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS Food (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            profile TEXT,
            profileName TEXT,
            recepe TEXT,
            following TEXT,
            followers TEXT,
            image TEXT,
            dishname TEXT,
            dishtype TEXT,
            time TEXT,
            description TEXT,
            step1 TEXT,
            step2 TEXT,
            step3 TEXT,
            comments TEXT,
            ingredients TEXT
        )`);
    }
});

app.use(bodyParser.json());

// GET method to fetch data from the database
app.get('/api/getData', (req, res) => {
    // Example query to fetch data from the table
    db.all('SELECT * FROM Food', (err, rows) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(rows); // Send the fetched data as JSON response
        }
    });
});

// GET method to fetch data by profileName from the database
app.get('/api/getDataByProfileName', (req, res) => {
    const profileName = req.query.profileName;

    // Query the database to fetch data based on the profileName
    db.get('SELECT profileName FROM Food WHERE profileName = ?', [profileName], (err, row) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
                // If a row with the profileName is found, send it as JSON response
                res.json({ profileName: row.profileName });
            } else {
                // If no data is found for the given profileName, send a 404 response
                res.status(404).json({ error: 'Profile name not found' });
            }
        }
    });
});

// GET method to fetch full data by ID from the database
app.get('/api/getDataById/:id', (req, res) => {
    const id = req.params.id;

    // Query the database to fetch all data based on the ID
    db.get('SELECT * FROM Food WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
                // If a row with the given ID is found, send it as JSON response
                res.json(row);
            } else {
                // If no data is found for the given ID, send a 404 response
                res.status(404).json({ error: 'Data not found' });
            }
        }
    });
});



// POST method to insert data into the database
app.post('/api/postData', (req, res) => {
    const postData = req.body;

    // Example insert query
    db.run('INSERT INTO Food (profile, profileName, recepe, following, followers, image, dishname, dishtype, time, description, step1, step2, step3, comments, ingredients) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [postData.profile, postData.profileName, postData.recepe, postData.following, postData.followers, postData.image, postData.dishname, postData.dishtype, postData.time, postData.description, postData.step1, postData.step2, postData.step3, postData.comments, postData.ingredients],
        function(err) {
            if (err) {
                console.error('Error inserting data into the database:', err.message);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                // Respond with the ID of the inserted row
                res.json({ id: this.lastID, message: 'Data inserted successfully' });
            }
        });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
