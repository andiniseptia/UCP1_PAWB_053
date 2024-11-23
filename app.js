const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.js');
const bibitRoute = require("./routes/bibit.js"); // Menggunakan require
const pupukRoute = require("./routes/pupuk.js"); // Menggunakan require

const port = 5000;

app.use(express.json());
app.use("/bibit", bibitRoute);
app.use("/pupuk", pupukRoute);
app.use('/todos', todoRoutes);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () =>
    console.log(`Server berjalan di port : http://localhost:${port}`)
);
