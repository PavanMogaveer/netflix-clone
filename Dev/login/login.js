function validate()
{
    let x=document.getElementById("mail").value;
    let mailerror;
    if(x.includes('@')==false||x.includes('.')==false){
       
        mailerror='! invalid email id ';
        document.getElementById('mail-error').innerHTML=mailerror;
    }
    let y=document.getElementById("pass").value;
    let passerror;
    if(y.includes('@')==false||y.includes('.')==false){
       
        passerror='! invalid password ';
        document.getElementById('pass-error').innerHTML=passerror;
    }
}