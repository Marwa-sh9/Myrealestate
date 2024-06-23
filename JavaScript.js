
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  if (x.className === "navother") {
    x.className += " responsive";
  } else {
    x.className = "navother";
  }
}

/* Show And Hide Info */
let isClicked = true;
function showdetails(Details){
    let realty= document.querySelector(Details);
    if(isClicked){
      realty.style.display = 'block';
        isClicked = false;
        
    }
    else{
      realty.style.display = 'none';
        isClicked = true; 
    }
    
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3.0 seconds
}

document.getElementById("myButton").onclick = function () {
  location.href = "realty.html";
};
document.getElementById("myButtonr").onclick = function () {
  location.href = "about.html";
}


/* Form Validation */
function validateForm()
{   
    const key = ["first_name","middle_name","last_name","ID_number","date","phone","rent_type","day","year","year"];
    var message = {};
    key.forEach(element => {
        var value = document.forms["myform"][element].value;
        switch (element) {
            case 'first_name':
                if (value ==""){
                    message[element]=" ادخل الاسم  "; 
                }
                break;
            case 'middle_name':
                if (value ==""){
                    message[element]=" ادخل اسم الاب "; 
                }
                break;
            case 'last_name':
                if (value ==""){
                    message[element]=" ادخل الكنية  "; 
                }
                break;
            case 'ID_number':
                if (value ==""){
                    message[element]=" ادخل الرقم الوطني "; 
                }else{
                    var id = String(value);
                    for (let i = 0; i < id.length; i++) {
                        if (id[i]>='a' && id[i]<='z'){
                            message['ID_number_Charcter'] = "الرقم الوطني يحوي ارقام فقط";
                        }
                        if (id[i]>='A' && id[i]<='Z'){
                            message['ID_number_Charcter'] = "الرقم الوطني يحوي ارقام فقط";
                        }
                    }
                    var card=id[0]+id[1];
                    if(parseInt(card)>14){
                        message[element] = "الرقم الوطني غير صالح";
                    }
                }
                break;
            case 'date':
                if (value ==""){
                    message[element]=" ادخل تاريخ الميلاد "; 
                }
            break;
            case 'phone':
                if (value ==""){
                    message[element]=" ادخل رقم  "; 
                }
                else{
                    var phone = String(value);
                    var phone_num=phone[0]+phone[1]+phone[2];
                    if( phone_num == "091" || phone_num == "092" ){
                        message[element] = "هذا الرقم ليس في الخدمة";
                    }
                }
            break;
           
        }
    });
    let mes="";
    for (const m in message) {
        mes=mes+"\n"+message[m];
    }
    if(mes !=""){
        alert(mes); 
        return false;
    }
    var x = transfar();
    return x;
}
function transfar(){
    
  var validate = ValidCaptcha();
  if(validate == false){
      alert("التحقق غير صحيح");
  }
  else 
  alert("تم استئجار  ");
return(validate);

}
/* Function to Generate Captcha */  
function GenerateCaptcha() {  
  var chr1 = Math.ceil(Math.random() * 10) + '';  
  var str = new Array(4).join().replace(/(.|$)/g, 
    function () {
       return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); 
      });  
  var captchaCode = str + chr1 ;  
  document.getElementById("txtCaptcha").value = captchaCode  ;
}  
/* Validating Captcha Function */  
function ValidCaptcha() {  
  var str1 = removeSpaces(document.getElementById('txtCaptcha').value);  
  var str2 = removeSpaces(document.getElementById('txtCompare').value);  

  if (str1 == str2) return true;
  GenerateCaptcha();  
 
  return false;  
}  
/* Remove spaces from Captcha Code */  
function removeSpaces(string) {  
  return string.split(' ').join('');  
}

function ShowForm(){
  const x =document.getElementById("show1");
  x.removeAttribute('hidden');
  document.getElementById('show1').scrollIntoView({
      behavior: 'smooth'
    });
}
      
function Rent_Type(){
  const select =document.getElementById("rent_type");
  const day =document.getElementById("day");
  const week =document.getElementById("week");
  const year =document.getElementById("year");
  if(select.value === "Day"){
      day.removeAttribute('hidden');
      week.setAttribute('hidden',"Hidden");
      year.setAttribute('hidden',"Hidden");
  }
  if(select.value == "Week"){
      week.removeAttribute('hidden');
      day.setAttribute('hidden',"Hidden");
      year.setAttribute('hidden',"Hidden");
  }
  if(select.value == "Year"){
      year.removeAttribute('hidden');

      week.setAttribute('hidden',"Hidden");
      day.setAttribute('hidden',"Hidden");
  }
}


