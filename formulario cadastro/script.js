function validaPassword() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm_password");
    var passwordError = document.getElementById("passwordError");

    if (password.value != confirm_password.value) {
        passwordError.textContent = "As senhas não correspondem";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

document.getElementById("cadastroForm").addEventListener("submit", function(event){
    if (!validaPassword()) {
        event.preventDefault();
    }
});