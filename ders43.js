function hesapla() {
  let x = Math.floor(Math.random() * 5);
  let y = Math.floor(Math.random() * 5);
  let z = Math.floor(Math.random() * 5);
  let a = Math.floor(Math.random() * 5);
  let b = Math.floor(Math.random() * 5);
  let c = Math.floor(Math.random() * 5);

  let sayi1 = document.getElementById("sayi1").value;
  let sayi2 = document.getElementById("sayi2").value;
  let sayi3 = document.getElementById("sayi3").value;
  let sayi4 = document.getElementById("sayi4").value;
  let sayi5 = document.getElementById("sayi5").value;
  let sayi6 = document.getElementById("sayi6").value;

  document.getElementById("sonuc1").innerHTML = x;

  document.getElementById("sonuc2").innerHTML = y;

  document.getElementById("sonuc3").innerHTML = z;

  document.getElementById("sonuc4").innerHTML = a;

  document.getElementById("sonuc5").innerHTML = b;

  document.getElementById("sonuc6").innerHTML = c;

  // sayi1 = x; sayi2= y; sayi3= z; sayi4= a; sayi5=b; sayi6 =c

  let k = document.getElementsByClassName("kazan")[0];
  let totalKazanc = 0;

  if (x == sayi1) {
    totalKazanc = totalKazanc + 10;
  }
  if (y == sayi2) {
    totalKazanc = totalKazanc + 10;
  }
  if (z == sayi3) {
    totalKazanc = totalKazanc + 10;
  }
  if (a == sayi4) {
    totalKazanc = totalKazanc + 10;
  }
  if (b == sayi5) {
    totalKazanc = totalKazanc + 10;
  }
  if (c == sayi6) {
    totalKazanc = totalKazanc + 10;
  }
  k.innerHTML = totalKazanc + "₺";
}
