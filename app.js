const colors = ["green", "red", "rgba(133,122,200)",
"#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
 // get random number between 0-3
 const RandomNumber = getrandomnumber() ;
console.log(RandomNumber)

 document.body.style.backgroundColor = colors[RandomNumber];
 color.textcontet = colors[RandomNumber];
});

function getrandomnumber() {
 return Math.floor(Math.random()*colors.length);
}