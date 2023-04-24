const db = require("../models");
const Order = db.order;

exports.create = (req, res) => {
    const order = new Order({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        paid: req.body.paid,
        booking_type: req.body.booking_type,
        variant: req.body.variant,
        paid_amount: req.body.amount,
    });

    order
        .save(order)
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
    const first_name = req.query.first_name;
    var condition = first_name ? { first_name: { $regex: new RegExp(first_name), $options: "i" } } : {};

    Order.find(condition)
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

exports.delete = (req, res) => {
    const id = req.params.id;

    Order.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
                });
            } else {
                res.send({
                    message: "Order was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Order with id=" + id
            });
        });
};

exports.update = (req, res) => {
    console.log(req.body);
    // if (!req.body) {
    //     return res.status(400).send({
    //         message: "Data to update can not be empty!"
    //     });
    // }

    const id = req.params.id;

    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Order with id=${id}. Maybe Order was not found!`
                });
            } else res.send({ message: "Order was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Order with id=" + id
            });
        });
};
