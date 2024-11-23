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

router.get("/", (req, res) => {
    res.send(bibit);
});

router.post('/', (req, res) => {
    const newBibit = {
        id: (bibit.length + 1).toString(),  // ID baru berdasarkan panjang array bibit
        nama: req.body.nama,
        stok: req.body.stok,
        harga: req.body.harga
    };
    bibit.push(newBibit);
    res.status(201).json(newBibit);
});

router.delete('/:id', (req, res) => {
    // Menemukan index bibit berdasarkan ID
    const bibitIndex = bibit.findIndex(t => t.id === req.params.id);
    
    // Jika bibit tidak ditemukan
    if (bibitIndex === -1) {
        return res.status(404).json({ message: 'Bibit tidak ditemukan' });
    }

    // Menghapus bibit berdasarkan index
    const deletedBibit = bibit.splice(bibitIndex, 1)[0];  // pastikan ini menggunakan `deletedBibit` yang konsisten

    // Mengirimkan respons bahwa data telah dihapus
    res.status(200).json({ message: `Bibit dengan nama ${deletedBibit.nama} telah dihapus` });
});

router.put('/:id', (req, res) => {
    // Cari bibit berdasarkan ID
    const bibitToUpdate = bibit.find(t => t.id === req.params.id);

    // Jika bibit tidak ditemukan
    if (!bibitToUpdate) {
        return res.status(404).json({ message: 'Bibit tidak ditemukan' });
    }

    // Perbarui data bibit
    bibitToUpdate.nama = req.body.nama || bibitToUpdate.nama;
    bibitToUpdate.stok = req.body.stok || bibitToUpdate.stok;
    bibitToUpdate.harga = req.body.harga || bibitToUpdate.harga;

    // Mengirimkan respons dengan bibit yang sudah diperbarui
    res.status(200).json({
        message: `Bibit dengan ID ${bibitToUpdate.id} telah diperbarui`,
        updateBibit: bibitToUpdate
    });
});


module.exports = router;

