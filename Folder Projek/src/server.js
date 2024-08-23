const express = require("express");
const port = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PengeluaranRouter = require("./modules/Pengeluaran.Router");


app.get("/", (req, res) => {
  res.json({
    message: "API Howard untuk menyimpan pengeluaran duit pada mahasiswa",
  });
});

app.use("/data/pengeluaran/", PengeluaranRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
