
var password = document.getElementById("mypassword"),
    mycheckbox = document.getElementById("mycheck"),
    mystatus= document.getElementById("status"),
    LeftEye = document.getElementById("catLeftEye"),
    RightEye = document.getElementById("catRightEye")

 function removeValidationMsg(){
    mystatus.innerHTML="Hidden";
    mystatus.style.color="green";
    mycheckbox.checked= false;
 }

mycheckbox.addEventListener('click',()=>{

        if(password.value == ""){

            mystatus.innerHTML="You're forgetting to enter password!";
            mystatus.style.color="red";
        }
    
        else{
            if(mycheckbox.checked){
                password.type ="text";
                mystatus.innerHTML="Visible";
                mystatus.style.color="orange";
                
                LeftEye.style.animation ="finalLeftEye 1000s ease-in";
                RightEye.style.animation ="finalRightEye 1000s ease-in";         
            }
            else{
             password.type ="password"
             mystatus.innerHTML="Hidden"
             mystatus.style.color="green"
             LeftEye.style.animation ="initialLeftEye 1000s  ease-in";
             RightEye.style.animation ="initialRightEye 1000s ease-in";
        
            }
        }
   })
