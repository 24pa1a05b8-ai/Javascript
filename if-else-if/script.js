const mytext = document.getElementById("mytext");
const mybutton = document.getElementById("mybutton");
const myp = document.getElementById("myp");

let age;
mybutton.onclick = function(){
    age = mytext.value;
    age = Number(age);
    if(age==0) {
        myp.textContent = "You are a baby";
    }   
    else if(age>0 && age<13) {
        myp.textContent = "You are a child";
    }   
    else if(age>=13 && age<20) {
        myp.textContent = "You are a teenager";
    }
    else if(age>=20 && age<65) {
        myp.textContent = "You are an adult";
    }
    else {
        myp.textContent = "You are a senior citizen";
    }
}