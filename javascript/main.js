question1 = document.querySelector(".question-1")

let question = parseInt(localStorage.getItem("question"));

if (isNaN(question)) {
    question = 1;
    localStorage.setItem("question", question);
}

function next() {
    if (question < 10) {
        question += 1;
        localStorage.setItem('question', question);
    }
}

function previous() {
    if (question > 1) {
        question -= 1;
        localStorage.setItem('question', question);
    }
}


