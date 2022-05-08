// var grid= document.querySelector("#oyaji");

var allarray=[
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16423/goods_thumb_220-v1/a58bc19fa61a.jpg",
        name: "Bluedio BT5 wireless headphone bluetooth in-ear wired...",
        price: "$29.00",
        strikeoff:" $139.99",
        col:"Coupon left - 100",
        ccd:"C81B96ED4FD53000",
        off:"25%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_thumb_220-v1/fe60ecdd364a.jpg",
        name: "XGODY Celular Smartphone Android 8.1 2GB 16GB 5.5...",
        price: "$79.00",
        strikeoff:" $209.99",
        col:"Coupon left - 150",
        ccd:"C81B96ED4FD53000",
        off:"62%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16415/goods_thumb_220-v1/762ac7ef9e0f.jpg",
        name: "New LS-MIN Drone 4K 1080P HD Wide Angle Camera WiFi Fp...",
        price: "$38.00",
        strikeoff:" $99.99",
        col:"Coupon left - 100",
        ccd:"C81B96ED4FD53000",
        off:"25%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16399/goods_thumb_220-v1/0e6f66829086.jpg",
        name: "6pc/3pc Dental Mirror Stainless Steel Dental Dentist Prepared...",
        price: "$29.00",
        strikeoff:" $139.99",
        col:"Coupon left - 150",
        ccd:"C81B96ED4FD53000",
        off:"55%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16396/goods_thumb_220-v1/33cbde69a73d.jpg",
        name: "Nose Hair Trimming Tweezers Nose Trimmer Tweezer stainless...",
        price: "$5.13",
        strikeoff:" $6.43",
        col:"Coupon left - 100",
        ccd:"C81B96ED4FD53000",
        off:"20%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16424/goods_thumb_220-v1/f6568ec02a8f.jpg",
        name: "L700PRO L700 PRO 5G WIFI FPV Foldable GPS RC Drone...",
        price: "$87.88",
        strikeoff:" $102.99",
        col:"Coupon left - 500",
        ccd:"C81B96ED4FD53000",
        off:"14%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16396/goods_thumb_220-v1/6ba7635bf5ba.jpg",
        name: "Nose Hair Trimmer Nose Hair Cutter For Men Nasal Wool wiredless...",
        price: "$5.99",
        strikeoff:" $7.20",
        col:"Coupon left - 20",
        ccd:"C81B96ED4FD53000",
        off:"17%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16396/goods_thumb_220-v2/26fabb8ff742.jpg",
        name: "SOEYE Men Shaver Beard Trimmer Electric shaver for men...",
        price: "$23.99",
        strikeoff:" $43.10",
        col:"Coupon left - 10",
        ccd:"C81B96ED4FD53000",
        off:"45%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16423/goods_thumb_220-v2/9030df4f9bdc.jpg",
        name: "YC A2 Gaming Headset Studio V5.1 Wireless Earphone Stereo...",
        price: "$43.99",
        strikeoff:" $79.90",
        col:"Coupon left - 15",
        ccd:"C81B96ED4FD53000",
        off:"30%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16417/goods_thumb_220-v1/d4845605f8ec.jpg",
        name: "F9-43 Wireless Earphones 9D Stereo 5.0 TWS woth Wireless...",
        price: "$19.99",
        strikeoff:" $35.90",
        col:"Coupon left - 555",
        ccd:"C81B96ED4FD53000",
        off:"45%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16419/goods_thumb_220-v1/c33785c9c2de.jpg",
        name: "Full HD 1080P Video Recorder Mini waterproof Camera Watch...",
        price: "$65.99",
        strikeoff:" $81.02",
        col:"Coupon left - 45",
        ccd:"C81B96ED4FD53000",
        off:"20%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/store/6771730315905003520/16456/goods_thumb_220-v2/68183933872a.jpg",
        name: "REDRAGON Fizz K617 RGB USB Mini Mechanical total 100%...",
        price: "$59.99",
        strikeoff:" $79.20",
        col:"Coupon left - 65",
        ccd:"C81B96ED4FD53000",
        off:"25%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16388/goods_thumb_220-v2/d09224ebc597.jpg",
        name: "Teclast M40 10.1inch Tablet PC with 5G network connectvity...",
        price: "$269.99",
        strikeoff:" $349.20",
        col:"Coupon left - 165",
        ccd:"C81B96ED4FD53000",
        off:"23%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16415/goods_thumb_220-v1/f587817dc14e.jpg",
        name: "LIGE New Smart watch Men Heart rate Blood pressure Full...",
        price: "$39.99",
        strikeoff:" $79.99",
        col:"Coupon left - 100",
        ccd:"C81B96ED4FD53000",
        off:"46%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6771730315905003520/16415/goods_thumb_220-v1/a8e076caa517.jpg",
        name: "UMIDIGI BISON X10S X10G Smartphone IP68/IP69K ...",
        price: "$139.99",
        strikeoff:" $239.99",
        col:"Coupon left - 300",
        ccd:"C81B96ED4FD53000",
        off:"42%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16464/goods_thumb_220-v1/fe60ecdd364a.jpg",
        name: "XGODY Celular Smartphone Android 8.1 2GB 16GB 5.5...",
        price: "$79.29",
        strikeoff:" $209.99",
        col:"Coupon left - 90",
        ccd:"C81B96ED4FD53000",
        off:"62%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16393/goods_thumb_220-v1/bee42170747c.jpg",
        name: "Solar Energy UV Toothbrush Disinfectant No need to Charge...",
        price: "$20.09",
        strikeoff:" $41.99",
        col:"Coupon left - 120",
        ccd:"C81B96ED4FD53000",
        off:"49%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16473/goods_thumb_220-v1/25618d995784.jpg",
        name: "New Global Version Cell Mobile Phones p50 pro 16G+768GB...",
        price: "$112.09",
        strikeoff:" $201.90",
        col:"Coupon left - 360",
        ccd:"C81B96ED4FD53000",
        off:"60%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16393/goods_thumb_220-v2/d3ac2a2bf1b8.jpg",
        name: "Rechargeable Mini Digital Hearing Aid Listen Sound wirelss...",
        price: "$28.09",
        strikeoff:" $42.90",
        col:"Coupon left - 460",
        ccd:"C81B96ED4FD53000",
        off:"32%"
    },
    {
        imgUrl:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16393/goods_thumb_220-v1/6c834d165823.jpg",
        name: "4PCS Acne Blackhead Comedone Black Spot Pimple...",
        price: "$3.45",
        strikeoff:" $5.16",
        col:"Coupon left - 500",
        ccd:"C81B96ED4FD53000",
        off:"32%"
    }





]

