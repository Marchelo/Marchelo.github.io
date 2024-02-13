// const dugme = document.getElementById("btn_prijava")
const form = document.getElementById("prijava_")

const ime = document.getElementById("ime");
const prezime = document.getElementById("prezime");
const datum = document.getElementById("datum");
const pol = document.getElementById("pol");
const grad = document.getElementById("lista");
const mail = document.getElementById("email");
const k_ime = document.getElementById("username");
const sifra = document.getElementById("sifra");
const adresa = document.getElementById("adresa")

function redirect(){
    window.location.href="../HTML/prijava.html";
}

form.addEventListener('submit', function() {
    let con = confirm("Da li ste sigurni da ste ispravno uneli podatke?")
    if (con == true) {
        alert("Uspešno ste se registrovali! Prosledićemo Vas na stranicu za prijavu!\n" 
        + "Ime: " + ime.value + "\n"
        + "Prezime: " + prezime.value + "\n"
        + "Datum rođenja: " + datum.value + "\n"
        + "Pol: " + pol.value + "\n"
        + "Grad: " + grad.value + "\n"
        + "Email: " + mail.value + "\n"
        + "Korisničko ime: " + k_ime.value + "\n"
        + "Šifra: " + sifra.value + "\n"
        + "Adresa: " + adresa.value  
        )
    }else{
        alert("Niste se registrovali!")
    }
})
$('.input').on('focus', function() {
    $(this).css('border', '2px solid #00D147');
    $(this).css("background-color", "lightgreen");      
});
$('.input').on('blur', function() {
    $(this).css('border', '2px solid green');
    $(this).css("background-color", "#fff");      
});