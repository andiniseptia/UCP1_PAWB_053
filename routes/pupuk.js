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

router.post('/', (req, res) => {
    const newPupuk = {
        id: (pupuk.length + 1).toString(),  // ID baru berdasarkan panjang array bibit
        nama: req.body.nama,
        jenis: req.body.jenis,
        stok: req.body.stok,
        harga: req.body.harga
    };
    pupuk.push(newPupuk);
    res.status(201).json(newPupuk);
});

router.delete('/:id', (req, res) => {
    // Menemukan index bibit berdasarkan ID
    const pupukIndex = pupuk.findIndex(t => t.id === req.params.id);
    
    // Jika bibit tidak ditemukan
    if (pupukIndex === -1) {
        return res.status(404).json({ message: 'Pupuk tidak ditemukan' });
    }

    // Menghapus bibit berdasarkan index
    const deletedPupuk = pupuk.splice(pupukIndex, 1)[0];  // pastikan ini menggunakan `deletedBibit` yang konsisten

    // Mengirimkan respons bahwa data telah dihapus
    res.status(200).json({ message: `Pupuk dengan nama ${deletedPupuk.nama} telah dihapus` });
});

router.put('/:id', (req, res) => {
    // Cari bibit berdasarkan ID
    const pupukToUpdate = pupuk.find(t => t.id === req.params.id);

    // Jika bibit tidak ditemukan
    if (!pupukToUpdate) {
        return res.status(404).json({ message: 'Pupuk tidak ditemukan' });
    }

    // Perbarui data bibit
    pupukToUpdate.nama = req.body.nama || pupukToUpdate.nama;
    pupukToUpdate.jenis = req.body.jenis || pupukToUpdate.jenis;
    pupukToUpdate.stok = req.body.stok || pupukToUpdate.stok;
    pupukToUpdate.harga = req.body.harga || pupukToUpdate.harga;

    // Mengirimkan respons dengan bibit yang sudah diperbarui
    res.status(200).json({
        message: `Pupuk dengan ID ${pupukToUpdate.id} telah diperbarui`,
        updatePupuk: pupukToUpdate
    });
});

module.exports = router;