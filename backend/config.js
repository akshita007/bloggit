const dotenv = require("dotenv");
dotenv.config();
let config={
    uri :`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@myblog.iqbwp.mongodb.net/Post?retryWrites=true&w=majority`,
    secretKey :"1234-567-8901-2345-6789"
};

module.exports = config;
