player1_name = localStorage.getItem("Player1 Name");
player2_name = localStorage.getItem("Player2 Name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1Name").innerHTML = player1_name + ":";
document.getElementById("player2Name").innerHTML = player2_name + ":";
document.getElementById("player1Score").innerHTML = player1_score;
document.getElementById("player2Score").innerHTML = player2_score;

document.getElementById("playerQuestion").innerHTML = "Question Turn :" + player1_name;
document.getElementById("playerAnswer").innerHTML = "Answer Turn :" + player2_name;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log(word);
    firstLetter = word.charAt(1);
    console.log(firstLetter);
    length_divide_2 = Math.floor(word.lenght/2);
    secondLetter = word.charAt(length_divide_2);
    console.log(secondLetter);
    lenght_minus_1 = word.lenght - 1;
    thirdLetter = word.charAt(lenght_minus_1);
    console.log(thirdLetter);
    remove1 = word.replace(firstLetter,"_");
    remove2 = remove1.replace(secondLetter,"_");
    remove3 = remove2.replace(thirdLetter,"_");
    console.log(remove3);
    question_word = "<h4 id='word_display'>Q." + remove3 + "</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info' onclick='check()'>Check</button>"; 
    row = question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    getAnswer = document.getElementById("input_check_box").value;
    wordAnswer = getWord.toLowerCase();
    if(word == wordAnswer){
       if (answer_turn == "player1"){
           player1_score = player1_score + 1;
           document.getElementById("player1Score").innerHTML = player1_score;
       }
       else{
        player2_score = player2_score + 1;
        document.getElementById("player2Score").innerHTML = player2_score;
       }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
         document.getElementById("playerQuestion").innerHTML = "Question Turn :" + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("playerQuestion").innerHTML = "Question Turn :" + player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn :" + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("playerAnswer").innerHTML = "Answer Turn :" + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}