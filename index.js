let input = document.querySelector("#name");
let btn1 = document.querySelector(".btn1");
let btn2 =document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let demo = document.querySelector(".demo");
let arr =  ["rakesh","roshan","ganesh","shiva","sai"]
let h1 = document.querySelector(".h11")



btn1.addEventListener("click",()=>{
  // input.textContent = Math.random()
  let Num =Math.floor(Math.random()*10 - 5);
  if(Num < 0){
  let signNum = Math.abs(Num) ;
  console.log(signNum)
  input.value = arr[signNum];  
  }

  
})

btn2.addEventListener("click",()=>{
  if(input.value === ""){
    alert("Enter the name to start")
  }else{
    window.location.href = "./question.html"
  }
})
demo.style.display = "none";
btn3.addEventListener("click",()=>{
  h1.style.display = "none";
 input.style.display = "none";
 btn1.style.display = "none";
 btn2.style.display = "none";
 btn3.style.display = "none";
 demo.style.display = "block";
})