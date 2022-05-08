var obj = JSON.parse(localStorage.getItem('CurrProdDesc')) ;

    userdata = JSON.parse(localStorage.getItem("currAccount"));
if(!userdata){
  window.location.href = "../index.html";
}

var arr = [];
arr.push(obj);

arr.forEach(function(el){
      
      var img = document.querySelector('#largeImg');
      img.setAttribute('src',el.img)
      
      // img.setAttribute('scr',el.img)
      // console.log(img)
      var nam =  document.querySelector('#col2>h3');
      nam.innerHTML = el.name;
      var mrp = document.querySelector("#acp");
      mrp.innerHTML = '$'+(el.mrp*(100-(+el.discount))/100).toFixed(2);
      // console.log(x);
      
      let strikeoff = document.querySelector('#strike');
      strikeoff.innerHTML = "$"+el.mrp;
      
      let discount = document.querySelector('#dis');
      discount.innerHTML = el.discount+"% OFF"
      
      var store = document.querySelector('#store');
      store.innerHTML = el.store;
      
      el.smallImg.forEach(function(el){
            var img1 = document.querySelector('#img1');
            img1.setAttribute('src',el.img1)
            
            var img2 = document.querySelector('#img2');
            img2.setAttribute('src',el.img2)
            
            var img3 = document.querySelector('#img3');
            img3.setAttribute('src',el.img3)
            
            var img4 = document.querySelector('#img4');
            img4.setAttribute('src',el.img4)
            
            var img5 = document.querySelector('#img5');
            img5.setAttribute('src',el.img5)
            
            // console.log(el.img5)
      })
})


// QTY increment decrement 

var inc = document.querySelector('#QTY :nth-child(4)')
var dec = document.querySelector('#QTY :nth-child(2)')
var tp = document.querySelector('#QTY :nth-child(3)');
// console.log(dec)

inc.addEventListener('click',function(){
      var x = +tp.innerHTML;
      x++;
      tp.innerHTML = x;
      // console.log(tp)
})

dec.addEventListener('click',function(){
      // var tp = document.querySelector('#QTY :nth-child(3)');
      var x = +tp.innerHTML;
      if (x>1){
            x--;
      }
      // console.log(x)
      tp.innerHTML = x;
})


// cart item count 


//Add to cart event listener

var cartinfo = JSON.parse(localStorage.getItem('cart')) || [];
var atc = document.querySelector('#atc');

var count = document.querySelector('#count');
count.innerHTML = cartinfo.length;

atc.addEventListener('click',function(){

      var n = false;
      for (var i = 0; i<cartinfo.length;i++){
            if (cartinfo[i].img===arr[0].img && cartinfo[i].mrp==arr[0].mrp){
                  n = true;
                  appendTp(i);
                  alert("Item already add");

      if (n==false){
            window.location.reload();
            obj.tp = tp.innerHTML;
            cartinfo.push(obj);
            localStorage.setItem('cart',JSON.stringify(cartinfo))
      }
})

function appendTp(i){
      obj.tp = +tp.innerHTML + (+cartinfo[i].tp)
      console.log(obj.tp)
      cartinfo.splice(i,1)
      cartinfo.push(obj);
      localStorage.setItem('cart',JSON.stringify(cartinfo))
      
}
// Buy now even Listener 

var buyNow = document.querySelector('#buyNow');

buyNow.addEventListener('click',function(){
      arr[0].tp = tp.innerHTML;
      localStorage.setItem('Cart',JSON.stringify(arr))
      window.location.href = "../cart/confirm.html" // cart page link;
})


// linking pages in nav bar

headcartSpan = document.querySelector("#headcartSpan");

headcartSpan.addEventListener('click',function(){
      window.location.href = "../cart/cart.html";
})


// localStorage.removeItem("cart")


let userdata = JSON.parse(localStorage.getItem("account"));

var signinStatus = document.getElementById("headsignInSpan");
if (userdata != null) {
  signinStatus.innerHTML = userdata[0].email[0].toUpperCase();
  signinStatus.style.background = "teal";
  signinStatus.style.color = 'white';
  signinStatus.style.fontWeight = '700';
  signinStatus.style.borderRadius = "50%";
  signinStatus.style.padding = '0 10px';
}

