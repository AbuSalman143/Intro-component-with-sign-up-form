


let form=document.querySelector("form");

// inputs

let fname=document.querySelector("#fname");
let lname=document.querySelector("#lname");
let email=document.querySelector("#email");
let password=document.querySelector("#password");


// error msg 

let error_msg_fname=document.querySelector("#error-msg-fname");
let error_msg_lname=document.querySelector("#error-msg-lname");
let error_msg_email=document.querySelector("#error-msg-email");
let error_msg_pasword=document.querySelector("#error-msg-pasword");





// error icon


let error_img_fname=document.querySelector("#error-img-fname");
let error_img_lname=document.querySelector("#error-img-lname");
let error_img_email=document.querySelector("#error-img-email");
let error_img_pasword=document.querySelector("#error-img-pasword");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    toggle();
    
})


function toggle(){



    if(fname.value.trim()===""){
        error_img_fname.style.display="block";
        error_msg_fname.style.display="block";
        fname.style.border="2px solid red";
        fname.placeholder="";
    }else{
        error_img_fname.style.display="none";
        error_msg_fname.style.display="none";
        fname.style.border="1px solid hsl(246, 25%, 77%)";
    }
    if(lname.value.trim()===""){
        error_img_lname.style.display="block";
        error_msg_lname.style.display="block";
        lname.style.border="2px solid red";
        lname.placeholder="";
    }else{
        error_img_lname.style.display="none";
        error_msg_lname.style.display="none";
        lname.style.border="1px solid hsl(246, 25%, 77%)";
    }
    if(!invalidemail(email.value.trim()) ){
        error_img_email.style.display="block";
        error_msg_email.style.display="block";
        email.style.border="2px solid red";
        email.value="";
        email.placeholder="abc@gmail.com";
        // email.placeholder.style.color="red"
    }else{
        error_img_email.style.display="none";
        error_msg_email.style.display="none";
        email.style.border="1px solid hsl(246, 25%, 77%)";
    }
    if(password.value.trim()===""){
        error_img_pasword.style.display="block";
        error_msg_pasword.style.display="block";
        password.style.border="2px solid red";
        password.placeholder="";
    }else{
        error_img_pasword.style.display="none";
        error_msg_pasword.style.display="none";
        password.style.border="1px solid hsl(246, 25%, 77%)";
    }


}


function invalidemail(email){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

