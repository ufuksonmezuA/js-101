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


const number1 = 5;  // number
const number2 = 10; // number
const number3 = "4"; // string


const calculate1 = number2 * number1; //çarpma işlemi (sonuç: 50)
const calculate2 = number2 / number1; //bölme işlemi (sonuç: 2) 
const calculate3 = number2 + number1; //toplama işlemi (sonuç: 15)
const calculate4 = number2 - number1; //çıkarma işlemi (sonuç: 5)
const calculate5 = 30 * 2;

const calculate6_string = number2 + number3; //
const calculate6 = number2 + Number(number3);

const stringNumber = number1.toString();
const calculateStringNumber = stringNumber + number2;

console.log(calculate1);
console.log(calculate2);
console.log(calculate3);
console.log(calculate4);
console.log(calculate5);
console.log(calculate6_string);
console.log(calculate6);
console.log(calculateStringNumber);

const newVaraible =  number2 + "-" + number3;
console.log(newVaraible);

// ################################################################
    //////////////// DEĞİŞKEN OLUŞTURMA DEVAM ////////////////
// ################################################################


const sayi1 = 5;
const sayi2 = 10;
const sayi3 = 15;
const sayi4 = 20;
const sayi5 = 25;

const sayilar = [5, 10, 15, 20, 25, "selam", "deneme", 3, 5, 10, 33]; // array (liste) tipi değişken
const ilksayi = sayilar[0];

console.log(sayilar);
console.log("sayılar array'in elaman sayısı:", sayilar.length);
console.log("array'in ilk elamanı:", ilksayi);
console.log("array'in ikinci elamanı:", sayilar[1]);
console.log("array'in son elamanı:", sayilar[5]);

const elamansayisi = sayilar.length; // 11
const soneleman = sayilar[elamansayisi - 1];
console.log("son eleman:", soneleman);


const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const toplamsayi = numbers.length;
const calc = numbers[0] * numbers[toplamsayi - 1];
console.log("ilk ve son eleman çarpım sonucu:", calc);