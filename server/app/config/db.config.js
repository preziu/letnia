if (process.env.NODE_ENV === "production") {
    require("dotenv").config();
    console.log(process.env + " db.config");
    console.log(process.env.MONGODB_URL + " db.config");
}

module.exports = {
    url: process.env.MONGODB_URL
    };
