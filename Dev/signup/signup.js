function validate(){
let a=document.getElementById("mail").value;
let b=document.getElementById("epass").value;
let c=document.getElementById("cpass").value;
document.getElementById("mail-error").innerHTML=""
document.getElementById("pass-error").innerHTML = "";


if(a.includes('@')==false ||a==""||a.includes('.')==false) {
   let text = "please enter a valid email !";
    document.getElementById("mail-error").innerHTML = text;
}

if(b==""||c==""||b!=c) {
    let err1="Password mismatch !"
    document.getElementById("pass-error").innerHTML = err1;
}
}

