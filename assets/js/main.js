// ################################################################
            //////////////// 05-08-2023 ////////////////
// ################################################################

// console.log("Merhaba Javascript");

//console.log("Bu bir yorum satırıdır.");

/*
    console.log("Bunu gösterme");
    console.log("Bunu da gösterme"); 
*/

// değişkenler ve değişken oluşturma

// const isim = "Ufuk"; //string değişken türü, düz yazı tipindeki değerleri tutar ve bunu tırnak işaretleri içerisin de tutar.
// let soyisim;

// constisim; bu şekilde 

// soyisim = "Sönmez";
// isim = "Yeni İsim";  const ön ekiyle oluşturulan değişkenlere tekrar yeni değer tanımlaması yapılamaz!!

// const tamisim = isim + soyisim

// soyisim = "Yeni Soyad";  --> buradaki soyisim değeri console'da güncellenmeyecektir.

// console.log(tamisim);


// const number1 = 5;  // number
// const number2 = 10; // number
// const number3 = "4"; // string


// const calculate1 = number2 * number1; //çarpma işlemi (sonuç: 50)
// const calculate2 = number2 / number1; //bölme işlemi (sonuç: 2) 
// const calculate3 = number2 + number1; //toplama işlemi (sonuç: 15)
// const calculate4 = number2 - number1; //çıkarma işlemi (sonuç: 5)
// const calculate5 = 30 * 2;

// const calculate6_string = number2 + number3; //
// const calculate6 = number2 + Number(number3);

// const stringNumber = number1.toString();
// const calculateStringNumber = stringNumber + number2;

// console.log(calculate1);
// console.log(calculate2);
// console.log(calculate3);
// console.log(calculate4);
// console.log(calculate5);
// console.log(calculate6_string);
// console.log(calculate6);
// console.log(calculateStringNumber);

// const newVaraible =  number2 + "-" + number3;
// console.log(newVaraible);

// ################################################################
    //////////////// DEĞİŞKEN OLUŞTURMA DEVAM ////////////////
// ################################################################


// const sayi1 = 5;
// const sayi2 = 10;
// const sayi3 = 15;
// const sayi4 = 20;
// const sayi5 = 25;

// const sayilar = [5, 10, 15, 20, 25, "selam", "deneme", 3, 5, 10, 33]; // array (liste) tipi değişken
// const ilksayi = sayilar[0];

// console.log(sayilar);
// console.log("sayılar array'in elaman sayısı:", sayilar.length);
// console.log("array'in ilk elamanı:", ilksayi);
// console.log("array'in ikinci elamanı:", sayilar[1]);
// console.log("array'in son elamanı:", sayilar[5]);

// const elamansayisi = sayilar.length; // 11
// const soneleman = sayilar[elamansayisi - 1];
// console.log("son eleman:", soneleman);


// const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// const toplamsayi = numbers.length;
// const calc = numbers[0] * numbers[toplamsayi - 1];
// console.log("ilk ve son eleman çarpım sonucu:", calc);

// ################################################################
            //////////////// 06-08-2023 ////////////////
// ################################################################

// const x = 50.124;
// const y = x.toFixed(3); // tofixed() methodu ile ondalıklı sayıların virgülden sonraki kaç hane gösterileceğini belirler.
// console.log("", x);


// const x_degisken = "28.55";

// const string_number_cevirme = Number(x_degisken);
// const string_number_cevirme_fixed = string_number_cevirme.toFixed(2);
// console.log("Deneme", string_number_cevirme_fixed);

// const veri_tipi_ogrenme_x = typeof (x_degisken);
// console.log("x değişkeninin veri tipi:", veri_tipi_ogrenme_x);

// let ogrenciler = [
//     "Canberk",  //0.index
//     "Ahmet",    //1.index
//     "Mehmet",   //2.index
//     "Veli",     //3.index
//     5,          //4.index (array tipi değişkenler de karışık veri tipleri tutulabilir)
//     "Ayşe",     //5.index
//     "Fatma",    //6.index
//     "Hasan"     //7.index  
//  ];  // array(liste) veri tipi


//     const ilk_ogrenci = ogrenciler[0];
//     const ogrencisayisi = ogrenciler.length;
//     console.log("Öğrenciler Array'i", ogrenciler);
//     console.log("Öğrenci Sayısı:", ogrencisayisi);
//     console.log("İlk Öğrenci:", ilk_ogrenci);


//     const sonogrenci = ogrenciler[ogrencisayisi - 1];
//     console.log("Son Öğrenci:", sonogrenci);

//     ogrenciler.push("Sevgi");

//     console.log("Öğrenciler Array'i Güncellendi", ogrenciler);

// let meyveler = ["Kavun","Karpuz","Üzüm","Kiraz","Şeftali"];
// meyveler.push = ("Muz");
// const ilkmeyve = meyveler[0]
// console.log(meyveler);
// console.log("ilk Meyve:", ilkmeyve);
// const meyvesayisi = meyveler.length;
// const sonmeyve = meyveler[meyvesayisi - 1];
// console.log("Son Meyve:", sonmeyve);


// ################################################################
            //////////////// 12-08-2023 ////////////////
// ################################################################

// const array_vareable = [1,5,10,15,"hello",10,20];
// const arraylength = array_vareable.length;
// const last_element = array_vareable[arraylength - 1];

// let new_array = [];

// console.log(array_vareable);
// // console.log("ilk eleman: ",array_vareable[0]);
// // console.log("toplam eleman sayısı: ",array_vareable.length);
// // console.log("son eleman: ", last_element);

// array_vareable.map(t => new_array.push(t));
// array_vareable.map((t, index) => console.log("şu an ki eleman: ", t + " ve " + index));

// const boolean_variable_1 = true;
// const boolean_variable_2 = false;

// /* OPERATÖRLER */
// const kontrol_1 = (3 !== 5);           //       !==  -> eşit değildir
// const kontrol_2 = (3 == 5);            //        ==  -> eşittir
// const kontrol_3 = (3 > 5);             //         >  -> büyüktür
// const kontrol_4 = (3 < 5);             //         <  -> küçüktür

// const kontrol_5 = (15 < 20 && 3 < 4);  //         && -> ve
// const kontrol_6 = (6 < 7 || 8 < 3);    //         || -> veya
// const kontrol_7 = !kontrol_6;

// console.log("Kontrol sonucu ", kontrol_6);


// const yeni_sayi = 5;



// if(yeni_sayi  == 4)
// {
//     console.log("Kontrol doğru, if blogu");
// }

// else if (yeni_sayi  == 5)
// {
//     console.log("Kontrol doğru, else if blogu");
// }

// else
// {
//     console.log("Kontrol yanlış");
// }


let animals = ["kedi", "köpek", "at", "köpek"];
let animals_length = animals.length;

if(animals_length > 3)
{
    console.log("Toplam eleman sayısı 3 büyüktür");
}

else if (animals_length == 3)
{
    console.log("Toplam eleman sayısı 3'e eşit");
}

else
{
    console.log("Toplam eleman sayısı 3 küçüktür");
}






















// ################################################################
            //////////////// 13-08-2023 ////////////////
// ################################################################
