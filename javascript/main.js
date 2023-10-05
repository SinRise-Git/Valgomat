let currentQuestion = 1; 
let questionAmount = 10;
let currentProgress = 0;
let currentAmount = 0
let valueP = 0
let procent = 0


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

let partyColors = {
  MDG: "#548208",  
  AP: "#E12734",
  H: "#085695",
  V: "#086B6B",
  KRF: "#FF443D",
  FRP: "#CA3035",
  Rødt: "#CA3035",
  SV: "#539760",
  SP: "#088843",
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
  if (currentQuestion <= questionAmount) {
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
   document.querySelector(`.results`).style.display = 'block';
   progress(10)
   const sorted = Object.entries(partyScore).sort((a, b) => b[1] - a[1]);
   const sortedParty = Object.fromEntries(sorted);
   const keys = Object.keys(sortedParty);
   for(let i = 1; i <= 10; i++){
    valueP += sortedParty[keys[i-1]]
   }
   for(let i = 1; i <= 4; i++){
    const partyPlace = document.getElementById(`party-${i}-text`);
    const valuePlace = document.getElementById(`party-${i}-score-text`);
    const valueProcent = document.getElementById(`party-${i}-prosent-text`);
    const firstValue = sortedParty[keys[i-1]]
    const firstParty = keys[i-1]
    const partyColor = partyColors[firstParty];
    procent = (firstValue / valueP) * 100
    partyPlace.style.color = partyColor
    partyPlace.textContent = firstParty
    valuePlace.textContent = firstValue    
    valueProcent.textContent = procent.toFixed(1) + "%"
  }
   
}

function progress(state){
  if (currentProgress < 100 ){
    if (state == 10){
      currentProgress += (100 / questionAmount) - 0.090;
      currentAmount +=  (100 / questionAmount)
    }
    else if (state == -10){
      currentProgress -= (100 / questionAmount) - 0.090;
      currentAmount -=  (100 / questionAmount)
    }
    progressBar.style.width = currentProgress + '%';
    progressBar.innerText = currentAmount + '%';
  }
}



