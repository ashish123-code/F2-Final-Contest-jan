
 const images = document.querySelectorAll("#image-container img");
 const form = document.querySelector("#register-form");
 const info = document.querySelector("#info");
 
 let registeredUser = {};
 
 images[0].addEventListener("click", function() {
   form.style.display = "block";
 });
 
 form.addEventListener("submit", function(event) {
   event.preventDefault();
   registeredUser = {
     name: document.querySelector("#name").value,
     username: document.querySelector("#username").value
   };
 
   form.style.display = "none";
 });
 
 images[1].addEventListener("click", function() {
   info.innerHTML = `Name: ${registeredUser.name}<br>Username: ${registeredUser.username}`;
 });
function show() {
  document.getElementById('dice').style.display = "block";
  document.getElementById('img3').style.display = "none";
}

let diceImg = document.getElementById("dice");
let img4 = document.getElementById("img4");
let score =document.getElementById("score");
let total=document.getElementById("sum");
let rollCount = 0;
let sum = 0;
diceImg.addEventListener("click", function() {
  if (rollCount < 3) {
    let roll = Math.floor(Math.random() * 6)+1 ;
    sum += roll;
    rollCount++;
    score.innerText="Roll " + rollCount + ": " + roll;
  }
  else if (sum > 10) {
    img4.style.display = "block";
  } else {
    score.innerText="Only One Chance (try again score willbe more than 10)";
  }
  total.innerText="Your Score is :"+sum;
 
});
img4.style.display = "none";
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let coupon=document.getElementById("cupon");
function generateString() {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < 12; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    coupon.innerText="Coupon code :"+result;
}


