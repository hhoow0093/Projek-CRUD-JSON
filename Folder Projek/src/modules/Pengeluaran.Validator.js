const validator = require("validator");

function validateid(id){
    if(!id){
        return false;
    }
    else{
        return validator.isNumeric(id);
    }
}
function validateJenisPengeluaran(JenisPengeluaran){
    if(!JenisPengeluaran){
        return false;
    }
    else{
        return validator.isAlpha(JenisPengeluaran, 'en-US', {ignore: " "});
    }


}
function validateNominalPengeluaran(Nominal){
    if(!Nominal){
        return false
    }
    else{
        const NominalOption = {
            symbol: 'Rp',
            require_symbol: true,
            allow_negatives: true,
            thousands_separator: '.',
            decimal_separator: ',',
            allow_decimal: false,
            require_decimal: false,
            digits_after_decimal: [],
        };
        return validator.isCurrency(Nominal, NominalOption);

    }
}
function validateTujuanPengeluaran(Tujuan){
    if(!Tujuan){
        return false;
    }
    else{
        return validator.isAlpha(Tujuan, 'en-US', {ignore: " "});
    }

}
function validateBulan(Bulan){
    if(!Bulan){
        return false;
    }
    else if(Bulan > 12 || Bulan < 1){
        return false;
    }
    else{
        return validator.isNumeric(Bulan);
    }

}
function validateHari(Hari){
    if(!Hari){
        return false;
    }
    else{
        return validator.isAlpha(Hari, 'en-US', {ignore: " "});
    }

}
function validateHariNomor(nomorHari){
    if(!nomorHari){
        return false;
    }
    else if(nomorHari > 31 || nomorHari < 1){
        return false;
    }
    else{
        return validator.isNumeric(nomorHari);
    }
}

function validateTahun(Tahun){
    if(!Tahun){
        return false;
    }
    else if(Tahun.length !== 4){
        return false;
    }
    else{
        return validator.isNumeric(Tahun);
    }

}
function validateTanggal(Tanggal){
    if(!Tanggal){
        return false;
    }
    else{
        return validator.isDate(Tanggal, {format: "DD/MM/YYYY", strictMode: true});
    }

}

function validateNambahPengeluaran(JenisPengeluaran, Nominal, Tujuan, Bulan, Hari, Tahun, Tanggal){
    let errObj = {};
    if(validateJenisPengeluaran(JenisPengeluaran) === false){
        errObj["errorJenisPengeluaran"] = "salah input format jenis pengeluaran";
    }
    if(validateNominalPengeluaran(Nominal) === false){
        errObj["errorNominal"] = "salah input format nominal";
    }
    if(validateTujuanPengeluaran(Tujuan) === false){
        errObj["errorPengeluaran"] = "salah input format tujuan pengeluaran";
    }
    if(validateBulan(Bulan) === false){
        errObj["errorBulanPengeluaran"] = "salah input format Bulan pengeluaran";
    }
    if(validateHari(Hari) === false){
        errObj["Hari"] = "salah input format Hari";
    }
    if(validateTahun(Tahun) === false){
        errObj["Tahun"] = "salah input format Tahun";
    }
    if(validateTanggal(Tanggal) === false){
        errObj["Tanggal"] = "salah input format Tanggal";
    }
    return errObj;

}

function validateNambahPengeluaranEdit(JenisPengeluaran, Nominal, Tujuan, Bulan, Hari, Tahun, Tanggal, id){
    let errObj = {};
    if(validateJenisPengeluaran(JenisPengeluaran) === false){
        errObj["errorJenisPengeluaran"] = "salah input format jenis pengeluaran";
    }
    if(validateNominalPengeluaran(Nominal) === false){
        errObj["errorNominal"] = "salah input format nominal";
    }
    if(validateTujuanPengeluaran(Tujuan) === false){
        errObj["errorPengeluaran"] = "salah input format tujuan pengeluaran";
    }
    if(validateBulan(Bulan) === false){
        errObj["errorBulanPengeluaran"] = "salah input format Bulan pengeluaran";
    }
    if(validateHari(Hari) === false){
        errObj["Hari"] = "salah input format Hari";
    }
    if(validateTahun(Tahun) === false){
        errObj["Tahun"] = "salah input format Tahun";
    }
    if(validateTanggal(Tanggal) === false){
        errObj["Tanggal"] = "salah input format Tanggal";
    }
    if(validateid(id) === false){
        errObj["id"] = "masukkan id berupa nomor";
    }
    return errObj;

}

module.exports = {
    validateJenisPengeluaran,
    validateNominalPengeluaran,
    validateTujuanPengeluaran,
    validateBulan,
    validateHari,
    validateTahun,
    validateTanggal,
    validateHariNomor,
    validateNambahPengeluaran,
    validateNambahPengeluaranEdit,
    validateid,
}