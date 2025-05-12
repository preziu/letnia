const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();

const corsOptions = {
    origin:
        process.env.NODE_ENV === 'production'
            ? process.env.CLIENT_URL
            : 'http://localhost:8080'
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/booking.routes')(app);
require('./app/routes/order.routes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'public')));
    app.get('/*', (req, res) =>
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    );
}

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

const db = require('./app/models');
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connected to the database!'))
    .catch(err => {
        console.error('Cannot connect to the database!', err);
        process.exit();
    });
