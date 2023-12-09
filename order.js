function hitungtotal() {
  var namastr = document.fform.inama.value;
  var jumlahInt = parseFloat(document.fform.ijumlah.value);
  var hb = 0.0;
  var total = 0.0;
  if (namastr == "Bread") {
    hb = 10000;
  } else if (namastr == "Pastries") {
    hb = 12000;
  } else if (namastr == "Cake Share in Jar") {
    hb = 25000;
  } else if (namastr == "Cookies") {
    hb = 10000;
  } else if (namastr == "Cupcake") {
    hb = 12500;
  } else if (namastr == "Macaroon") {
    hb = 8000;
  } else if (namastr == "Signature Cake") {
    hb = 250000;
  }

  total = hb * jumlahInt;

  document.fform.oharga.value = eval(hb);
  document.fform.ototal.value = eval(total);
}
