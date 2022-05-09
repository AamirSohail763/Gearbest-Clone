var currAccount=JSON.parse(localStorage.getItem("currAccount"));

if(!currAccount){
    window.location.href = "../../signup/signup.html"; // made changes for github repo linking issues
}


var fname=document.querySelector("#p1")
var lname=document.querySelector("#p2")
var phone=document.querySelector("#pn");
var email=document.querySelector("#em")
var city=document.querySelector("#city")
var state=document.querySelector("#state");
var pin=document.querySelector("#pin");
var country=document.querySelector("#country");
var address=document.querySelector("#address");
displayData();

function displayData(){

    let elem = currAccount.address;

        fname.innerHTML=elem.fname
        lname.innerHTML=elem.lname
        phone.innerHTML=elem.phoneNo
        email.innerHTML=elem.email
        city.innerHTML=elem.city
        pin.innerHTML=elem.posCode
        state.innerHTML=elem.country
        country.innerHTML=elem.province
        address.innerHTML=elem.add1

}

var btn1=document.querySelector(".bt1").addEventListener("click",toaddform)

function toaddform(){
    location.href="address.html"
}

function displayAmt(){

}

var btn2=document.querySelector(".bt2").addEventListener("click",toaddform2)

function toaddform2(){
     location.href="payment.html";
}
let subTot = document.querySelector(".subtotal");
let shipCharge = document.querySelector(".shippingCharge");
let subTotal = 0;
let finalAmt = document.querySelector(".finalAmt");

products = currAccount.orders;
console.log(products);

products.forEach(function(product){
    let tp = 1
    if(product.tp){
         tp = product.tp;
    }
    console.log(product.tp,product.discount);
    let afterDis = Number(product.mrp) * (100 - Number(product.discount)) / 100;
    let total = afterDis * tp;
    subTotal += total;
})

subTot.innerText = subTotal.toFixed(2);

finalAmt.innerText = Number(subTotal.toFixed(2)) + 3;


