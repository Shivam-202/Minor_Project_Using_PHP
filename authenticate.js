
let firstflag = 0,lastflag = 0,userflag = 0,mailflag = 0,passwordflag = 0,repasswordflag=0,genderflag = 0,capchaflag=0;
let correctName = /^[A-Za-z]+$/;
let mailformat = /^[A-Za-z]+$/;

var finalCap;

function captcha() {
    let random_num = Math.random() * 10000;
    let floor_num = Math.floor(random_num);

    let digit = (num, c = 0) => {
        if (num) {
            return digit(Math.floor(num / 10), ++c);
        };
        return c;
    };

    let count = digit(floor_num);

    if (count == 3) {
        finalCap = floor_num + "0";
    }
    else if (count == 2) {
        finalCap = "0" + floor_num + "0";
    }
    else {
        finalCap = floor_num;
    }

    document.getElementById('capch').value = finalCap;

}

function firstnamecheck(elem) {
    let name = elem.value.trim();
    

    if (name.length == 0) {
        document.getElementById("finam").style = "color:red";
        document.getElementById('finam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> FirstName is Empty";

        firstflag = 0;
    }
    else {
        if (name.match(correctName)) {
            document.getElementById("finam").style = "color:green";
            document.getElementById('finam').innerHTML = "<i class='far fa-check-circle' style='font-size:1.2rem;'></i> FirstName is Correct";

            firstflag = 1;
        } else {
            document.getElementById("finam").style = "color:red";
            document.getElementById('finam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter Only Alphavates";

            firstflag = 0;
        }
    }

}

function lastnamecheck(elem) {
    let name = elem.value.trim();


    if (name.length == 0) {
        document.getElementById("linam").style = "color:red";
        document.getElementById('linam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> FirstName is Empty";

        lastflag = 0;
    }
    else {
        if (name.match(correctName)) {
            document.getElementById("linam").style = "color:green";
            document.getElementById('linam').innerHTML = "<i class='far fa-check-circle' style='font-size:1.2rem;'></i> FirstName is Correct";

            lastflag = 1;
        } else {
            document.getElementById("linam").style = "color:red";
            document.getElementById('linam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter Only Alphavates";

            lastflag = 0;
        }
    }

}

function usernamecheck(elem) {
    let name = elem.value.trim();


    if (name.length == 0) {
        document.getElementById("uinam").style = "color:red";
        document.getElementById('uinam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> FirstName is Empty";

        userflag = 0;
    }
    else {
        if (name.match(correctName)) {
            document.getElementById("uinam").style = "color:green";
            document.getElementById('uinam').innerHTML = "<i class='far fa-check-circle' style='font-size:1.2rem;'></i> FirstName is Correct";

            userflag = 1;
        } else {
            document.getElementById("uinam").style = "color:red";
            document.getElementById('uinam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Enter Only Alphavates";

            userflag = 0;
        }
    }

}

function mailcheck(elem) {
    let name = elem.value.trim();
   

    if (name.length == 0) {
        document.getElementById("mail").style = "color:red";
        document.getElementById('mail').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Email Field is Empty";

        mailflag = 0;
    }
    else {
        if (name.endsWith("@gmail.com")) {
            document.getElementById("mail").style = "color:green";
            document.getElementById('mail').innerHTML = "<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Email is Correct";
        
            mailflag = 1;
        } 
       else if (name.match(mailformat)) {
        document.getElementById("mail").style = "color:green";
        document.getElementById('mail').innerHTML = "<i class='far fa-check-circle' style='font-size:1.2rem;'></i> FirstName is Correct";

        firstflag = 1;
    }
        else {
            document.getElementById("mail").style = "color:red";
            document.getElementById('mail').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Invalid Email ";

            mailflag = 0;
        }
    }

}

var storepassword ,password;

function passwordcheck(elem6){
     password = elem6.value.trim();
    storepassword = password;
    if(password.match(mailformat)){
        document.getElementById("password").style="color:red";
        document.getElementById('password').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Password should be digit or alphabate";
        pincodeflag = 0;
    }else{
    if(password.length == 0){
        document.getElementById("password").style="color:red";
        document.getElementById('password').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Password is Empty";

        passwordflag = 0;
    }
    else{  
        if(password.length < 6){
            document.getElementById("password").style="color:red";
            document.getElementById('password').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Password must be 6 Digits";
    
            passwordflag = 0;
        }
        else{
        document.getElementById("password").style="color:green";
        document.getElementById('password').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Pin Code is Correct";

         passwordflag = 1;
        }
    }
}
}

function repasswordcheck(elem7){
    let repassword = elem7.value.trim();
    if(repassword.match(storepassword) && password.length == repassword.length){
        document.getElementById("repassword").style="color:green";
        document.getElementById('repassword').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Password Is Match";
        repasswordflag = 1;
    }
    else{
    if(repassword.length == 0){
        document.getElementById("repassword").style="color:red";
        document.getElementById('repassword').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Confirm Password Field is Empty";

        repasswordflag = 0;
    }
    else{  
      
      if(storepassword != repassword){
            document.getElementById("repassword").style="color:red";
            document.getElementById('repassword').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Password is Not Match";
    
            repasswordflag = 0;
            
        }
       
        else{
            document.getElementById("repassword").style="color:green";
            document.getElementById('repassword').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Password is Match";
    
            repasswordflag = 1;
        }
    }
 }
}

function gendercheck(gen){
    let gender = gen.value;
   
    if(gender == "Male" || gender == "FeMale" || gender == "Other"){
        document.getElementById("gen").style="color:green";
        document.getElementById('gen').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Gender is Selected";
        genderflag = 1;
    }else{
        document.getElementById("gen").style="color:red";
        document.getElementById('gen').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Please Select the Gender";

        genderflag = 0;
    }
}


function capchacheck(elem9){
    let capcha = elem9.value.trim();
  
    if(capcha.match(finalCap) && capcha.length == 4){
        document.getElementById("capcha").style="color:green";
        document.getElementById('capcha').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Capcha Is Match";
        capchaflag = 1;
    }else{
    if(capcha.length == 0){
        document.getElementById("capcha").style="color:red";
        document.getElementById('capcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i>  Capcha Field is Empty";

        capchaflag = 0;
    }
    else{  
      
       if(capcha.length > 4){
            document.getElementById("capcha").style="color:red";
            document.getElementById('capcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha Is Not Match";
    
            capchaflag = 0;
        }
        else if(finalCap != capcha){
            document.getElementById("capcha").style="color:red";
            document.getElementById('capcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha is Not Match";
    
            capchaflag = 0;
            
        }else{
            document.getElementById("capcha").style="color:green";
            document.getElementById('capcha').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Capcha is Match";
    
            capchaflag = 1;
        }
    }
 }
}


function validate() {
    if (firstflag == 1 && lastflag == 1 && userflag == 1 && mailflag == 1 && passwordflag == 1 && repasswordflag == 1 && genderflag == 1 && capchaflag == 1) {
        return true;
    }
    else {
        if (firstflag == 0) {
            document.getElementById('finam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> First Name is Empty";
        }
        else if (lastflag == 0) {
            document.getElementById('linam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Last Name is Empty";
        }
        else if (userflag == 0) {
            document.getElementById('uinam').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> User Name is Empty";
        }
        else if (mailflag == 0) {
            document.getElementById('mail').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Email Field is Empty";
        }
        else if (passwordflag == 0) {
            document.getElementById('password').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Password Field is Empty";
        }
        else if (repasswordflag == 0) {
            document.getElementById('repassword').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Confirm Password Field is Empty";
        }
        else if (genderflag == 0) {
            document.getElementById('gen').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Gender is Not Select";
        }
        else if (capchaflag == 0) {
            document.getElementById('capcha').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha is Not Match";
        }
        return false;
    }
}

/* **********************************************************************
************* Login Validation ************** */
let capchacheckflag = 0;
function capcahcheck(elem) {
    let capcha = elem.value.trim();
    if(capcha.match(finalCap) && capcha.length == 4){
        document.getElementById("logincapcha").style="color:green";
        document.getElementById('logincapcha').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Capcha Is Match";
        capchacheckflag = 1;
    }else{
    if(logincapcha.length == 0){
        document.getElementById("logincapcha").style="color:red";
        document.getElementById('logincapcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i>  Capcha Field is Empty";

        capchacheckflag = 0;
    }
    else{  
      
       if(logincapcha.length > 4){
            document.getElementById("logincapcha").style="color:red";
            document.getElementById('logincapcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha Is Not Match";
    
            capchacheckflag = 0;
        }
        else if(finalCap != logincapcha){
            document.getElementById("logincapcha").style="color:red";
            document.getElementById('logincapcha').innerHTML="<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha is Not Match";
    
            capchacheckflag = 0;
            
        }else{
            document.getElementById("logincapcha").style="color:green";
            document.getElementById('logincapcha').innerHTML="<i class='far fa-check-circle' style='font-size:1.2rem;'></i> Capcha is Match";
    
            capchacheckflag = 1;
        }
    }
 }
}

function loginvalidate() {
    if(capchacheckflag == 1){
        return true;
    }
    else{
        document.getElementById('logincapcha').innerHTML = "<i class='far fa-times-circle' style='font-size:1.2rem;'></i> Capcha is Not Match";
    }
    return false;
}