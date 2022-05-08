//  Image change

var largeImg = document.querySelector('#largeImg');
var smallImg = document.querySelectorAll('.smallImg');

smallImg[0].addEventListener('click',function(){
      largeImg.src = smallImg[0].src;
})

smallImg[1].addEventListener('click',function(){
      largeImg.src = smallImg[1].src;
})

smallImg[2].addEventListener('click',function(){
      largeImg.src = smallImg[2].src;
})

smallImg[3].addEventListener('click',function(){
      largeImg.src = smallImg[3].src;
})

smallImg[4].addEventListener('click',function(){
      largeImg.src = smallImg[4].src;
})


var content = document.querySelector('#container');

var arrProduct = [
      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img-v5/3aef13f28d2e.jpg',
            name : "Global Version MI 11 Ultra 6.3 inch Smartphone 12Gb Cell Phone Unlocked 2022 5G Mobile Phones Cheap Android Xaiomi Telephone Xiomi - Gold 16G 512GB",
            mrp : "257",
            dis : `55%
            OFF`,
            discount : '55',
            store: "Nimble Tech Store",
            tp : '1',    
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/1ce06b8b92c8.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/ba153a4a4d74.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/6082839d9d1c.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/890f3500526e.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/bf3f69aeaa7b.jpg'
                  }
                ],
      },

      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_img-v1/b27ea3c1a199.jpg',
            name : 'Mobile Phone Nova8 Pro 12GB+512GB 7.1Inch Face ID 6800mAh Dual SIM Android11 Cellphone unlocked 4G 5G 32MP+64MP Smartphones - Black 16GB 512GB',
            mrp : '283',
            dis : `60%
            OFF`,
            tp : '1',    
            discount : '60',
            store: "Top Rate Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_img_big-v1/b27ea3c1a199.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_img_big-v1/cf147143b587.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_img_big-v1/6a105cd2421c.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_img_big-v1/66ebea0f343d.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_img_big-v1/ec8e88580f17.jpg'
                  }
                ],
      },


      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img-v1/bbf851606779.jpg',
            name : "2022 New Original 5G Smartphone 7.3 Inch MIX4 16GB+1TB 7300mAh 72MP Camera Unlock Mobile Phones Celular Cellphone Qualcomm 888+ - White 8GB 256GB",
            mrp : '228',
            dis : `50%
            OFF`,
            discount : '50',
            tp : '1',
            store: "Nimble Tech Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img_big-v1/bbf851606779.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img_big-v1/895be6b27067.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img_big-v1/f97d8cabc2c7.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img_big-v1/ad3742e24a36.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16488/goods_img_big-v1/3c02cce7a885.jpg'
                  }
                ],
      },

      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img-v1/b77ce6885375.jpg',
            name : 'New M4PRO 6.7 Inch Global Version 256GB/512GB 6800mAh 16MP+32MP Smartphone Fingerprint Face ID Deca Core Mobile Phones MTK6889 - Yellow 12 512GB',
            mrp : "290",
            dis : `55%
            OFF`,
            tp : '1',
            discount : '55',
            store: "Top Rate Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/b77ce6885375.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/9ed5740cc84c.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/f9a7fcb05369.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/736afcc9917e.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/280bdd7ea27f.jpg'
                  }
                ],
      },

      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_img-v1/e0a8882343fc.jpg',
            name : 'New S21/S22 Ultra 7.3 HD Full screen android smartphone 16GB+512GB Mobile phone 5G cellphone 24+48MP HD camera Fashion Smart phone - Black 16GB 512GB',
            mrp : '345',
            dis : `62%
            OFF`,
            tp : '1',
            discount : '62',
            store: "Nimble Tech Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_img_big-v3/e0a8882343fc.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_img_big-v3/c4610bc14f5b.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_img_big-v3/0b082bf8d8a6.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_img_big-v3/ae6b45403a32.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16504/goods_img_big-v3/4530049801e5.jpg'
                  }
                ],
      },

]

