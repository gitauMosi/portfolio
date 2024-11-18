const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();

const PORT = 3000;
//middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//routes
app.get('/', (req, res) => {
    res.render('index');
});



//handle errors
app.use((err, req, res, next) => {
   
    res.status(500).json({ error: err.message });
});


//run server
app.listen(PORT, (err, req, res, next) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }

});