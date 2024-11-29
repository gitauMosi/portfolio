const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const path = require("path");

const app = express();

const PORT = 4000;
//middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//routes
app.get('/', (req, res) => {
    res.render('index');
});

//handle errors
app.use((err, req, res, next) => {

    res.status(500).send('Something went wrong!');
}); 


//run server
app.listen(PORT, (err, req, res, next) => {
    if (err) {
        //console.error(err);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }

});