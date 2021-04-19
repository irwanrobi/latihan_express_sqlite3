const { createUser, readUser, deleteUser, editUser } = require("../Models/UserModel")
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
});

user.delete("/", (req, res) => {
    let data = req.body;

    deleteUser(data)
    .then((result) => {
        if (result > 0) {
            // jika hasil lebih dari 0 berarti sukses
            res.status(200).json({
                msg: "Berhasil menghapus data"
            });
        } else {
            // jika hasil 0 berarti data tidak ditemukan
            res.status(404).json({
                meg : "Data yang akan dihapus tidak ditemukan"
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            msg : "Gagal menghapus data",
            error : err
        })
    })
})

user.patch("/edit/:id", (req, res) => {

    let id = req.params.id;
    let data = req.body;

    editUser(id, data)
    .then((result) => {
        if (result > 0) {
            res.status(200).json({
                msg : "Data berhasil diubah",
                result: result
            })
        } else {
            res.status(404).json({
                msg : "Data yang ingin diubah tidak ditemukan",
                result : result
            })
        }
    })
    .catch((err) => {
        res.status(500).json({
            msg : "Gagal mengubah data",
            error : err
        })
    })
})

module.exports = user;