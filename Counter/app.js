//get the buttons
let decrease = document.querySelector('.decrease');
let increase = document.querySelector('.increase');
let reset = document.querySelector('.reset');
let auto = document.querySelector('.auto');
//set the counter
let number = document.querySelector('span');
let counter = 0;
//add basic functionalities
decrease.addEventListener('click',function(){
    if(counter > 0){
        counter--;
        number.innerText = counter;
    }else{
        alert("you can't count less than 0");
    }
})
increase.addEventListener('click',function(){
    counter++;
    number.innerText = counter;
})
reset.addEventListener('click',function(){
    counter = 0;
    number.innerText = counter;
})
//add auto count
auto.addEventListener('click',function(){
    let i = 0;
  var intervalId = setInterval(function(){
      number.innerText = i;
      i++;
      if(i == 1000){
          clearInterval(intervalId);
      }
  },10);

})
