// let eyeicon = document.getElementById("eyeicon");
// let password = document.getElementById("password");

// eyeicon.onclick = function(){
//     if(password.type=="password"){
//         password.type = "text";
//         eyeicon.src="eye-open.png";

//     }else {
//         password.type ="password";
//         eyeicon.src="eye-closed.png";


//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
    let eyeicon = document.getElementById("eyeicon"); // Updated ID
    let password = document.getElementById("password");

    

    eyeicon.onclick = function() {
        if (password.type === "password") {
            password.type = "text";
            eyeicon.src = "eye-open.png";
        } else {
            password.type = "password";
            eyeicon.src = "eye-closed.png";
        }
    };
// });

// let password = document.querySelector(".input-box input[type='password']");
