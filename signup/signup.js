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
form.addEventListener("submit",signin);

var accounts=JSON.parse(localStorage.getItem("account")) || [];

function signin(){
    event.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    console.log(email,password);

    var praise=1;
    
    accounts.forEach(function(elem){
        var identity=elem.email;
        var pass = elem.password;
        if(identity==email && pass == password){
            
            alert("login successful");
            empty();
            praise=0;
            homepage();
            return;
            
        }
        else if(identity == email || pass == password){
            praise=0
            if(identity !== email){
                alert("please enter correct email");
                empty();
                return; 
            }
            if(pass !== password){
                alert("please enter correct password");
                empty();
                return; 
            }
            
        }
    })

    if(praise==1){
        alert("Create an account please");
        window.location.href="register.html"
    }

    
    empty();
      


}
function empty(){
    const inputs = document.querySelectorAll("#email , #password");

    inputs.forEach(input => {input.value = "";})
}