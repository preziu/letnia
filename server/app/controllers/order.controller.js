const db = require("../models");
const Order = db.order;

exports.create = (req, res) => {
    const booking = new Booking({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        paid: req.body.paid,
        booking_type: req.body.booking_type,
        variant: req.body.variant,
        paid_amount: req.body.amount,
    });

    booking
        .save(booking)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Order."
            });
        });
};

exports.findAll = (req, res) => {
    Booking.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving orders."
            });
        });
};
