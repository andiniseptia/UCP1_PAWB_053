const express = require('express');
const app = express();
const todoRoutes = require('./routes/todo.js');
const bibitRoute = require("./routes/bibit.js"); // Menggunakan require
const pupukRoute = require("./routes/pupuk.js"); // Menggunakan require

const port = 5000;


