function addUser() {
   
    var player1Name = document.getElementById("player1Name").value;
    var player2Name = document.getElementById("player2Name").value;

  
    localStorage.setItem("player1Name", player1Name);
    localStorage.setItem("player2Name", player2Name);

   
    window.location = "quiz_game_page.html";
}
function send() {
   
    
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

  
    
    var correctAnswer = number1 * number2;

    
    
    var question = `<h4>${number1} X ${number2}</h4>`;
    var inputBox = `<br>Answer: <input type='text' id='answerInput' class='form-control'>`;
    var checkButton = `<br><br><button class='btn btn-success' onclick='checkAnswer(${correctAnswer})'>Check</button>`;

   
    
    var row = question + inputBox + checkButton;

   
    
    document.getElementById("output").innerHTML = row;

    
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

function checkAnswer(correctAnswer) {
    /
    var answer = parseInt(document.getElementById("answerInput").value);

    
    if (answer === correctAnswer) {
        alert("Correct!");
        
    } else {
        alert("Incorrect, try again.");
    }
}
let player1_score = 0;
let player2_score = 0;
let question_turn = "player1";
let answer_turn = "player2";


let actual_name;  

function check() {
        let get_answer = document.getElementById("answer_input").value;

   
    if (get_answer == actual_name) {
       
        if (answer_turn === "player1") {
            player1_score++;
            document.getElementById("player1_score").innerText = player1_score;
        } else {
           
            player2_score++;
            document.getElementById("player2_score").innerText = player2_score;
        }
    }

   
    if (question_turn === "player1") {
        question_turn = "player2";
    } else {
        question_turn = "player1";
    }

   
    if (answer_turn === "player1") {
        answer_turn = "player2";
    } else {
        answer_turn = "player1";
    }

   
    document.getElementById("question_turn").innerText = `Question Turn: ${question_turn}`;
    document.getElementById("answer_turn").innerText = `Answer Turn: ${answer_turn}`;

    
    document.getElementById("answer_input").value = "";
}


document.getElementById("check_button").addEventListener("click", check);