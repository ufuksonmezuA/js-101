// ################################################################
            // 05-08-2023 //
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
            // DEĞİŞKEN OLUŞTURMA DEVAM //
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
            // 06-08-2023 //
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
            // 12-08-2023 //
// ################################################################

// const array_vareable = [1,5,10,15,"hello",10,20];
// const arraylength = array_vareable.length;
// const last_element = array_vareable[arraylength - 1];

// let new_array = [];

// console.log(array_vareable);
// console.log("ilk eleman: ",array_vareable[0]);
// console.log("toplam eleman sayısı: ",array_vareable.length);
// console.log("son eleman: ", last_element);

// array_vareable.map(t => new_array.push(t));
// array_vareable.map((t, index) => console.log("şu an ki eleman: ", t + " ve " + index));

// const boolean_variable_1 = true;
// const boolean_variable_2 = false;

// /* OPERATÖRLER */
// const kontrol_1 = (3 !== 5);            /       !==  -> eşit değildir
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


// let animals = ["kedi", "köpek", "at", "köpek"];
// let animals_length = animals.length;

// if(animals_length > 3)
// {
//     console.log("Toplam eleman sayısı 3 büyüktür");
// }

// else if (animals_length == 3)
// {
//     console.log("Toplam eleman sayısı 3'e eşit");
// }

// else
// {
//     console.log("Toplam eleman sayısı 3 küçüktür");
// }


// const yeni_degisken = "selam";
// if(yeni_degisken == "selam") console.log("sart doğtudur")
// else console.log("sart yanlıs");

// const  sayilar = [1,3,8,10,20,25];

// let sayilar_9dan_buyuk = [];

// sayilar.map(sayi => {
//     if(sayi > 9) {
//         sayilar_9dan_buyuk.push(sayi);
//     }
// });

// console.log("9'dan büyük sayılar: ", sayilar_9dan_buyuk);

// ################################################################
            // 13-08-2023 //
// ################################################################


//  ##############  FIND && FINDINDEX  ##############

// const ages = [15, 11, 18, 27, 39, 55, 20, 6, 13];

// console.log(ages);

// const finded_age = ages.find(age => age > 20); // x > 20 gibi şartı sağlayan ilk elemanı döner.

// const finded_index = ages.findIndex(y => y > 20); // y > 20 şartını sağlayan ilk elemanın index numarısnı döner.

// console.log("20'den büyük olan ilk eleman:",finded_age);
// console.log("20'den büyük olan ilk elemanın index'i:",finded_index);


// ################################################################

//  ##############  SOME  ############## 
// const names = ["Ali", "Ahmet", "Ayşe", "Mehmet", "Mustafa"];
// const areAllString = names.some(z => typeof z === "number"); //elemanların bir tanesi yazdığmız şartı sağlıyor ise true döner.
// const isBiggerThen18 = ages.some(yas => yas > 18);

// console.log("some methodu sonucu:", areAllString);
// console.log("18'den büyük eleman var mı:", isBiggerThen18);

//  ##############  EVERY  ############## 

// const every_check = names.every(i => typeof i === 'string'); //elemanların hepsi yazdığmız şartı sağlıyor ise true döner.
// console.log("Hepsi string tipinde mi? ", every_check);


// ################################################################

//  ##############  FILTER   ##############
// const new_ages = ages.filter(a => a > 18); // şartı sağlayan ilk elemanları yeni bir array içerisinde toplar.(Tek eleman olsa bile)
// console.log("18'den büyük elemanlar:", new_ages);

// ages.filter(b => b > 15).map(b => console.log("eleman:", b));



// #######################  ARRAY DECONSTRUCTION   #########################################

// const first_name = names[0];
// console.log("ilk eleman", first_name);

// const second_name = names[1];
// console.log("ikinci eleman", second_name);

// let [first_name, second_name, third_name, forth_name] = names; //arraydeki elemanlara erişmek için kullanılan bir kısayol
// console.log("ilk eleman:", first_name);


