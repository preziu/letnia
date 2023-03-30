const db = require("../models");
const Room = db.room;

exports.create = (req, res) => {
    // Validate request
    console.log(req.body);
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create
    const room = new Room({
        title: req.body.title,
        beds: req.body.beds,
        reserved: req.body.reserved ? req.body.reserved : false
    });

    // Save
    room
        .save(room)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Room."
            });
        });
};

// Retrieve all
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Room.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving rooms."
            });
        });
};

// Find single with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Room.findById(id)
    .then(data => {
        if (!data)
            res.status(404).send({ message: "Not found Room with id " + id });
        else res.send(data);
    })
    .catch(err => {
        res
            .status(500)
            .send({ message: "Error retrieving Room with id=" + id });
    });
};

// Update by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    Room.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Room with id=${id}. Maybe Room was not found!`
                });
            } else res.send({ message: "Room was updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Room with id=" + id
            });
        });
};

// Delete with the specified id in the request
exports.delete = (req, res) => {
    
};

// Delete all from the database
exports.deleteAll = (req, res) => {
    
};
