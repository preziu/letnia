const db = require("../models");
const Booking = db.booking;

exports.create = (req, res) => {
    if (!req.body.type) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const booking = new Booking({
        type: req.body.type,
        quantity: req.body.quantity,
    });

    booking
        .save(booking)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Booking."
            });
        });
};

exports.findAll = (req, res) => {
    const type = req.query.type;
    var condition = type ? { type: { $regex: new RegExp(type), $options: "i" } } : {};

    Booking.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving bookings."
            });
        });
};
