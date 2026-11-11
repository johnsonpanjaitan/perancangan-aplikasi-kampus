const tambah = require("./app");

if (tambah(2, 3) === 5) {
    console.log("Test berhasil");
    process.exit(0);
} else {
    console.log("Test gagal");
    process.exit(1);
}
