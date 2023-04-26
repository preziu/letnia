const db = require("../models");
const Booking = db.booking;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    const booking = new Booking({
        tent: req.body.tent,
        twoBed: req.body.twoBed,
        threeBed: req.body.threeBed,
        fourBed: req.body.fourBed,
        fiveBed: req.body.fiveBed
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

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }

    const id = req.params.id;

    Booking.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Booking with id=${id}. Maybe Booking was not found!`
                });
            } else res.send({ message: "Booking was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Booking with id=" + id
            });
        });
};