arrProduct.forEach(function(el,i){
      var div = document.createElement('div');
      div.setAttribute('class',"details");
      div.style.position= "relative";
      
      var img = document.createElement('img');
      img.setAttribute('src',el.img);
      img.style.width = "210px";
      img.style.marginTop = '20px';
      img.style.marginBottom = '20px'
      
      var nameDet = document.createElement('div');

      var store = document.createElement('div');
      store.style.marginLeft = "10px";
      store.style.marginRight = "10px";
      store.style.marginTop = "20px";

      var simg = document.createElement('img');
      simg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiepVzQCdpRUj8ze6TI2fndEAd-BOap4BnQ&usqp=CAU')
      simg.style.width = "24px";
      simg.style.height = "24px";

      var cart = document.createElement('img');
      cart.setAttribute('src','https://uidesign.gbtcdn.com/GB/image/2019/20190417_9244/cart_default.png');
      cart.style.width = "26px";
      cart.style.height = "26px";
      cart.style.marginLeft = "160px"

      cart.addEventListener('click',function(){
            addCart(el);
      })

      store.append(simg,cart)

      
      var p = document.createElement('p');
      nameDet.append(p);
      p.innerText = el.name;
      
      var price = document.createElement('p');
      price.innerText = "$"+el.mrp+".00";
      price.style.color = "red";
      price.style.fontSize = '18px'
      price.style.marginLeft = "10px"
      
      
      var strikeoff = document.createElement('p');
      strikeoff.innerText = "$"+(el.mrp*(100-(+el.discount))/100).toFixed(2);
      strikeoff.style.color = 'gray';
      strikeoff.style.fontSize = "12px";
      strikeoff.style.marginLeft = "10px";
      strikeoff.style.textDecoration = "line-through";
      
      var discount = document.createElement('p');
      discount.innerText = el.dis;
      discount.style.background = "red";
      discount.style.color = "white";
      discount.style.borderRadius = "50%";
      discount.style.width = "50px";
      discount.style.height = "50px";
      discount.style.display = "flex";
      discount.style.justifyContent = "center";
      discount.style.alignItems = "center";
      discount.style.position = "absolute";
      discount.style.top = "10px";
      discount.style.right = "10px"

      div.append(img,nameDet,price,strikeoff,store,discount);

      content.append(div);

      img.addEventListener('click',function(){
            des(el);
      })
})

function des(el){
      localStorage.setItem('CurrProdDesc',JSON.stringify(el))
      window.location.href = 'description.html';
}

// suggestion products

