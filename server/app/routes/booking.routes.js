module.exports = app => {
    const bookings = require("../controllers/booking.controller.js");

    var router = require("express").Router();

    router.post("/", bookings.create);

    router.get("/", bookings.findAll);
};
