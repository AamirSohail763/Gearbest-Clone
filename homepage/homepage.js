// Getting User details from local storage
userdata = JSON.parse(localStorage.getItem("account"))

var signinStatus = document.getElementById("headsignInSpan")
if(userdata!=null){
  signinStatus.innerHTML=userdata.email
  signinStatus.style.overflow="hidden"
}


let products = [
    {
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
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16426/goods_img_big-v1/98c2e7bd2c6e.jpg",
      name: "Original Xiaomi Mi 100W Wireless Charger 100W Max Vertical Air-cooled Stand Charging Support Fast Charger for Xiaomi MIX 4",
      mrp: "98.69",
      discount: "19",
      store: "Mi-Fans Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16426/goods_img_big-v1/98c2e7bd2c6e.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16426/goods_img_big-v1/5199766a900f.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16426/goods_img_big-v1/27cbb1746551.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16426/goods_img_big-v1/7e5a6dbe4056.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16426/goods_img_big-v1/c635d92dc561.jpg'
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16100/goods_img_big-v1/c4e631aa3c3a.jpg",
      name: "All-new Kindle Black version Now with a Built-in Front LightWi-Fi 8GB eBook e-ink screen 6-inch e-Book Readers",
      mrp: "130.79",
      discount: "10",
      store: "Top Rate Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16100/goods_img_big-v1/c4e631aa3c3a.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16100/goods_img_big-v1/92048e79186c.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16100/goods_img_big-v1/3b10b9b699b3.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16100/goods_img_big-v1/ff21e0463872.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16100/goods_img_big-v1/31849030efa5.jpg'
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15898/goods_img_big-v1/a5cf21d21e0e.jpg",
      name: "F10 Smart Watch Original Full touch screen Bluetooth SmartWatch Series 4 5 Waterproof Smart Bracelet PK B57 IWO8 for IPhone IOS",
      mrp: "26.91",
      discount: "20",
      store: "Top Rate Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15898/goods_img_big-v1/a5cf21d21e0e.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15898/goods_img_big-v1/3629f6bc5cb2.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15898/goods_img_big-v1/c1f61d2ea847.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15898/goods_img_big-v1/8f5722687403.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15898/goods_img_big-v1/8f42b88cb26e.jpg'
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16468/goods_img_big-v4/5dca1281addf.jpg",
      name: "New Ladies Smart Watch Sports Fitness Bracelet Bluetooth Call Music Alarm Clock Smart Bracelet Heart Rate Blood Pressure Monitoring",
      mrp: "83.98",
      discount: "58",
      store: "RUNFENGTE Official Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16468/goods_img_big-v4/5dca1281addf.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16468/goods_img_big-v4/fe2933854601.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16468/goods_img_big-v4/d92dc5b6dcc8.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16468/goods_img_big-v4/2e93be1d4ab4.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16468/goods_img_big-v4/2c0bb5b00972.jpg'
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6900399760277172224/16467/goods_img_big-v2/1a5607a11a54.jpg",
      name: "New Z26 1.54 Inch Bluetooth Call Bluetooth Music IP67 Sleep Monitoring Call Reminder Custom Dial Smart Bracelet",
      mrp: "79.98",
      discount: "63",
      store: "RUNFENGTE Official Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900399760277172224/16467/goods_img_big-v2/1a5607a11a54.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900399760277172224/16467/goods_img_big-v2/657f45969263.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900399760277172224/16467/goods_img_big-v2/d4ee28a50e28.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900399760277172224/16467/goods_img_big-v2/3a63d3a47cc9.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900399760277172224/16467/goods_img_big-v2/6d16caa0e8b4.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16487/goods_img_big-v1/f6616c4224f2.jpg",
      name: "RUNFENGTE Fully Upgrade 2022 New Original Smart Watch with Wireless Charging 2.5D Full Screen Smartwatch for Xiaomi Apple Watch",
      mrp: "71.98",
      discount: "53",
      store: "RUNFENGTE Official Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16487/goods_img_big-v1/f6616c4224f2.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16487/goods_img_big-v1/cab26d5b46be.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16487/goods_img_big-v1/c7cd367c1e9b.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16487/goods_img_big-v1/18d7a71b368d.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16487/goods_img_big-v1/9ee135d4f259.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16424/goods_img_big-v1/f207a2adc6b3.jpg",
      name: "XIAOMI Mijia 1S Robotic Vacuum Cleaner Intelligent Planning 5200mAh 2000Pa strong suction APP control LDS Laser navigation Dual SLAM fusion algorithm",
      mrp: "439",
      discount: "27",
      store: "MYROBOT Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16424/goods_img_big-v1/f207a2adc6b3.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16424/goods_img_big-v1/ba490cbe7773.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16424/goods_img_big-v1/26a0835eb163.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16424/goods_img_big-v1/9de8a6b07a09.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16424/goods_img_big-v1/2ce319af16a8.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16504/goods_img_big-v5/28537de0e928.jpg",
      name: "Dreame D9 Robot Vacuum Cleaner For Home 3000Pa Strong Suction Sweeping Washing Mopping APP Control Smart Planned Home Cleaner",
      mrp: "499",
      discount: "43",
      store: "MYROBOT Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16504/goods_img_big-v5/28537de0e928.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16418/goods_img_big-v5/3c7093809e87.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16418/goods_img_big-v5/48f275d1f1e6.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16418/goods_img_big-v5/696ac36e1812.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6880475736935952384/16418/goods_img_big-v5/e07e87ad0da8.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16509/goods_img_big-v1/8f3001a9c506.jpg",
      name: "Lenovo TS33 Wireless Bluetooth 5.0 Speaker 360 Home Movie Surround Sound Bar Wired Audio Speaker For Desk Computer Subwoofer",
      mrp: "87",
      discount: "50",
      store: "GGSHM Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16509/goods_img_big-v1/8f3001a9c506.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16509/goods_img_big-v1/8c20b92f36d5.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16509/goods_img_big-v1/40b06643df1f.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16509/goods_img_big-v1/606c7b52bba0.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16509/goods_img_big-v1/8d7f06052b04.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/6233d35f6f8a.jpg",
      name: "Global Version MI 11 Ultra 6.3 inch Smartphone 12Gb Cell Phone Unlocked 2022 5G Mobile Phones Cheap Android Xaiomi Telephone Xiomi",
      mrp: "206.50",
      discount: "55",
      store: "GGSHM Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/1ce06b8b92c8.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/6233d35f6f8a.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/ba153a4a4d74.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/6082839d9d1c.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16499/goods_img_big-v5/890f3500526e.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16475/goods_img_big-v1/45c793dd67d8.jpg",
      name: "Zacro High Definition Monocular Telescope 30X25 Waterproof Mini Portable Military Zoom 10X Scope For Travel Hunting",
      mrp: "29.99",
      discount: "47",
      store: "GGSHM Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16475/goods_img_big-v1/45c793dd67d8.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16475/goods_img_big-v1/96d8568833ab.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16475/goods_img_big-v1/2d4f6876f681.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16475/goods_img_big-v1/44cb30e2410c.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6883820374342168576/16475/goods_img_big-v1/cc0297af96cf.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img_big-v1/e540b94c9c89.jpg",
      name: "Xiaomi Mijia Bluetooth Temperature Humidity Monitoring Pro Electronic Digital Clock Watch Thermometer hygrometer Moisture Meter Work with Mi Home",
      mrp: "32.67",
      discount: "30",
      store: "Mi-Fans Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img_big-v1/e540b94c9c89.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img_big-v1/eb21302d0478.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img_big-v1/7ef618f750ab.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img_big-v1/67c56818f260.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16416/goods_img_big-v1/c11ad8e94619.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16421/goods_img_big-v1/ca2b4c7eb918.jpg",
      name: "Xiaomi Mi 20W Max Qi Wireless Car Charger Auto Pinch with Intelligent Infrared Sensor Fast Charging Car Phone Holder",
      mrp: "53.27",
      discount: "25",
      store: "Mi-Fans Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16421/goods_img_big-v1/ca2b4c7eb918.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16421/goods_img_big-v1/8b37ed1413ae.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16421/goods_img_big-v1/5e2fbb76c329.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16421/goods_img_big-v1/6d31ae89fa10.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16421/goods_img_big-v1/9f56eb0e734e.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6907992381598134272/16508/goods_img_big-v1/8f60a0e2e527.jpg",
      name: "Blackview Tab 11 Tablet Pad 8GB RAM 128GB ROM 10.36  2K Display Octa Core Android 11 6580mAh Battery",
      mrp: "399",
      discount: "38",
      store: "Toppice Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6907992381598134272/16508/goods_img_big-v1/8f60a0e2e527.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6907992381598134272/16508/goods_img_big-v1/9d08681f96fa.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6907992381598134272/16508/goods_img_big-v1/d10f998e4175.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6907992381598134272/16508/goods_img_big-v1/fe5cb1d1c190.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6907992381598134272/16508/goods_img_big-v1/8f60a0e2e527.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_img_big-v1/09b51f16da2f.jpg",
      name: "TWOTREES TT-5.5S 40W Laser Engraving Machine Frame Kit Laser Engraver Compressed Spot 5W 5.5W Fast High Precision Printer - CZ EU",
      mrp: "369",
      discount: "40",
      store: "Two Trees Official Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_img_big-v1/09b51f16da2f.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_img_big-v1/45b1b9c4ca0b.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_img_big-v1/cc3861ad2d01.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_img_big-v1/1bd0aec68726.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_img_big-v1/c78853018ab5.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16469/goods_img_big-v1/7f6b2895a6d2.jpg",
      name: "BEZIOR S500 MAX Foldable E-Scooter 25KM/H 500W Motor Shock Absorber - Black Poland",
      mrp: "799",
      discount: "19",
      store: "E-Bike Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16469/goods_img_big-v1/7f6b2895a6d2.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16469/goods_img_big-v1/7f6b2895a6d2.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16469/goods_img_big-v1/2015c0b482dc.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16469/goods_img_big-v1/7567bed4da34.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16469/goods_img_big-v1/34aa8e767a0b.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/store/6878028664286670848/16500/goods_img_big-v2/be0856c96ca0.jpg",
      name: "Original Lenovo HF140 Wired Earphones 3.5mm Super Bass Stereo Metal In-ear Earphone with Mic Noise Cancelling Music Headsets - White 1 pcs China",
      mrp: "7.90",
      discount: "30",
      store: "E-Fit-U Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878028664286670848/16500/goods_img_big-v2/be0856c96ca0.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878028664286670848/16500/goods_img_big-v2/6aad60f350d9.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878028664286670848/16500/goods_img_big-v2/18fff3fe2915.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878028664286670848/16500/goods_img_big-v2/6ebe915bc869.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878028664286670848/16500/goods_img_big-v2/77e9a45894fe.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16483/goods_img_big-v1/a518374702f9.jpg",
      name: "RG552 Handheld Game Anbernic Retro Video Game Console Dual systems Android Linux Pocket Game Player Built in 64G 4000+ Games - Gray 80G 4000 GAMES",
      mrp: "306.66",
      discount: "15",
      store: "Eight Hours Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16483/goods_img_big-v1/a518374702f9.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16483/goods_img_big-v1/a956b176e93c.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16483/goods_img_big-v1/94d69afde632.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16483/goods_img_big-v1/231ef0186f14.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16483/goods_img_big-v1/451010e7c5ff.jpg',
        }
      ]
    },
    {
      img: "https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16505/goods_img_big-v1/a587fdcb3eea.jpg",
      name: "Ultralight Waterproof Camping Tent Single Layer Portable Tent AntiUV Coating UPF 30+ for Outdoor Beach Fishing Fine Mesh Door - 1 People China",
      mrp: "33.56",
      discount: "20",
      store: "Ursmart Store",
      smallImg : [
        {
              img1 : 'https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16505/goods_img_big-v1/a587fdcb3eea.jpg',
              img2 : 'https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16505/goods_img_big-v1/e3e2cbdee8f9.jpg',
              img3 : 'https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16505/goods_img_big-v1/d8d9dfccd9b6.jpg',
              img4 : 'https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16505/goods_img_big-v1/f6c30f54fe5e.jpg',
              img5 : 'https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16505/goods_img_big-v1/5af2fe6c6e1e.jpg',
        }
      ]
    },
    
    ];
    // var currDescProd
    currDescProd = JSON.parse(localStorage.getItem("CurrProdDesc"))||[];
    let bannerDiv = document.querySelector("#bannerDiv");
    // console.log(currDescProd);
    function Displayproduct(prodS){
        // console.log(prodS);
        // for(let i = 0;i<4;i++){
          
          prodS.forEach(function(prod,i){
            if(i<4){

              let div = document.createElement("div");
              div.classList.add("bannerCard");
              
              let price = document.createElement("span");
              divOverlay = document.createElement("div");
              let img = document.createElement("img");
              img.src = prod.img;
              img.style.width ="100%";
              divOverlay.append(img);
              divOverlay.classList.add("div_overlay");
              div.addEventListener("mouseover",function(){
                  price.style.bottom = "0";
              })
              div.addEventListener("mouseout",function(){
                  price.style.bottom = "-200px";
              })
              // div.addEventListener("click",function(){
              //     localStorage.setItem("CurrProdDesc",)
              //     window.location.href = "description.html";
              // })
  
  
              price.classList.add("innerPrice");
              price.innerText = "$"+ prod.mrp;
              div.append(divOverlay,price);
              div.style.width = "100%";
              bannerDiv.append(div);
              div.addEventListener("click",function(){
                  AddCurrProd(prod);
                  localStorage.setItem("CurrProdDesc",JSON.stringify(prod));
              })
            }
          })
        // }
        // console.log(currDescProd);
    }

    function AddCurrProd(product){
        currDescProd[0] = product;
    }

    Displayproduct(products);