var arrSuggestion = [
      {
            
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img-v1/b77ce6885375.jpg',
            name : 'New M4PRO 6.7 Inch Global Version 256GB/512GB 6800mAh 16MP+32MP Smartphone Fingerprint Face ID Deca Core Mobile Phones MTK6889 - Yellow 12 512GB',
            mrp : "290",
            dis : `55%
            OFF`,
            discount : '55',
            store: "Top Rate Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/b77ce6885375.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/9ed5740cc84c.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/f9a7fcb05369.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/736afcc9917e.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16485/goods_img_big-v1/280bdd7ea27f.jpg'
                  }
                ],
                tp : '1',    
      },

      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/43afddbd8ac0.jpg',
            name : 'Blackview BV8800 Global Bands 8GB 128GB Helio G96 IP68 IP69K Waterproof 8380mAh 50MP 20MP Night Vision Camera 6.58 inch 90Hz Rate 4G Smartphone - Orange',
            mrp : '459',
            dis : `39%
            OFF`,
            discount : '39',
            store: "RUNFENGTE Official Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/43afddbd8ac0.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/2b81213c39b2.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/ceced3aa3e7c.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/57e9602de747.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16455/goods_img_big-v1/9f6a7c2c1ea7.jpg'
                  }
                ],
            tp : '1',    
      },

      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_img-v1/47a4fb9ff46f.jpg',
            name : 'Global Version W&O S21 Ultra Smartphone 7.3 HD Inch Android 10.0 Mobile Phones 16GB+512GB Cellphones Celular 5G Unlock Smart Phone - green 12GB 256GB China',
            mrp : '380',
            dis : `58%
            OFF`,
            discount : '58',
            store: "Top Rate Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_img-v1/47a4fb9ff46f.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_img_big-v1/63f9cd33f748.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_img_big-v1/b650e835ec5b.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_img_big-v1/7b06bfae0717.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_img_big-v1/b3ff91bbdf39.jpg',
                  }
                ],
            tp : '1',
      },

      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/item/6900783172733300736/16474/goods_img-v1/0914f42cf6ba.jpg',
            name : 'Global Version Xiaomi Redmi Note 10 Pro Smartphone 108MP Camera Snapdragon 732G 120Hz AMOLED Display 33W Fast Charging NFC - Bronze 8GB 128GB France',
            mrp : '389',
            dis : `31%
            OFF`,
            discount : '31',
            store: "Top Rate Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900783172733300736/16474/goods_img-v1/0914f42cf6ba.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16468/goods_img_big-v3/0a62ffa71dca.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16468/goods_img_big-v3/cbf53ee8122e.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16468/goods_img_big-v3/8a2eb0f87d6a.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16468/goods_img_big-v3/a2a3b9348010.jpg'
                  }
                ],
            tp : '1',
      },

      {
            img : 'https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16476/goods_img-v3/262a53fef539.jpg',
            name : 'Global Version Blackview A95 8GB RAM 128GB ROM Octa Core 6.5inch Display Smartphone MTK Helio P70 4380mAh Battery - Add BT EarphoneGlass Blue China',
            mrp : '258',
            dis : `11%
            OFF`,
            discount : '11',
            store: "RUNFENGTE Official Store",
            smallImg : [
                  {
                        img1 : 'https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16476/goods_img-v3/262a53fef539.jpg',
                        img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16462/goods_img_big-v2/503b1d945950.jpg',
                        img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16462/goods_img_big-v2/36d0bc4b276f.jpg',
                        img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16462/goods_img_big-v2/9547734f43ae.jpg',
                        img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16462/goods_img_big-v2/7ca87c8182d7.jpg'
                  }
                ],
            
      }
]
var suggestion = document.querySelector('#suggestion')
arrSuggestion.forEach(function(el){
      var div = document.createElement('div');
      div.setAttribute('class',"details");
      div.style.position= "relative";
      
      var img = document.createElement('img');
      img.setAttribute('src',el.img);
      img.style.width = "210px";
      img.style.marginTop = '20px';
      img.style.marginBottom = '20px'
      
      var nameDet = document.createElement('div');

      var store = document.createElement('div');
      store.style.marginLeft = "10px";
      store.style.marginRight = "10px";
      store.style.marginTop = "20px";

      var simg = document.createElement('img');
      simg.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOiepVzQCdpRUj8ze6TI2fndEAd-BOap4BnQ&usqp=CAU')
      simg.style.width = "24px";
      simg.style.height = "24px";

      var cart = document.createElement('img');
      cart.setAttribute('src','https://uidesign.gbtcdn.com/GB/image/2019/20190417_9244/cart_default.png');

      cart.addEventListener('click',function(){
            addCart(el);
      })

      cart.style.width = "26px";
      cart.style.height = "26px";
      cart.style.marginLeft = "160px"

      store.append(simg,cart)

      
      var p = document.createElement('p');
      nameDet.append(p);
      p.innerText = el.name;
      
      var price = document.createElement('p');
      price.innerText = '$'+el.mrp+'.00';
      price.style.color = "red";
      price.style.fontSize = '18px'
      price.style.marginLeft = "10px"
      
      
      var strikeoff = document.createElement('p');
      strikeoff.innerText = "$"+(el.mrp*(100-(+el.discount))/100).toFixed(2);
      strikeoff.style.color = 'gray';
      strikeoff.style.fontSize = "12px";
      strikeoff.style.marginLeft = "10px";
      strikeoff.style.textDecoration = "line-through";
      
      var discount = document.createElement('p');
      discount.innerText = el.dis;
      discount.style.background = "red";
      discount.style.color = "white";
      discount.style.borderRadius = "50%";
      discount.style.width = "50px";
      discount.style.height = "50px";
      discount.style.display = "flex";
      discount.style.justifyContent = "center";
      discount.style.alignItems = "center";
      discount.style.position = "absolute";
      discount.style.top = "10px";
      discount.style.right = "10px"

      div.append(img,nameDet,price,strikeoff,store,discount);

      suggestion.append(div);

      img.addEventListener('click',function(){
            des(el);
      })
})
// console.log(arrProduct)
var acc = JSON.parse(localStorage.getItem('cart')) || []
// localStorage.removeItem('cart')

function addCart(obj){
      flag = false;
      acc.forEach(function(el){
            if(el.name == obj.name){
                  flag = true;
            }
      });

      if(!flag){
            acc.push(obj);
            count.innerHTML = acc.length;
            localStorage.setItem("cart",JSON.stringify(acc));

      }else{
            alert("Product already Exists");
      }



      // var n = 0;
      // for (var i = 0; i<acc.length; i++){
      //       if (el.img==acc[i].img){
      //             n++;
      //             alert('Product alreay Excits');
      //             // break;
      //       }
      // }
      // // console.log(n)
      // if (n==0){
      //       console.log(n)
      //       acc.push(el);
      //       localStorage.setItem('cart',JSON.stringify(acc))
      //       window.location.reload();
      // }
      // console.log(acc)
      
}



// link to cart 

document.querySelector('#headcartSpan').addEventListener('click',function(){
      window.location.href = "../cart/cart.html"
})