const {
  PengeluaranTahunData,
  PengeluaranTahunBulanData,
  PengeluaranTanggalData,
  pengeluaranNambahData,
  PengeluaranEditData,
  pengeluaranDeleteData,
} = require("./Pengeluaran.Data");
function PengeluaranTahunServis(tahun) {
  const isExist = PengeluaranTahunData(tahun);
  if (isExist.length !== 0) {
    return [isExist, false];
  } else {
    return [
      {
        message: "Tidak dapat menemukan tahun",
      },
      404,
    ];
  }
}

function PengeluaranTahunBulanServis(tahun, bulan) {
  const isExist = PengeluaranTahunBulanData(tahun, bulan);
  if (isExist.length !== 0) {
    return [isExist, false];
  } else {
    return [
      {
        message: "Tidak dapat menemukan data dan bulan",
      },
      404,
    ];
  }
}

function PengeluaranTanggalServis(TanggalYangDicari) {
  const isExist = PengeluaranTanggalData(TanggalYangDicari);
  if (isExist.length !== 0) {
    return [isExist, false];
  } else {
    return [
      {
        message: "Tidak dapat menemukan data pada tanggal tersebut",
      },
      404,
    ];
  }
}

function PengeluaranNambahServis(input) {
  const isExist = pengeluaranNambahData(input);
  if (isExist === false) {
    return [
      {
        message: "Tidak bisa menambahkan data yang sama",
      },
      400,
    ];
  } else {
    return [
      {
        message: "Data Berhasil ditambahkan!",
      },
      200,
    ];
  }
}

function PengeluaranEditServis(input) {
  const isExist = PengeluaranEditData(input);
  if (isExist) {
    return [
      {
        message: "data berhasil di edit",
      },
      200,
    ];
  } else {
    return [
      {
        message: "masukkan id data YANG VALID, data tidak dapat di edit",
      },
      400,
    ];
  }
}

function pengeluaranDeleteServis(id){
    const isExist = pengeluaranDeleteData(id);
    if(isExist){
        return[
            {
                message: "data berhasil delete",
            }, 200
        ]
    }
    else{
        return[
            {
                message: "data tidak dapat di delete",
            }, 400
        ]
    }

}

module.exports = {
  PengeluaranTahunServis,
  PengeluaranTahunBulanServis,
  PengeluaranTanggalServis,
  PengeluaranNambahServis,
  PengeluaranEditServis,
  pengeluaranDeleteServis,
};
