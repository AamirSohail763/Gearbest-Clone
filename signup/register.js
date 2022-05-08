var homeimage = document.querySelector(".homepage");
homeimage.addEventListener("click",homepage);

function homepage(){
    window.location.href="index.html";
}

function activate(x){
    x.style.cursor="pointer";
}
function sign(){
    window.location.href="signup.html";
}
function regis(){
    window.location.href="register.html";
}

var sig=document.querySelector(".signin");
 sig.addEventListener("click",sign);
var regi=document.querySelector(".register");
 regi.addEventListener("click",regis);
var form=document.querySelector("#form");
form.addEventListener("submit",register);

var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

function register(){

    event.preventDefault();
    var email=document.querySelector("#email").value;
    var password=document.querySelector("#password").value;
    var retype=document.querySelector("#retype").value;
    var cval=document.querySelector("#checkbox").value;
    console.log(email,password,retype,cval)

    if(email.length <=4 && password.length <=4){
        alert("Please enter valid details'\n'Email & Password length should be greater than 4");
        return;
    }

    if(password !== retype){
        alert("type password correctly");
        return;
    }

    if(cval !== "checked"){
        alert("please click checkbox");
        return;
    }

    var checker=-1;
    accounts.forEach(function(elem){
        var identity=elem.email;
        // var pass = elem.password;
        if(identity==email ){
            checker = 1;
        }
        
    })
    if(checker==1){
        alert("Account Already existed");
        empty();
        return;
    }




    //console.log("I am in")
    var obj = {
        email : email,
        password:password,
        retype:retype,
        check:cval
    }
    

    accounts.push(obj);
    localStorage.setItem("accounts",JSON.stringify(accounts));
    alert("Registration Successful");

    empty();
    window.location.href="signup.html";

}

function empty(){
    const inputs = document.querySelectorAll("#email , #password, #retype");
    inputs.forEach(input => {input.value = "";})

}