function vac() {
    var a = document.getElementById("pass").value;
    var b = document.getElementById("repass").value;
    var result = a == b && a!="" && b!= "" ? "Verification Successful" : "Verification failed";
    var verify = document.getElementById("verify");
    verify.innerHTML = result;
    return false;
}