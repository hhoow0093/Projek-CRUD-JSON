const fs = require("fs");

function PengeluaranTahunData(tahun) {
  const strData = fs.readFileSync(
    `${process.cwd()}/src/data/Pengeluaran.json`,
    "utf-8"
  );
  const { data, total } = JSON.parse(strData);
  // cara kudet

  // let DataBenar = []
  // for(var i = 0; i < total; i++){
  //     if(data[i].Tahun === tahun){
  //         DataBenar.push(data[i]);
  //     }
  // }

  const DataBenar = data.filter((item) => item.Tahun === tahun);
  console.log(DataBenar);
  return DataBenar;
}

function PengeluaranTahunBulanData(tahun, bulan) {
  const strData = fs.readFileSync(
    `${process.cwd()}/src/data/Pengeluaran.json`,
    "utf-8"
  );
  const { data, total } = JSON.parse(strData);

  const DataBenar = data.filter(
    (item) => item.Tahun === tahun && item.Bulan === bulan
  );
  console.log(DataBenar);
  return DataBenar;
}

function PengeluaranTanggalData(HariYangDicari) {
  const strData = fs.readFileSync(
    `${process.cwd()}/src/data/Pengeluaran.json`,
    "utf-8"
  );
  const { data, total } = JSON.parse(strData);
  const DataBenar = data.filter((item) => item.Tanggal === HariYangDicari);
  console.log(DataBenar);
  return DataBenar;
}

function pengeluaranNambahData(input) {
  const strData = fs.readFileSync(
    `${process.cwd()}/src/data/Pengeluaran.json`,
    "utf-8"
  );
  let { data, total } = JSON.parse(strData);

  const isExist = data.some(
    (item) =>
      item.JenisPengeluaran === input.JenisPengeluaran &&
      item.NominalPengeluaran === input.NominalPengeluaran &&
      item.Tujuanpengeluaran === input.Tujuanpengeluaran &&
      item.Bulan === input.Bulan &&
      item.Hari === input.Hari &&
      item.Tahun === input.Tahun &&
      item.Tanggal === input.Tanggal
  );

  //  cara kudet
  //   for (var i = 0; i < total; i++) {
  //     if (
  //       data[i].JenisPengeluaran === input.JenisPengeluaran &&
  //       data[i].NominalPengeluaran === input.NominalPengeluaran &&
  //       data[i].Tujuanpengeluaran === input.Tujuanpengeluaran &&
  //       data[i].Bulan === input.Bulan &&
  //       data[i].Hari === input.Hari &&
  //       data[i].Tahun === input.Tahun &&
  //       data[i].Tanggal === input.Tanggal
  //     ) {
  //       return false;
  //     }
  //   }

  if (isExist) {
    return false;
  } else {
    total++;
    data.push({
      id: String(total),
      JenisPengeluaran: input.JenisPengeluaran,
      NominalPengeluaran: input.NominalPengeluaran,
      Tujuanpengeluaran: input.Tujuanpengeluaran,
      Bulan: input.Bulan,
      Hari: input.Hari,
      Tahun: input.Tahun,
      Tanggal: input.Tanggal,
    });

    fs.writeFileSync(
      `${process.cwd()}/src/data/Pengeluaran.json`,
      JSON.stringify({
        total: total,
        data: data,
      })
    );
    return true;
  }
}

function PengeluaranEditData(input) {
  const strData = fs.readFileSync(`${process.cwd()}/src/data/Pengeluaran.json`);
  let { data, total } = JSON.parse(strData);
  if (!input.id) {
    return false;
  }
  const foundID = data.some((item) => input.id === item.id);
  if (foundID) {
    const newArray = data.map((item) => {
      if (item.id === input.id) {
        return {
          id: item.id,
          JenisPengeluaran: input.JenisPengeluaran,
          NominalPengeluaran: input.NominalPengeluaran,
          Tujuanpengeluaran: input.Tujuanpengeluaran,
          Bulan: input.Bulan,
          Hari: input.Hari,
          Tahun: input.Tahun,
          Tanggal: input.Tanggal,
        };
      } else {
        return item;
      }
    });
    fs.writeFileSync(
      `${process.cwd()}/src/data/Pengeluaran.json`,
      JSON.stringify({
        total: total,
        data: newArray,
      })
    );

    return true;
  }else{
    return false;
  }
}

function pengeluaranDeleteData(id) {
  const strData = fs.readFileSync(
    `${process.cwd()}/src/data/Pengeluaran.json`,
    "utf-8"
  );
  const { data, total } = JSON.parse(strData);
  const foundID = data.some((item) => item.id === id);
  //console.log(foundID);
  if (foundID) {
    const newArray = data.filter((item) => {
      if (item.id === id) {
        return false;
      } else {
        return true;
      }
    });
    fs.writeFileSync(
      `${process.cwd()}/src/data/Pengeluaran.json`,
      JSON.stringify({
        total: total,
        data: newArray,
      })
    );

    return true;
  } else {
    return false;
  }
}

module.exports = {
  PengeluaranTahunData,
  PengeluaranTahunBulanData,
  PengeluaranTanggalData,
  pengeluaranNambahData,
  PengeluaranEditData,
  pengeluaranDeleteData,
};
