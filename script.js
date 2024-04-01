document.getElementById("submit").addEventListener("click", function() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        window.location.href = "./quantri.html";
    } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
    }   
});