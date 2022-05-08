let currAccount = JSON.parse(localStorage.getItem("currAccount"));

var addressArr=JSON.parse(localStorage.getItem("addressLS")) || [];

var fullname=document.querySelector(".name")
//var lname=document.querySelector("#p2")
//var phone=document.querySelector("#pn");
//var email=document.querySelector("#em")
var city=document.querySelector(".town")
var state=document.querySelector(".state");
//var pin=document.querySelector("#pin");
var country=document.querySelector(".country");
var address=document.querySelector(".add");

var fullR=document.querySelector(".nameR")
var cityR=document.querySelector(".townR")
var stateR=document.querySelector(".stateR");
var countryR=document.querySelector(".countryR");
var addressR=document.querySelector(".addR");



displayUser();

function displayUser(){

    addressArr.forEach(function(elem){

    var fullN = elem.fname+" "+elem.lname;

    fullname.innerHTML=fullN
    city.innerHTML=elem.city
    state.innerHTML=elem.country
    country.innerHTML=elem.province
    address.innerHTML=elem.add1

    fullR.innerHTML=elem.fname;
    cityR.innerHTML= elem.city
    stateR.innerHTML= elem.country
    countryR.innerHTML= elem.province
    addressR.innerHTML= elem.add1



    })
}




var a=10;



var final=document.querySelector("#bt1").addEventListener("click",finalsub)

function finalsub(){

    let input1=document.querySelector("#inp1").value;
    let input2=document.querySelector("#inp2").value;
    let input3=document.querySelector("#inp3").value;
    let sel=document.querySelector("#sele").value;
    console.log(input1)

    if(input1.length ==12 && input2.length==3  && input3.length>1 && sel!="exp"  ){
        localStorage.removeItem("cart");
        alert("Payment successfull");
        console.log(input1)
        location.href="../index.html";

    }

    else{
        
        alert("please fill your credentials carefully")

    }
    // location.reload()
}


let subTot = document.querySelector(".totAmt");
let payAmt = document.querySelector(".payAmt");
let subTotal = 0;
products = currAccount.orders;

products.forEach(function(product){
    afterDis = Number(product.mrp) * (100 - Number(product.discount)) /100;
    total = afterDis * product.tp;
    subTotal += total;
})

subTot.innerText = Number(subTotal.toFixed(2)) +3;
payAmt.innerText = Number(subTotal.toFixed(2)) + 3;