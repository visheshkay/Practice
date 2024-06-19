const exp = require('express');
const sellerApp = exp.Router();
const bcryptjs = require('bcryptjs');
const expressAsyncHandler = require("express-async-handler");
const jwt = require('jsonwebtoken');
require('dotenv').config();

let sellerscollection;
let buyerscollection;
let productscollection;

// Middleware to set collections
sellerApp.use((req, res, next) => {
    sellerscollection = req.app.get('sellerscollection');
    buyerscollection = req.app.get('buyerscollection');
    productscollection = req.app.get('productscollection');

    // Check if collections are set
    if (!sellerscollection || !buyerscollection || !productscollection) {
        return res.status(500).send({ message: "Database collections not initialized" });
    }
    next();
});

// Signup
sellerApp.post('/sellers', expressAsyncHandler(async (req, res) => {
    const newseller = req.body;
    // console.log(newseller);

    const dbseller = await sellerscollection.findOne({ username: newseller.username });

    if (dbseller != null) {
        res.send({ message: "Seller existed" });
    } else {
        const hashedPassword = await bcryptjs.hash(newseller.password, 6);
        newseller.password = hashedPassword;
        await sellerscollection.insertOne(newseller);
        res.send({ message: "Seller created" });
    }
}));

// Login
sellerApp.post('/login', expressAsyncHandler(async (req, res) => {
    const sellerCred = req.body;
    const dbseller = await sellerscollection.findOne({ username: sellerCred.username });

    if (dbseller === null) {
        res.send({ message: "Invalid username" });
    } else {
        const status = await bcryptjs.compare(sellerCred.password, dbseller.password);
        if (status === false) {
            res.send({ message: "Invalid password" });
        } else {
            const signedToken = jwt.sign({ username: dbseller.username }, process.env.SECRET_KEY, { expiresIn: '1d' });
            res.send({ message: "login success", token: signedToken, user: dbseller });
        }
    }
}));

module.exports = sellerApp;
