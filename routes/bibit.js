const express = require("express");
const router = express.Router();

router.use(express.json());

const bibit = [
    {
        id: "1",
        nama: "Jambu",
        stok: "76",
        harga: "15.000",
    },
    {
        id: "2",
        nama: "Jeruk",
        stok: "59",
        harga: "25.000",
    },
    {
        id: "3",
        nama: "Mangga",
        stok: "43",
        harga: "20.000",
    },
    {
        id: "4",
        nama: "Stoberi",
        stok: "2",
        harga: "55.000",
    },
];



module.exports = router;

