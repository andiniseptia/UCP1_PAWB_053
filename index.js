import express from "express";
import bodyParser from 'body-parser';
import bibitRoute from "./routes/bibit.js";
import pupukRoute from "./routes/pupuk.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.json());

app.use("/bibit", bibitRoute);
app.use("/pupuk", pupukRoute);

app.get("/", (req, res) => {
    res.send("Selamat Pagi");
});


app.listen(PORT, () => {
    console.log(`Server berjalan di port : http://localhost:${PORT}`)
});