//const ages = [15, 11, 18, 27, 39, 55, 20, 6, 13];

// let [first_number, second_number, third_number, ...rest] = ages; //
// console.log(first_number, second_number, third_number, rest);


// ################################################################

//  ##############  OBJECTS   ##############

// const ogrenci_1 = {
//     isim: "Canberk",
//     soyisim: "Beren",
//     yas: 26,
//     mezun: true
// }

// console.log("Birinci öğrenci", ogrenci_1);


// const ogrenciler = [ // JSON
//     {
//         isim: "Canberk",
//         soyisim: "Beren",
//         age: 26
//     },
//     {
//         isim: "Ahmet",
//         soyisim: "Yılmaz",
//         age: 30
//     },
//     {
//         isim: "Ayşe",
//         soyisim: "Yıldırm",
//         age: 36
//     },
//     {
//         isim: "Fatma",
//         soyisim: "Naz",
//         age: 13
//     }
// ]
// const filtered_array = ogrenciler.filter(ogrenci => ogrenci.age > 35);
// console.log("Yaşı 35'den büyük olan öğrenciler: ", filtered_array);


// const nested_object =  {
//     isim: "Ali Yağız",
//     soyisim: "Tar",
//     yas: 29,
//     notlar: {
//         matematik: 100,
//         felsefe: 100,  
//     }
// }

// const ogrenciler = [
//     {
//         isim: "Ali",
//         notlar: {
//             matematik: 50
//         }
//     },
//     {
//         isim: "Veli",
//         notlar: {
//             matematik: 60
//         }
//     },
//     {
//         isim: "Zeynep",
//         notlar: {
//             matematik: 30
//         }
//     },
//     {
//         isim: "Ayşe",
//         notlar: {
//             matematik: 40
//         }
//     },
//     {
//         isim: "Hasan",
//         notlar: {
//             matematik: 70
//         }
//     },
// ]
// const filtered_array = ogrenciler.filter(ogrenci => ogrenci.notlar.matematik < 50);
// console.log("Matematik sınav sonucu 50'nin altın da olan öğreciler: ", filtered_array);

// ################################################################
                        // 19-08-2023 //
// ################################################################

// const child_age = 15;

// if (child_age > 18) {
//     console.log("Kampayadan muaf");
//}
// else if (child_age == 13 ) {
//     console.log("Extra kampanya")
// }
// else {
//     console.log("Standart Kampanya");
// }

// const age_number = 15;
// switch(age_number) {
//     case 15:
//         console.log("Yaş: 15");
//         break;
//     case 12:
//         console.log("Yaş: 12");
//         break;
//     case 13:
//         console.log("Yaş: 13");
//         break;
//     case 14:
//         console.log("Yaş: 14");
//         break;
//     default:
//         console.log("Hiçbirisi değil");
// }



// ######################## DÖNGÜLER & LOOPS ###############################



// const new_array = [40, 35, 50];

// new_array.forEach((sayi, index) => {
//     console.log("şu an ki sayı: ", sayi);
//     console.log("bu sayının indexi", index);
// });



// for (let i=0; i < 8; i++){
//     console.log("Mevcut iterasyon", i);
// }
// console.log("#####################################################");


// while döngüsü
// let i = 0;
// while(i < 5) {
//     i++;
//     console.log("i değeri 5'ten küçüktür.", i);
// }

// console.log("#####################################################");

// do-while
// let x = 0;
// do {
//     x ++;
//     console.log("x değeri 5'ten küçüktür.", x);
// } while(x < 5);



// console.log("#####################################################");


// fonksiyonlar
// let sayac = 0;

// function sayaciGuncelle(yeni_deger){
//     sayac = yeni_deger;
//     console.log("Sayacın güncel değeri->", sayac);
// }

// sayaciGuncelle(23);



