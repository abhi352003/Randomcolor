const getColor= ()=>{
  const randomnumber= Math.floor(Math.random()*16777215)
  console.log(randomnumber);
  const randomcode='#'+randomnumber.toString(16);
  document.body.style.backgroundColor=randomcode;
  document.getElementById("rdc").innerText=randomcode;

}
document.getElementById("btn").addEventListener("click",getColor);

getColor();