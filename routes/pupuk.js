const express = require("express");

const router = express.Router();

const pupuk = [
    {
        id: "1",
        nama: "Pupuk Urea",
        jenis: "Anorganik",
        stok: "53",
        harga: "112.000",
    },
    {
        id: "2",
        nama: "Granul Organik",
        jenis: "Organik",
        stok: "69",
        harga: "32.000",
    },
    {
        id: "3",
        nama: "NPK",
        jenis: "Anorganik",
        stok: "23",
        harga: "115.000",
    },
    {
        id: "4",
        nama: "ZA",
        jenis: "Anorganik",
        stok: "47",
        harga: "85.000",
    },
];

router.get("/", (req, res) => {
    res.send(pupuk);
});



module.exports = router;