const router = require("express").Router();
const{
    PengeluaranTahunControl,
    PengeluaranTahunBulanControl,
    PengeluaranTanggalControl,
    PengeluaranNambahControl,
    PengeluaranEditControl,
    PengeluaranDeleteControl,

} = require('./Pengeluaran.Control');

//fitur metode get
router.get("/get-Pengeluaran/:Tahun", PengeluaranTahunControl);
router.get("/get-Pengeluaran/:Tahun/:Bulan",PengeluaranTahunBulanControl);
router.get("/get-Pengeluaran/:Tahun/:Bulan/:HariNomor", PengeluaranTanggalControl);


//fitur metode post
router.post("/add-Pengeluaran", PengeluaranNambahControl);

//fitur metode put
router.put("/edit-Pengeluaran", PengeluaranEditControl);

//fitur metode  delete
router.delete("/delete-Pengeluaran/:id", PengeluaranDeleteControl);

module.exports = router;