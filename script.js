'use strict()';
// document.querySelector('.number').textContent= Math.floor(Math.random());
let x= Math.floor(Math.random()*50)+1 ;
let highScore=0;
var score=20;
document.querySelector('.check').addEventListener('click',function(){
  let theNumber= document.querySelector('.guess').value;
  if (score!=0){
    if (!theNumber){
      document.querySelector('.message').textContent='No Number Entered';
      document.querySelector('body').style.backgroundColor='red';
    }
    else{
      if (theNumber==x){
        document.querySelector('.message').textContent='Correct Guess';
        document.querySelector('.number').textContent=theNumber;
        document.querySelector('body').style.backgroundColor='green';
        if(score>highScore){
          highScore=score;
          document.querySelector('.highscore').textContent=highScore;
        }
      }
      else if(theNumber>x){
        let high=theNumber-x;
        if (high>20){
          document.querySelector('.message').textContent='Majestic High';
        }
        else if(high>10 && high<=20){
          document.querySelector('.message').textContent='Too High';
        }
        else{
          document.querySelector('.message').textContent='High';
        }
        score -=1;
        document.querySelector('.score').textContent= score;
      }
      else {
        let low=x-theNumber;
        if (low>20){
          document.querySelector('.message').textContent='Majestic Low';
        }
        else if(low>10 && low<=20){
          document.querySelector('.message').textContent='Too Low';
        }
        else{
          document.querySelector('.message').textContent='Low';
        }
        score -=1;
        document.querySelector('.score').textContent= score;
      }
    }
  }
  else {
    document.querySelector('.message').textContent='You Loose';
  }

});
// var inputVal = document.getElementById("myInput").value;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
   x= Math.floor(Math.random()*50)+1 ;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});