//SuperDeal Part Ends Here

display(products)

function display(data){
    
    data.forEach(function(ele){
        var card = document.createElement("div")
        card.setAttribute("class","card")

        var img = document.createElement("img")
        img.src=ele.img

        var titleBox = document.createElement("div")
        titleBox.setAttribute("class","titleBox")

        var name = document.createElement("p")
        name.innerText=ele.name

        var price = document.createElement("p")
        price.setAttribute("class","price")
        price.innerText="$"+ele.mrp

        var discount = document.createElement("div")
        discount.setAttribute("class","dTag")
        discount.innerText=ele.discount+"% OFF"

        titleBox.append(name)
        card.append(img,titleBox,price,discount)

        document.getElementById("productsMainDiv").append(card)

        card.addEventListener("click",function(){
                AddCurrProd(ele);
                localStorage.setItem("CurrProdDesc",JSON.stringify(ele));
                window.location.href = "description.html";
        })
    })
}

let cart = JSON.parse(localStorage.getItem("cart"));

document.querySelector("#cartCount").innerText = cart.length;


function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  isFound = false;
  cart.forEach(function(item){
    if(item.name === product.name){
      isFound = true;
    }
  })
  if(isFound){
    alert("alert item is already in cart");
  }else{
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    if(cart.length > 99){
      cartCount.innerText = "99+";
    }else{
      cartCount.innerText = cart.length;

    }
  }
  
}










