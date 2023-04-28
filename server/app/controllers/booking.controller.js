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
            // var transport = nodemailer.createTransport({
            //     host: "regle.home.pl",
            //     port: 25,
            //     auth: {
            //         user: "letniakolonia+regle_com_pl.regle",
            //         pass: process.env.MAIL_PASS
            //     }
            // });
            // var mailOptions = {
            //     from: "letniakolonia@regle.com.pl",
            //     to: data.email,
            //     subject: "Letnia kolonia - potwierdzamy zamówienie",
            //     html: `<p>🌼 No i bajlando i witamy na pokładzie! 🌼</p><p>Potwierdzamy Twoją rezerwację ❤️</p><u>Gdzie więcej informacji?</u><p>Bieżące informacje pojawiają się na naszych profilach <a href="https://www.facebook.com/letniakolonia">FB</a> i <a href="https://www.instagram.com/letniakolonia/">IG</a> oraz na <a href="https://www.letniakolonia.pl/">stronie wydarzenia</a></p><p>Najważniejsze aktualności wysyłali będziemy też mailem.</p><u>Jak dojechać?</u><p>Na miejscu mamy parking, możesz dojechać samochodem, ale organizujemy również odbiory ze stacji PKP w Domaszkowie.</p><u>Co musisz wziąć?</u><p>Akcesoria wypoczynkowo-basenowe, gry i zabawy plenerowe, urlop i uśmiech na twarzy.</p><p>Jeśli masz pytania pisz do nas na letniakolonia@regle.com.pl</p><p>DO ZOBACZENIA! ❤️</p>`
            // };
            // transport.sendMail(mailOptions);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Booking with id=" + id
            });
        });
};
