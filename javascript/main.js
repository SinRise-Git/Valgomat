let currentQuestion = 1; 
let questionAmount = 10;
let currentProgress = 0;
let currentAmount = 0

let partyScore ={
  MDG: 0,  
  AP: 0,
  H: 0,
  V: 0,
  KRF: 0,
  FRP: 0,
  Rødt: 0,
  SV: 0,
  SP: 0,
  Nothing: 0,
}

const progressBar = document.getElementById('progress');
const addButton = document.getElementById('add-progress');

function next() {
  const selectedValue = document.querySelector(`input[name="${currentQuestion}"]:checked`).value;
  const selectedValueObject = JSON.parse(selectedValue);
  for (const party in selectedValueObject) {
    if (partyScore.hasOwnProperty(party)) {
      partyScore[party] += selectedValueObject[party];
    }
  }
  if (currentQuestion <= 10) {
    document.querySelector(`.question-${currentQuestion}`).style.display = 'none';
    currentQuestion++;
    document.querySelector(`.question-${currentQuestion}`).style.display = 'block';
  }
  progress(10)
  console.log(partyScore)
}

function previous() {
  const selectedValue = document.querySelector(`input[name="${currentQuestion - 1}"]:checked`).value;
  const selectedValueObject = JSON.parse(selectedValue);
  for (const party in selectedValueObject) {
    if (partyScore.hasOwnProperty(party)) {
      partyScore[party] -= selectedValueObject[party];
    }
  }
  if (currentQuestion > 1) {
    document.querySelector(`.question-${currentQuestion}`).style.display = 'none';
    currentQuestion--;
    document.querySelector(`.question-${currentQuestion}`).style.display = 'block';
  }

  progress(-10)
  console.log(partyScore)
}

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener('change', function () {
      document.getElementById(`next-button-${currentQuestion}`).style.display = 'block';
      const button = document.getElementById(`next-button-${currentQuestion}`);
      button.removeAttribute('disabled');
    });
});


function results(){
   document.querySelector(`.question-${currentQuestion}`).style.display = 'none';
   document.querySelector(`.questions`).style.display = 'none';
   progress(10)
}

function progress(state){
  if (currentProgress < 100 ){
    if (state == 10){
      currentProgress += (100 / questionAmount) - 0.065;
      currentAmount +=  (100 / questionAmount)
    }
    else if (state == -10){
      currentProgress -= (100 / questionAmount) - 0.065;
      currentAmount -=  (100 / questionAmount)
    }
    progressBar.style.width = currentProgress + '%';
    progressBar.innerText = currentAmount + '%';
  }
}