// EXAMPLE
// let xList = [];
// function yeniFunc() {
//     let x = 0; 
//     while(x <= 5) {
//         xList.push(x);
//         x++;
//     }
//     console.log(xList);
// }
// yeniFunc();

// ################################################################
                        // 20-08-2023 //
// ################################################################
// const ikinciFonksiyon = (param1, param2) => {
//     console.log("ikinci fonksiyon çağrıldı: ", param1 + "-" + param2);
// }
// ikinciFonksiyon("ilkparametre", "ikinciparametre");

// function sayilariCarp(num1, num2){
//     const carpimSonucu = num1 * num2;
//     console.log("10 ile 5 sayısının çarpım sonucu: ",carpimSonucu);
// }
// sayilariCarp(10, 5);

//  console.log(carpimSonucu);    scope kavramı: fonksiyon içerisinde tanımlanan değişkenler sadece fonksiyon içerisin

// function sayilariBol(num1, num2){
//     const bolme_Sonucu = num1 / num2;
//     console.log("100 ile 10 sayısının bölme sonucu: ",bolme_Sonucu);
// }
// sayilariBol(100, 10);

// function sayilariCikar(num1, num2){
//     return (num1 - num2);
// }
// const cikartma_sonucu = sayilariCikar(50, 20);
// console.log("Çıkartma return sonucu: ", cikartma_sonucu);


// console.log("#####################################################");

// let sayac = 0;
// function ekranaBas(){
//     sayac++;
//     console.log("Sayacın güncel değeri", sayac);
// }
// setTimeout(ekranaBas, 5000); sayfa ilk yüklendikten 5 saniye sonra ekrana bas
// setInterval(ekranaBas, 3000);


// setInterval(() => {
//     sayac++;
//     console.log("Sayacın güncel değeri", sayac)
// }, 3000);


// const arrowFunc = (sayi1, sayi2) => sayi1 * sayi2
// const carpim_sonucu = arrowFunc(20,3);
// console.log("Çarpım sonucu",carpim_sonucu)


    // let xList = [];
    // let x = 0;
    // setInterval(() =>{
    //     while(x < 10){
    //         x++;
    //         xList.push(x);
    //         console.log("Array'in güncel hali:", xList)
    //     }
    // }, 1000);




    // #######################  DOM ( Document Object Model ) MANUPULASYONU #######################



// const ilk_eleman = document.getElementById("firstText");
// console.log(ilk_eleman);


// function yaziyiGuncelle(){
//     document.getElementById("ikinci").innerHTML = "Frontend Dev"
//     ucuncu_eleman[0].innerHTML = "burası yeni geldi";
// }
// setTimeout(yaziyiGuncelle,2000)

// const ucuncu_eleman = document.getElementsByClassName("ucuncu");

// console.log(ucuncu_eleman);



// const myName = document.getElementById("my-Name");
// function adimiYazdir() {
//     myName.innerHTML = "UFUK AYHAN SÖNMEZ";
    
// }
// setTimeout(adimiYazdir, 2000);

// function yaziGuncelle() {
//     const yenigun = document.getElementsByClassName("ayniClass");
//     yenigun[1].innerHTML = "20.08.23";
// }
// setTimeout(yaziGuncelle, 2000);

// ################################################################
                        // 26-08-2023 //
// ################################################################

// const first_person = {
//     firstName: "ali",
//     lastName: "Yılmaz",
//     age: 18,
//     isStudent:  false,
//     grades: {},
//     addresses: {},
//     seyHello: function(isim){
//         console.log("Merhaba " + isim)
//     },
//     bornYear: function(){
//         return 2023 - this.age
//     },
//     getFullName: function(){
            // return this.firstName + " " + this.lastName
//          return `Kullanıcının adı: ${this.firstName} ve kullanıcının soyadı: ${this.lastName}`
//     },
// }

// console.log(first_object.seyHello("Ahmet"));
// console.log(first_object.firstName);

// console.log("Doğum Yılı ", first_person.bornYear());
// console.log(first_person.getFullName());

