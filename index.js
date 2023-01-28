'use strict'

const input=document.querySelector("#inputField");
const errorMessage=document.querySelector(".error");

function validateEmail() {
    let email=input.value;
    let emailValid=email.match(/\S+@\S+\.\S+/);

    if(email.length==0){
        errorMessage.innerHTML=`Email is required`;
        input.style.border="1px solid red";
        return false;
    }
    if(!emailValid){
        errorMessage.innerHTML=`Please provide a valid email address`;
        input.style.border="1px solid red";
        return false;
    }
    if(emailValid){
    errorMessage.innerHTML=``
    input.style.border="1px solid var(--paleBlue)"
    return true;
    }
  }

function validateForm(){
    if(!validateEmail()){
        return false;
    }
}