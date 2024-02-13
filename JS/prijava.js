
const form = document.getElementById("prijava_")
const ime = document.getElementById("username");
const sifra = document.getElementById("password");

function redirect(){
    window.location.href="../HTML/galerija.html";
}

form.addEventListener("submit", function() {
    let con = confirm("Da li ste sigurni da ste ispravno uneli podatke?")
    if (con == true) {
        alert("Uspešno ste se prijavili! Prosledićemo Vas na stranicu sa destinacijama za putovanje!\n"
        + "Korisničko ime: " + ime.value + "\n"
        + "Šifra: " + sifra.value);
    }else{
        alert("Niste se prijavili!");
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



// dugme.addEventListener('click', (e) =>{
//     alert("Korisničko ime: " + ime.value + " "
//     + "Šifra: " + sifra.value)
// })

// $("#username").focus(function(){
//     $(this).css("background-color", "#cccccc");
//   });
