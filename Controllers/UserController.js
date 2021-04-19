const { createUser, readUser } = require("../Models/UserModel")
const express = require("express");
const user = express.Router();

user.post("/", (req, res) => {
    createUser(req.body)
        .then((result) => {
            if (result.length > 0) {
                res.status(201).json({
                    msg : "Register success",
                    result : result
                });
            } else {
                res.status(401).json({
                    msg : "Email sudah terpakai..",
                    result : result
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
});

user.get("/", (req, res) => {
    readUser()
    .then((result) => {
        res.status(200).json(result);
    })
    .catch((err) => {
        res.status(500).json({
            msg : "Error",
            error : err
        })
    })
})

module.exports = user;