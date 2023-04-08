const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

if (process.env.NODE_ENV === "production") {
    require('dotenv').config({ path: require('find-config')('.env') })
    console.log(process.env);
    console.log(process.env.MONGODB_URL);
}

const app = express();
app.use(express.json());

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Server is running" });
});

require("./app/routes/booking.routes")(app);
require("./app/routes/order.routes")(app);

// handle production

if (process.env.NODE_ENV === 'production') {
    //static folder
    app.use(express.static(__dirname + '/public/'));

    //handle spa
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
    console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });
