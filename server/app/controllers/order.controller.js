const db = require("../models");
const Order = db.order;
var nodemailer = require('nodemailer');

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
            var transport = nodemailer.createTransport({
                host: "regle.home.pl",
                port: 25,
                auth: {
                    user: "letniakolonia+regle_com_pl.regle",
                    pass: process.env.MAIL_PASS
                }
            });
            var mailOptions = {
                from: "letniakolonia@regle.com.pl",
                to: data.email,
                subject: "Hello World",
                text: "Hello world?",
                html: "<b>Hello world?</b>",
            };
            transport.sendMail(mailOptions);
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
    const id = req.params.id;

    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Order with id=${id}. Maybe Order was not found!`
                });
            } else res.send({ message: "Order was updated successfully." });
            var transport = nodemailer.createTransport({
                host: "regle.home.pl",
                port: 25,
                auth: {
                    user: "letniakolonia+regle_com_pl.regle",
                    pass: process.env.MAIL_PASS
                }
            });
            var mailOptions = {
                from: "letniakolonia@regle.com.pl",
                to: data.email,
                subject: "Zamówienie potwierdzone",
                html: "<b>Potwierdzemy Twoje zamówienie</b><br><p>Panie Paszczak weź Pan coś napisz tu mądrego</p>",
            };
            transport.sendMail(mailOptions);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Order with id=" + id
            });
        });
};
