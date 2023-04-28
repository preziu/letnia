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
        price: req.body.price,
    });

    order
        .save(order)
        .then(data => {
            console.log(data);
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
                subject: "Letnia kolonia - potwierdzamy zamówienie",
                html: `<p>🌼 No i super no i cześć! 🌼</p><p>Przyjęliśmy Twoją rezerwację.</p><p>Teraz, w ciągu 24 godzin, musisz zrobić przelew wg. poniższych danych. Koniecznie zwróć uwagę na tytuł przelewu! Po 48 godzinach od złożenia rezerwacji sprawdzamy czy rezerwacja została opłacona. Jeśli nie będzie płatności odblokowujemy pokój do ponownej rezerwacji, ale napiszemy Ci też w tej sprawie maila.</p><p>Po potwierdzeniu płatności otrzymasz od nas maila z informacją i szczegółami dotyczącymi naszego festiwaliku.</p><p>DANE DO PRZELEWU:</p><ul><li>Odbiorca:</li><li>Nr konta:</li><li>Kwota: ${data.price}</li><li>Tytuł przelewu: ${data.email}</li></ul>`
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
                subject: "Letnia kolonia - potwierdzamy zamówienie",
                html: `<p>🌼 No i bajlando i witamy na pokładzie! 🌼</p><p>Potwierdzamy Twoją rezerwację ❤️</p><u>Gdzie więcej informacji?</u><p>Bieżące informacje pojawiają się na naszych profilach <a href="https://www.facebook.com/letniakolonia">FB</a> i <a href="https://www.instagram.com/letniakolonia/">IG</a> oraz na <a href="https://www.letniakolonia.pl/">stronie wydarzenia</a></p><p>Najważniejsze aktualności wysyłali będziemy też mailem.</p><u>Jak dojechać?</u><p>Na miejscu mamy parking, możesz dojechać samochodem, ale organizujemy również odbiory ze stacji PKP w Domaszkowie.</p><u>Co musisz wziąć?</u><p>Akcesoria wypoczynkowo-basenowe, gry i zabawy plenerowe, urlop i uśmiech na twarzy.</p><p>Jeśli masz pytania pisz do nas na letniakolonia@regle.com.pl</p><p>DO ZOBACZENIA! ❤️</p>`,
            };
            transport.sendMail(mailOptions);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Order with id=" + id
            });
        });
};
