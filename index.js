
function validate() //this function validates the entered email
{ 
    let x = document.getElementById("email").value;
    document.getElementById("error").innerHTML = ""
    
    let text;
    if(x.includes('@')==false ||x==""||x.includes('.')==false) {
        text = "please enter a valid email !";
        document.getElementById("error").innerHTML = text;
    }
}

function validate2()  //this function validates the entered email footer one
 { 
    let y = document.getElementById("email2").value;
    document.getElementById("error2").innerHTML = ""
    
    let text2;

    if(y.includes('@')==false ||y==""||y.includes('.')==false) {
        text2 = "please enter a valid email !";
        document.getElementById("error2").innerHTML = text2;
    }
}