// console.log(100)
// for supplier name
var items=1
var final_amt=0

if(items>0){


var supplierb=document.createElement("div")
supplierb.setAttribute("id","supb")
var suppliern=document.createElement("div")
suppliern.setAttribute("id","supn")
suppliern.innerText="seller name"///////////
console.log(suppliern)
supplierb.append(suppliern)
document.querySelector("#main").append(supplierb)

// for  product info
var prob=document.createElement("div")
prob.setAttribute("id","probox")
var img_info_container=document.createElement("div")
img_info_container.setAttribute("id","imginfo")
var proimg=document.createElement("img")
proimg.setAttribute("id","proi")
proimg.src="https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
var proinfo=document.createElement("div")
proinfo.setAttribute("id","proin")

var d1=document.createElement("p")
d1.style.fontSize="18px"
d1.style.fontWeight="600"
d1.innerText="product name " /////// to learn how to set things inside box and do ... thing in end
var d2=document.createElement("div")
d2.style.display="flex"
var d21=document.createElement("p")
d21.innerText="In Stock P-1000"
d2.append(d21)
proinfo.append(d1,d2)
img_info_container.append(proimg,proinfo)
// console.log(proinfo)
// ------------------------------------------

var propriceb=document.createElement("div")
propriceb.setAttribute("id","price")
var propriceb1=document.createElement("div")/// in box 1
propriceb1.setAttribute("class","propin")
var proprice=document.createElement("p")
proprice.innerText="1150"//////////  after discount
var dolar3=document.createElement("p")
dolar3.innerText="$"
propriceb1.append(dolar3,proprice)

var propriceb2=document.createElement("div")////in box 2
propriceb2.setAttribute("class","propin")
propriceb2.style.color="grey"
propriceb2.style.fontSize="15px"
propriceb2.style.marginLeft="4px"

var dprice=document.createElement("del")
dprice.innerText="1200"
var dolar4=document.createElement("p")
dolar4.innerText="$"
propriceb2.append(dolar4,dprice)


propriceb.append(propriceb1,propriceb2)
// ---------------------------------------------
// var disprice=document.createElement("del")
// disprice.innerText="1300"////////////////// before discount
// ------------------------------------------------------
var proquantityb=document.createElement("div")
proquantityb.setAttribute("id","quantity")
var proquantity=document.createElement("div")
// ---------------------------------------------------------
// let count=2
var decspan = document.createElement("span");
decspan.setAttribute("class","decBtn");
decspan.innerText ="-"
var displayCount = document.createElement("span");
displayCount.setAttribute("class","displayCount");
displayCount.innerText = 2 /////////
var incSpan = document.createElement("span");
incSpan.setAttribute("class","incBtn");
incSpan.innerText = "+";

incSpan.addEventListener("click",inc);


function inc(){
    let count = displayCount.innerText;
    count++;
    displayCount.innerText = count;
    let total = +count * Number(proprice.innerText)
    pronprice.innerText = total;
    // -----------------------------------
    let subtotal = amt.innerText;
    amt.innerText = subtotal + total;//////////////////////
    
}
decspan.addEventListener("click",dec)
function dec(){
    let count = displayCount.innerText;
    count--;
    displayCount.innerText = count;
    if(count<=0){
        displayCount.innerText="1"
    }
    pronprice.innerText = +count * Number(proprice.innerText);
}


// --------------------------------------------------------

proquantityb.append(decspan,displayCount,incSpan );

var pronpriceb=document.createElement("div")
pronpriceb.setAttribute("id","netprice")
var pronprice=document.createElement("p")
pronprice.innerText=Number(proprice.innerText*displayCount.innerText)////// amt *qty
var dolar2=document.createElement("p")
dolar2.innerText="$"
pronpriceb.append(dolar2,pronprice)
final_amt+=Number(pronprice.innerText)
////////////////////// local storage area for famt

var op=document.createElement("div")
op.setAttribute("id","operation")
del=document.createElement("p")
del.innerText="delete"
del.setAttribute("class","edit")
ed=document.createElement("p")
ed.innerText=""
fav=document.createElement("p")
fav.innerText=""


// del.addEventListener("click",delfun)
op.append(ed,del,fav)

// var pronprice=document.createElement("div") to sudty
prob.append(img_info_container,propriceb,proquantityb, pronpriceb,op)
document.querySelector("#main").append(prob)











var paycontainer=document.createElement("div")//main box
paycontainer.setAttribute("id","container2")
var pay1=document.createElement("div")//sub box 1
pay1.setAttribute("id","p1")
var pay11=document.createElement("div")//sub box1 of sub box 1
pay11.setAttribute("id","p11")
var pay111=document.createElement("div")//45 day vala box
pay111.setAttribute("id","p111")
var payimg1=document.createElement("img")//45day vali img
payimg1.style.marginLeft="15px"
payimg1.src="https://css.gbtcdn.com/imagecache/gbw/img/site/money_back@.png"

var data1=document.createElement("div")
data1.setAttribute("class","dt1")
var head1=document.createElement("h4")
head1.innerText="45 days"
head1.style.margin="auto"
head1.style.marginLeft="10px"
// data1.append(head1)
var pa1=document.createElement("p")
pa1.innerText="Money Back Guarantee"
pa1.style.margin="auto"
pa1.style.marginLeft="10px"
data1.append(head1,pa1)
head1.setAttribute("class","hd1")
pay111.append(payimg1,data1)
var pay112=document.createElement("div")//365 day wala box
pay112.setAttribute("id","p112")
var payimg2=document.createElement("img")//365 vali image
payimg2.style.marginLeft="15px"
payimg2.src="https://css.gbtcdn.com/imagecache/gbw/img/site/repair@.png"

var data2=document.createElement("div")
data2.setAttribute("class","dt1")
var head2=document.createElement("h4")
head2.innerText="365 days"
head2.style.margin="auto"
head2.style.marginLeft="10px"
var pa2=document.createElement("p")
pa2.innerText="Free Repair Warranty"
pa2.style.margin="auto"
pa2.style.marginLeft="10px"
data2.append(head2,pa2)
head2.setAttribute("class","hd1")
pay112.append(payimg2,data2)

pay11.append(pay111,pay112)
var pay12=document.createElement("div")//sub box2 of sub box 1
pay12.setAttribute("id","p12")
var tot=document.createElement("h3")
tot.innerText="Total"
tot.style.marginLeft="550px"
tot.style.marginTop="65px"

var amt=document.createElement("h1")
amt.innerText=final_amt// total amount aega idhar
amt.setAttribute("class","amt1")
// amt.style.marginLeft="55px"
amt.style.marginTop="55px"
var sign=document.createElement("h1")
sign.innerText="$"
sign.style.marginLeft="55px"
sign.style.marginTop="55px"
sign.style.fontWeight="700"
sign.setAttribute("class","amt1")
pay12.append(tot,sign,amt)
pay1.append(pay11,pay12)




var pay2=document.createElement("div")//sub box 2
pay2.setAttribute("id","p2")
var cns=document.createElement("a")
cns.innerText="Continue Shopping >"
cns.style.color="grey"
cns.href="hasfsld"
// cns.style.textDecoration="dashed"
// cns.margin="auto"
cns.style.marginLeft="20px"

var pm1=document.createElement("img")
pm1.src="https://css.gbtcdn.com/imagecache/gbw/img/buynow_en.93a4b6e.png"
pm1.style.height="40px"
pm1.style.marginLeft="510px"

var or1=document.createElement("p")
or1.setAttribute("class","or")
or1.innerText="OR"

var pm2=document.createElement("img")
pm2.src="https://css.gbtcdn.com/imagecache/gbw/img/paypal_credit_en.10b3871.png"
pm2.style.height="60px"

var or2=document.createElement("p")
or2.setAttribute("class","or")
or2.innerText="OR"

var pm3=document.createElement("button")
pm3.setAttribute("id","cho")
pm3.innerText="Check Out"

pay2.append(cns,pm1,or1,pm2,or2,pm3)

paycontainer.append(pay1,pay2)
document.querySelector("#main").append(paycontainer)
console.log(paycontainer)


}
if(items==0)
    {
  var empt=document.createElement("div")
  empt.setAttribute("id","empty")
  var empimg=document.createElement("img")
  empimg.src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
  empimg.setAttribute("id","cartimg")
  var notice=document.createElement("p")
  notice.innerText="There are no items in the shopping cart"
  notice.setAttribute("id","noti")
  var embut=document.createElement("button")
  embut.innerText="Go Shopping"
  embut.setAttribute("id","emtbut")
  empt.append(empimg,notice,embut)
  document.querySelector("#main").append(empt)
}




del.addEventListener("click",delfun)
// -----------------------------------------------------------------------------------
function delfun(){

}



pm3.addEventListener("click",movetopay)

function movetopay(){
    location.href="address.html";
}


