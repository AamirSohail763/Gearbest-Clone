var obj = JSON.parse(localStorage.getItem('CurrProdDesc')) || {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/d30e89bfb043.jpg",
      name: "Pro Global Bands IP68&IPIP69K 8GB 128GB Helio G95 NFC Android 11 8500mAh 6.39 inch 48MP Round Quad Camera Octa Core 4G Smartphone",
      mrp: "279",
      discount: "30",
      store: "Nimble Tech Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/d30e89bfb043.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/d429b1e24825.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/ba5461996f94.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/fd0d575f9ccc.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/e196c195c7a2.jpg'
        }
      ]
    }

var arr = [];
arr.push(obj);

if (arr.length>1){
       arr.shift();
}

arr.forEach(function(el){
      
      var img = document.querySelector('#largeImg');
      img.setAttribute('src',el.img)
      
      // img.setAttribute('scr',el.img)
      // console.log(img)
      var nam =  document.querySelector('#col2>h3');
      nam.innerHTML = el.name;
      var mrp = document.querySelector("#acp");
      mrp.innerHTML = '$'+el.mrp + ".00";
      
      var x = +el.mrp/((100-(+el.discount))/100);
      // console.log(x);
      
      let strikeoff = document.querySelector('#strike');
      strikeoff.innerHTML = "$"+Math.ceil(x)+".00";
      
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
      if (x<5){
            x++;
      }
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
      window.location.reload();
      arr['0']['tp'] = tp.innerHTML;
      cartinfo.push(arr);
      localStorage.setItem('cart',JSON.stringify(cartinfo))
})

// Buy now even Listener 

var buyNow = document.querySelector('#buyNow');

buyNow.addEventListener('click',function(){
      arr['0']['tp'] = tp.innerHTML;
      cartinfo.push(arr);
      localStorage.setItem('AddToCart',JSON.stringify(cartinfo))
      window.location.href = "" // cart page link;
})

// localStorage.setItem('CurrProdDesc',JSON.stringify(arr))