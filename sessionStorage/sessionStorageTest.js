let answerInput = document.getElementById("input-id");

function storeLastAnswer() {
    let answer = answerInput.value;
    sessionStorage.setItem("answer", answer);
}

function getLastAnswer() {
    var answer = sessionStorage.getItem("answer");
    answerInput.value = answer;
}

function deleteLastAnswer() {
    sessionStorage.removeItem("answer");
    answerInput.value = "";
}