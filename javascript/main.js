let currentQuestion = 1; 
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


function next() {
  const selectedValue = document.querySelector(`input[name="${currentQuestion}"]:checked`).value;
  const selectedValueObject = JSON.parse(selectedValue);
  for (const party in selectedValueObject) {
    if (partyScore.hasOwnProperty(party)) {
      partyScore[party] += selectedValueObject[party];
    }
  }
  console.log(partyScore)
  
  if (currentQuestion < 10) {
    document.querySelector(`.question-${currentQuestion}`).style.display = 'none';
    currentQuestion++;
    document.querySelector(`.question-${currentQuestion}`).style.display = 'block';
  }
}

function previous() {
  if (currentQuestion > 1) {
    document.querySelector(`.question-${currentQuestion}`).style.display = 'none';
    currentQuestion--;
    document.querySelector(`.question-${currentQuestion}`).style.display = 'block';
  }
}

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener('change', function () {
      document.getElementById(`next-button-${currentQuestion}`).style.display = 'block';
      const button = document.getElementById(`next-button-${currentQuestion}`);
      button.removeAttribute('disabled');
    });
});