// function selamSoyle(isim, yas){
//     console.log("Merhaba " + isim + " Yaşı " + yas);
// }
// selamSoyle("Mehmet", 25);

// const FirstNameVarMi = first_person.hasOwnProperty("firstName");
// console.log("firstName Field'ı var mı?", FirstNameVarMi);

// const EmailVarMi = first_person.hasOwnProperty("email");
// console.log("eMail Field'ı var mı?", EmailVarMi);

// const kullaniciAdi = first_person.firstName;
// const kullaniciSoyadi = first_person.lastName;
// const kullaniciYasi = first_person.age
// const kullaniciOgrenciMi = first_person.isStudent
// console.log(kullaniciAdi + kullaniciSoyadi + kullaniciYasi + kullaniciOgrenciMi);

// const {firstName, lastName, age, isStudent} = first_person;
// console.log(firstName+lastName+age+isStudent);

// const kopyaobje = {
//     ...first_person, 
//     email: "test@gmail.com",
//     firstName: "Mehmet"
// };

// kopyaobje.firstName = "Ahmet";
// delete kopyaobje.firstName;

// console.log("Kopyalanmış Obje", kopyaobje);

// const p_elemani = document.getElementById("selam");
// console.log(p_elemani);

// const h_elemani = document.getElementsByClassName("hava");
// console.log(h_elemani);

// const radio_elemani = document.getElementsByName("sozlesme");
// console.log(radio_elemani);

// const alinacaklar_listesi = document.querySelector(".alinacaklar");
// console.log(alinacaklar_listesi);

// const alinacaklar_listesi2 = document.querySelectorAll(".alinacaklar");
// console.log(alinacaklar_listesi2);

// const urun =  document.querySelectorAll("#urun");
// console.log(urun);

// const gorev_elemani = document.querySelector(".gorev");
// let urun_parent = gorev_elemani?.parentNode;
// console.log(gorev_elemani);
// console.log("", urun_parent);

// const gorev_listesi = document.querySelector("#gorevler");
// console.log(gorev_listesi);

// const ilk_gorev = gorev_listesi.firstElementChild
// console.log(ilk_gorev);

// const ikinci_gorev = ilk_gorev.nextElementSibling;
// console.log(ikinci_gorev);

// const son_gorev = gorev_listesi.lastElementChild;
// console.log(son_gorev);

// const gorevler = gorev_listesi.children;
// console.log(gorevler);
// console.log("3. görev", gorevler[2]);

// const fatura_elemani = document.querySelector(".fatura");
// console.log(fatura_elemani.previousElementSibling);
// console.log(fatura_elemani.nextElementSibling);

// let google_linki = document.querySelector(".besinci-kisim");
// function yeniSekmedeAc(){
//     google_linki.setAttribute("target","_blank");
// }
// setTimeout(yeniSekmedeAc(), 5000);

// ################################################################
                        // 02-092023 //
// ################################################################

// console.log("##############################");
// console.log("##############################");
// console.log("##############################");

// const firstTag = document.querySelector(".first-link");
// console.log(firstTag);
// firstTag.setAttribute("href", "https://google.com");

// firstTag.style.color = "green";
// console.log("Link'in rengi ",firstTag.style.color);

// console.log("firstTag elemının class'ı",firstTag.className);
// firstTag.className = firstTag.className + " yeni";
// console.log("firstTag elemının class'ı güncellendi", firstTag.className);

// console.log("firstTag elemının tüm class'ları ", firstTag.classList);

// firstTag.classList.add("deneme");
// firstTag.classList.remove("gizle");
// firstTag.classList.replace("text","text-3-xl");
// for (let cssClass of firstTag.classList){
//     console.log("firstTag' in classı", cssClass)
// }

// firstTag.classList.forEach(item => console.log("", item));

/*  ////////////////////////////////////////////////////////////////  */

// console.log("##############################");
// console.log("##############################");

