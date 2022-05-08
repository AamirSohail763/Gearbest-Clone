// id
//#firstname #lastname #addressone #addresstwo #countryCheck #provinceCheck
//#cityName #postalCode #code #ph #emailAdd
//#but

document.querySelector("#form").addEventListener("submit",createAddress);



var addressArr=JSON.parse(localStorage.getItem("addressLS")) || [];



function createAddress(){
    
    event.preventDefault();
    //console.log("i am in")

    var firstname=document.querySelector("#firstname").value;
    var lastname=document.querySelector("#lastname").value;
    var addressone=document.querySelector("#addressone").value;
    var addresstwo=document.querySelector("#addresstwo").value;
    var country=document.querySelector("#countryCheck").value;
    var province=document.querySelector("#provinceCheck").value;
    var cityName=document.querySelector("#cityName").value;
    var postalCode=document.querySelector("#postalCode").value;
    var code=document.querySelector("#code").value;
    var phone=document.querySelector("#ph").value;
    var email=document.querySelector("#emailAdd").value;
    // var callid=document.querySelector("#")
    //changed below code ----the changes are made in the address.js and confirm.js------
    if(firstname.length<3 || lastname.length<3 || addressone.length<3 || postalCode.length<3 || phone.length<10 || email.length<5  || code.length<1 || code.length>4){
        alert("Enter all valid credentials");
        
        // window.location.href="address.html";
        return;
    }
    //above part was edited
    

    var obj={
        fname : firstname,
        lname : lastname,
        add1 : addressone,
        add2 : addresstwo,
        country : country,
        province : province,
        city : cityName,
        posCode : postalCode,
        code : code,
        phoneNo : phone,
        email : email

    }



    addressArr.push(obj);

    localStorage.setItem("addressLS",JSON.stringify(addressArr));
    window.location.href="confirm.html" //this is newly added
    empty();



}
function empty(){
    const inputs = document.querySelectorAll("#firstname, #lastname, #addressone, #addresstwo, #countryCheck, #provinceCheck,#cityName ,#postalCode, #code, #ph, #emailAdd");
    inputs.forEach(input => {input.value = "";})

}

// below js will going to regulate the confirm place order html



//this js part will going to controll the payment html
