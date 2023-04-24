module.exports = app => {
    const orders = require("../controllers/order.controller.js");

    var router = require("express").Router();

    router.post("/", orders.create);

    router.get("/", orders.findAll);
    
    router.delete("/:id", orders.delete);

    router.put("/:id", orders.update);

    app.use('/api/orders', router);
};
