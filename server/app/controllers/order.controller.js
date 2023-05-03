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
        phone: req.body.phone,
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
                html: `<p>🌼 No i super no i cześć! 🌼</p><p>Przyjęliśmy Twoją rezerwację.</p><p>Teraz, <b>w ciągu 24 godzin</b>, musisz zrobić przelew wg. poniższych danych. Koniecznie zwróć uwagę na <b>tytuł przelewu</b>! Po 48 godzinach od złożenia rezerwacji sprawdzamy czy rezerwacja została opłacona. Jeśli nie będzie płatności odblokowujemy pokój do ponownej rezerwacji, ale napiszemy Ci też w tej sprawie maila.</p><p>Po potwierdzeniu płatności <b>otrzymasz od nas maila</b> z informacją i szczegółami dotyczącymi naszego festiwaliku.</p><p>DANE DO PRZELEWU:</p><ul><li>Odbiorca: Różana sp. z o.o.</li><li>Nr konta: 59109022970000000588009082</li><li>Kwota: ${data.price} zł</li><li>Tytuł przelewu: ${data.email}</li></ul><br><small>Dokonując przelewu opłacasz wczasy w Ośrodku REGLE w wybranym przez siebie terminie, dla wybranej liczby osób. Opłata za każdą osobę zawiera: nocleg w pokoju z łazienką oraz ręcznik, codzienne śniadanie oraz zupę i pajdę chleba, wstęp na wszystkie wydarzenia muzyczne i spotkania warsztatowe. Opłata upoważnia również do korzystania z wszelkiej infrastruktury rekreacyjnej na terenie Ośrodka REGLE. Opłata za wczasy nie podlega zwrotowi ani częściowemu zwrotowi. Więcej znajdziesz w <a href="https://docs.google.com/document/d/14vUwmPcdOLzDzHVX4MlkmN-jFXZ5d5ec/edit?usp=sharing&ouid=113619134353219842484&rtpof=true&sd=true">regulaminie Ośrodka</a>.</small>`
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
                html: `<p>🌼 No i bajlando i witamy na pokładzie! 🌼</p><p>Potwierdzamy Twoją rezerwację ❤️</p><br><u>Gdzie więcej informacji?</u><p>Bieżące informacje pojawiają się na naszych profilach <a href="https://www.facebook.com/letniakolonia">FB</a> i <a href="https://www.instagram.com/letniakolonia/">IG</a> oraz na <a href="https://www.letniakolonia.pl/">stronie wydarzenia</a></p><p>Najważniejsze aktualności wysyłali będziemy też mailem.</p><br><u>Jak dojechać?</u><p>Na miejscu mamy parking, możesz dojechać samochodem, ale organizujemy również odbiory ze stacji PKP w Domaszkowie.</p><p>Festiwal odbywa się tutaj: <a href="https://goo.gl/maps/Drs7gP8uU9u2duyz7">PINEZZZZKA</a></p><br><u>Co musisz wziąć?</u><p>Akcesoria wypoczynkowo-basenowe, gry i zabawy plenerowe, urlop i uśmiech na twarzy.</p><br><p>Jeśli masz pytania pisz do nas na letniakolonia@regle.com.pl</p><p>DO ZOBACZENIA! ❤️</p>`,
            };
            transport.sendMail(mailOptions);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Order with id=" + id
            });
        });
};
