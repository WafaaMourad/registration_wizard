function validateData() {
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;
    var result = document.getElementById("result");

    result.setAttribute("class", "alert theme-danger d-block text-center");
    if (user == "" && email == "" && pass == "" && confirm == "") {
        result.innerHTML = "Enter Data";
        return false;
    }
    else if (user.length < 5 || user.length > 15) {
        result.innerHTML = "Enter 5-15 characters in Name";
        return false;
    }
    else if (email.indexOf("@",1) == -1 || email.indexOf(".com",5) == -1) {
        result.innerHTML = "Enter valid Email";
        return false;
    }
    else if (pass.length < 8) {
        result.innerHTML = "Weak Password";
        return false;
    }
    else if (pass != confirm) {
        result.innerHTML = "Password not matched";
    }

}
