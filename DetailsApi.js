const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose(); // Import SQLite3
const app = express();
const port = 3200;

const db = new sqlite3.Database('./ApiData.db', (err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
    } else {
        console.log('Connected to the database.');
       
        db.run(`CREATE TABLE IF NOT EXISTS Food (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            profile BLOB,
            profileName TEXT,
            recepe TEXT,
            following TEXT,
            followers TEXT,
            image1 BLOB,
            dishname1 TEXT,
            dishtype1 TEXT,
            time1 TEXT,
            like1 TEXT,
            description1 TEXT,
            ingre1step1 TEXT,
            ingre1step2 TEXT,
            ingre1step3 TEXT,
            ingre1 BLOB,
            image2 BLOB,
            dishname2 TEXT,
            dishtype2 TEXT,
            time2 TEXT,
            like2 TEXT,
            description2 TEXT,
            ingre2step1 TEXT,
            ingre2step2 TEXT,
            ingre2step3 TEXT,
            ingre2 BLOB,
            image3 BLOB,
            dishname3 TEXT,
            dishtype3 TEXT,
            time3 TEXT,
            like3 TEXT,
            description3 TEXT,
            ingre3step1 TEXT,
            ingre3step2 TEXT,
            ingre3step3 TEXT,
            ingre3 BLOB,
            image4 BLOB,
            dishname4 TEXT,
            dishtype4 TEXT,
            time4 TEXT,
            like4 TEXT,
            description4 TEXT,
            ingre4step1 TEXT,
            ingre4step2 TEXT,
            ingre4step3 TEXT,
            ingre4 BLOB
        )`);
    }
});

app.use(bodyParser.json());


app.get('/api/getData', (req, res) => {
    db.all('SELECT * FROM Food', (err, rows) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});


app.get('/api/getImage1Data/:id', (req, res) => {
    const id = req.params.id;


    db.get('SELECT image1, dishname1, dishtype1, time1, like1, profile, profileName, recepe, following, followers, description1, ingre1step1, ingre1step2, ingre1step3, ingre1 FROM Food WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
                res.json(row); 
            } else {
                res.status(404).json({ error: 'Data not found for image1 with ID ' + id });
            }
        }
    });
});



app.get('/api/getImage2Data/:id', (req, res) => {

    db.get('SELECT image2, dishname2, dishtype2, time2, like2, profile, profileName, recepe, following, followers, description2, ingre2step1, ingre2step2, ingre2step3, ingre2  FROM Food', (err, row) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
                res.json(row); 
            } else {
                res.status(404).json({ error: 'Data not found for image2' });
            }
        }
    });
});


app.get('/api/getImage3Data/:id', (req, res) => {
    
    db.get('SELECT image3, dishname3, dishtype3, time3, like3, profile, profileName, recepe, following, followers, description3, ingre3step1, ingre3step2, ingre3step3, ingre3  FROM Food', (err, row) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
                res.json(row); 
            } else {
                res.status(404).json({ error: 'Data not found for image3' });
            }
        }
    });
});


app.get('/api/getImage4Data/:id', (req, res) => {
   
    db.get('SELECT image4, dishname4, dishtype4, time4, like4, profile, profileName, recepe, following, followers, description4, ingre4step1, ingre4step2, ingre4step3, ingre4  FROM Food', (err, row) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
                res.json(row); 
            } else {
                res.status(404).json({ error: 'Data not found for image4' });
            }
        }
    });
});



app.get('/api/getDataByProfileName', (req, res) => {
    const profileName = req.query.profileName;

    db.get('SELECT profileName FROM Food WHERE profileName = ?', [profileName], (err, row) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
                res.json({ profileName: row.profileName });
            } else {
                res.status(404).json({ error: 'Profile name not found' });
            }
        }
    });
});

app.get('/api/getDataById/:id', (req, res) => {
    const id = req.params.id;

    db.get('SELECT * FROM Food WHERE id = ?', [id], (err, row) => {
        if (err) {
            console.error('Error querying the database:', err.message);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (row) {
               
                res.json(row);
            } else {
               
                res.status(404).json({ error: 'Data not found' });
            }
        }
    });
});


app.post('/api/postData', (req, res) => {
    const postData = req.body;


    db.run('INSERT INTO Food (profile, profileName, recepe, following, followers, image1, dishname1, dishtype1, time1, like1, description1, ingre1step1, ingre1step2, ingre1step3, ingre1, image2, dishname2, dishtype2, time2, like2, description2, ingre2step1,ingre2step2, ingre2step3, ingre2, image3, dishname3, dishtype3, time3, like3, description3, ingre3step1, ingre3step2, ingre3step3, ingre3, image4, dishname4, dishtype4, time4, like4, description4, ingre4step1, ingre4step2, ingre4step3, ingre4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [postData.profile, postData.profileName, postData.recepe, postData.following, postData.followers, postData.image1, postData.dishname1, postData.dishtype1, postData.time1, postData.like1, postData.description1, postData.ingre1step1, postData.ingre1step2, postData.ingre1step3, postData.ingre1, postData.image2, postData.dishname2, postData.dishtype2, postData.time2, postData.like2, postData.description2, postData.ingre2step1, postData.ingre2step2, postData.ingre2step3, postData.ingre2, postData.image3, postData.dishname3, postData.dishtype3, postData.time3, postData.like3, postData.description3, postData.ingre3step1, postData.ingre3step2, postData.ingre3step3, postData.ingre3, postData.image4, postData.dishname4, postData.dishtype4, postData.time4, postData.like4, postData.description4, postData.ingre4step1, postData.ingre4step2, postData.ingre4step3, postData.ingre4],
        function(err) {
            if (err) {
                console.error('Error inserting data into the database:', err.message);
                res.status(500).json({ error: 'Internal server error' });
            } else {
                res.json({ id: this.lastID, message: 'Data inserted successfully' });
            }
        });
});


// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
