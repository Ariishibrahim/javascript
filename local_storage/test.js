let answerInput = document.getElementById("input-id");

function storeLastAnswer() {
    let answer = answerInput.value;
    localStorage.setItem("answer", answer);
}

function getLastAnswer() {
    var answer = localStorage.getItem("answer");
    answerInput.value = answer;
    document.getElementById("Last-answer-id").textContent = answer;
}


function deleteLastAnswer() {
    localStorage.removeItem("answer");
    answerInput.value = "";
}