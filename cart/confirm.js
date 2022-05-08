var addressArr=JSON.parse(localStorage.getItem("addressLS")) || [];

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

    addressArr.forEach(function(elem){

        fname.innerHTML=elem.fname
        lname.innerHTML=elem.lname
        phone.innerHTML=elem.phoneNo
        email.innerHTML=elem.email
        city.innerHTML=elem.city
        pin.innerHTML=elem.posCode
        state.innerHTML=elem.country
        country.innerHTML=elem.province
        address.innerHTML=elem.add1


    })

}


var btn1=document.querySelector(".bt1").addEventListener("click",toaddform)

function toaddform(){
      location.href="address.html"
}

var btn2=document.querySelector(".bt2").addEventListener("click",toaddform2)

function toaddform2(){
     location.href="payment.html"
}