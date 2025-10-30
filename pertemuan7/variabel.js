const form = document.getElementById("MyForm");
const nama = document.getElementById("Name");
const addres = document.getElementById("email");
const password = document.getElementById("Password");

const NamaError = document.getElementById("NameError");
const EmailError = document.getElementById("EmailError");
const PasswordError = document.getElementById("PasswordError");

form.addEventListener("submit", function(event){
    event.preventDefault();

    NamaError.textContent = "";
    EmailError.textContent = "";
    PasswordError.textContent = "";

    if (nama.value.trim() === ""){
        NamaError.textContent = "Nama tidak boleh kosong"
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (addres.value.trim() === ""){
        EmailError.textContent = "Email tidak boleh kosong"
    }else if (!addres.value.match(emailPattern)){
        EmailError.textContent = "format email tidak valid "
    }


    if (password.value.trim() === ""){
        PasswordError.textContent = "Password tidak boleh kosong"
    } else if (password.value.length < 6){
        PasswordError.textContent ="Password minimal 6 karakter"
    }
})