let curruser = JSON.parse(localStorage.getItem("currAccount"));
if(!curruser){
    window.location.href = "../index.html";
    alert("Please login to get access to the coupons");
}
let headsignInSpan = document.querySelector("#headsignInSpan");
userName = curruser.email.split("@")[0];
headsignInSpan.innerHTML = "<p>"+userName+"</p>";



allarray.map(function(elem){
    var divall = document.createElement("div");
    divall.setAttribute("id","allmight")


    var divone = document.createElement("div");
    divone.setAttribute("id","divprice");


     
    var name=document.createElement("h5");
    name.innerText=elem.name;

    var imag=document.createElement("img");
    imag.setAttribute("src",elem.imgUrl);
    imag.setAttribute("class","priceImg")

    var price=document.createElement("p");
    price.innerText=elem.price;//price
    price.setAttribute("class","para1") 

    var strkpr=document.createElement("p");
    strkpr.innerText=elem.strikeoff;//strike off price
    strkpr.setAttribute("class","para2")

    var offdiv=document.createElement("div");
    offdiv.setAttribute("id","divoff");//div for off percentage show
    var spanone=document.createElement("p")
    spanone.innerText=elem.off;
    spanone.style.fontWeight="bold"
    var spantwo=document.createElement("p");
    spantwo.innerText="off";
    offdiv.append(spanone,spantwo);

    divone.append(offdiv,imag,name,price,strkpr);

    var divtwo=document.createElement("div");
    divtwo.setAttribute("id","divcoupon");

    var coupon=document.createElement("p");
    coupon.innerText=elem.col;
    coupon.setAttribute("class","divCoupara1")

    var coucode=document.createElement("p");
    coucode.innerText=elem.ccd;

    divtwo.append(coupon,coucode)

    divall.append(divone,divtwo);

    document.querySelector("#oyaji").append(divall);
})

// page linking part of nav bar

signupBtn = document.querySelector("#signupBtn");

signupBtn.addEventListener("click",function(){
    window.location.href = "../signup/register.html";
})