// let loadingElm = document.querySelector("#loading");
// console.log("loading gif'inin yüksekliği: ", loadingElm.getAttribute("height"));
// function hideElm(){
//     loadingElm.setAttribute("height", 1);
//     loadingElm.setAttribute("width", 1);
//     loadingElm.className = loadingElm.className + " hidden";
//     console.log("loading gif'inin yeni yüksekliği: ", loadingElm.getAttribute("height"));
//     firstTag.removeAttribute("href");
// }

// function showElm(){
//     loadingElm.classList.replace("hidden", "block");
//     console.log(loadingElm.classList.contains("block")); // elemanın için de block elemanı var mı yokmu kontrol eder, true yada false seklin de döner.
// }
// console.log(loadingElm.classList.contains("block"));

// setTimeout(hideElm, 3000);
// setTimeout(showElm, 5000);
// console.log("link adresi: ", firstTag.getAttribute("href"));

// ################################################################

//const menuElm = document.querySelector("#menu");
// const menuElm = document.getElementById("menu");
// console.log(menuElm.innerHTML);

// console.log(menuElm.textContent);

// const selamElm = document.querySelector(".selamTxt");

/*function updateSelamTxt (){
    selamElm.textContent = "Selam, Güncellendi."

    let newLiElement = document.createElement("li");
    // newLiElement.textContent= "yeni Eleman";

    let liLİnkElm = document.createElement("a");
    liLİnkElm.setAttribute("href", "https://twitter.com");
    liLİnkElm.textContent = "Twitter";

    newLiElement.appendChild(liLİnkElm)
    menuElm.appendChild(newLiElement);

    const homeElm = document.querySelector(".homeElm");

    const newPElm = document.querySelector("p");
    newPElm.textContent = "Yeni bir p elamamı";
    homeElm.after(newPElm)

    const silinecekEleman = document.querySelector("#merhabaTxt")
    menuElm.removeChild(silinecekEleman)

    const cikisYapElm = document.createElement("lş");
    cikisYapElm.textContent = "Çıkış yap";

    const girisYapElm = document.querySelector(".auth");
    menuElm.replaceChild(cikisYapElm, girisYapElm);
}
setTimeout(updateSelamTxt, 3000)*/

// ################################################################
                        // 03-092023 //
// ################################################################

let girisButonu = document.querySelector("#hesapOlustur");
let uyeOlButonuPopup = document.querySelector("#uyeol-butonu");
let popElm = document.querySelector("#popupWrapper");


const kullaniciAdiTextfield = document.querySelector("#kullaniciadi");
const emailtextfield = document.querySelector("#email");
const passwordtextfield = document.querySelector("#sifre");

let testElm = document.querySelector("#test");

function tiklamaFonksiyonu (){
    popElm.classList.replace("hidden", "block");
}

function tiklamaFonksiyonuPopup(){
    popElm.classList.replace("block", "hidden");
}

function testFonksiyonu(){
    alert("uyarı");
}

function kolayFonksiyon(){
    alert("click eventini tanımlamak için pratik bir yol")
}

let registerForm = {
    username: "",
    email: "",
    password: ""
}

girisButonu.addEventListener("click", tiklamaFonksiyonu);
uyeOlButonuPopup.addEventListener("click", tiklamaFonksiyonuPopup);
testElm.addEventListener("click", testFonksiyonu);

kullaniciAdiTextfield.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
        tiklamaFonksiyonuPopup();
        kullaniciAdiTextfield.value = "";
    }
    else {
        registerForm.username = kullaniciAdiTextfield.value;
    }
    console.log(registerForm)
})

emailtextfield.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
        tiklamaFonksiyonuPopup();
        emailtextfield.value = "";
    }
    else {
        registerForm.email = emailtextfield.value;
    }
    console.log(registerForm)
})

passwordtextfield.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
        tiklamaFonksiyonuPopup();
        passwordtextfield.value = "";
    }
    else {
        registerForm.password = passwordtextfield.value;
    }
    console.log(registerForm)
})