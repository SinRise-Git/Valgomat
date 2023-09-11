let currentQuestion = 1; 

function next() {
  if (currentQuestion < 10) {
    document.querySelector(`.question-${currentQuestion}`).style.display = 'none';
    currentQuestion++;
    document.querySelector(`.next-button-${currentQuestion}`).style.display = 'block';;
  };      
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
      const button = document.getElementById(`next-button-${currentQuestion}`);
      button.removeAttribute('disabled');
    });
});


