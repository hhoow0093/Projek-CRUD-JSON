const {
  PengeluaranTahunServis,
  PengeluaranTahunBulanServis,
  PengeluaranTanggalServis,
  PengeluaranNambahServis,
  PengeluaranEditServis,
  pengeluaranDeleteServis,
} = require("./Pengeluaran.Servis");

const {
  validateBulan,
  validateTahun,
  validateHariNomor,
  validateNambahPengeluaran,
  validateNambahPengeluaranEdit,
  validateid,
} = require("./Pengeluaran.Validator");

function PengeluaranTahunControl(req, res) {
  // ini cuman menunjukkan bahwa kita bisa akses parameter yang di ketik lewat link
  //contoh    /:Tahun     /:Bulan     dll.
  console.log(req.params);
  const tahun = req.params.Tahun;
  const check = validateTahun(tahun);
  if (check === false) {
    res.status(400).json({
      error: "salah memasukkan format tahun",
    });
    return;
  }

  const [result, errorCode] = PengeluaranTahunServis(tahun);
  if (errorCode) {
    res.status(errorCode).json({
      error: result,
    });
    return;
  } else {
    res.json({
      data: result,
    });
    return;
  }
}

function PengeluaranTahunBulanControl(req, res) {
  console.log(req.params);
  const tahun = req.params.Tahun;
  const bulan = req.params.Bulan;
  const checkTahun = validateTahun(tahun);
  const checkBulan = validateBulan(bulan);
  if (checkBulan === false || checkTahun === false) {
    res.status(400).json({
      error: "salah memsukkan format tahun dan bulan",
    });
    return;
  }

  const [result, errorCode] = PengeluaranTahunBulanServis(tahun, bulan);
  if (errorCode) {
    res.status(errorCode).json({
      error: result,
    });
    return;
  } else {
    res.json({
      data: result,
    });
    return;
  }
}

function PengeluaranTanggalControl(req, res) {
  console.log(req.params);
  const Tahun = req.params.Tahun;
  const Bulan = req.params.Bulan;
  const Tanggal = req.params.HariNomor;
  const checkTahun = validateTahun(Tahun);
  const checkBulan = validateBulan(Bulan);
  const checkNomorHari = validateHariNomor(Tanggal);

  if (
    checkTahun === false ||
    checkBulan === false ||
    checkNomorHari === false
  ) {
    res.status(400).json({
      error: "salah memasukkan format tanggal",
    });
  }

  const HariYangDicari = `${Tanggal}/${Bulan}/${Tahun}`;
  console.log(HariYangDicari);

  const [result, errorCode] = PengeluaranTanggalServis(HariYangDicari);
  if (errorCode) {
    res.status(errorCode).json({
      error: result,
    });
    return;
  } else {
    res.json({
      data: result,
    });
    return;
  }
}

function PengeluaranNambahControl(req, res) {
  const input = req.body;
  //console.log(input.Tanggal);
  const checkInput = validateNambahPengeluaran(
    input.JenisPengeluaran,
    input.NominalPengeluaran,
    input.Tujuanpengeluaran,
    input.Bulan,
    input.Hari,
    input.Tahun,
    input.Tanggal
  );
  if (Object.keys(checkInput).length !== 0) {
    res.status(400).json({
      error: checkInput,
    });
    return;
  }

  const [result, Code] = PengeluaranNambahServis(input);
  res.status(Code).json({
    status: result,
  });
}

function PengeluaranEditControl(req, res) {
  const input = req.body;
  const checkInput = validateNambahPengeluaranEdit(
    input.JenisPengeluaran,
    input.NominalPengeluaran,
    input.Tujuanpengeluaran,
    input.Bulan,
    input.Hari,
    input.Tahun,
    input.Tanggal,
    input.id
  );
  if (Object.keys(checkInput).length !== 0) {
    res.status(400).json({
      error: checkInput,
    });
    return;
  }

  const [result, code] = PengeluaranEditServis(input);
  res.status(code).json({
    status: result,
  });
}

function PengeluaranDeleteControl(req, res) {
  const id = req.params.id;
  const checkID = validateid(id);
  if (checkID === false) {
    res.status(400).json({
      error: "format yang harus dimasukkan adalah id",
    });
    return;
  }
  const [result, Code] = pengeluaranDeleteServis(id);
  res.status(Code).json({
    status: result,
  });
}

module.exports = {
  PengeluaranTahunControl,
  PengeluaranTahunBulanControl,
  PengeluaranTanggalControl,
  PengeluaranNambahControl,
  PengeluaranEditControl,
  PengeluaranDeleteControl,
};
