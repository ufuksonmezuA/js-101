console.log("Merhaba Javascript");

//console.log("Bu bir yorum satırıdır.");

/*
    console.log("Bunu gösterme");
    console.log("Bunu da gösterme"); 
*/

// değişkenler ve değişken oluşturma

const isim = "Ufuk"; //string değişken türü, düz yazı tipindeki değerleri tutar ve bunu tırnak işaretleri içerisin de tutar.
let soyisim;

// constisim; bu şekilde 

soyisim = "Sönmez";
// isim = "Yeni İsim";  const ön ekiyle oluşturulan değişkenlere tekrar yeni değer tanımlaması yapılamaz!!

const tamisim = isim + soyisim

// soyisim = "Yeni Soyad";  --> buradaki soyisim değeri console'da güncellenmeyecektir.

console.log(tamisim);