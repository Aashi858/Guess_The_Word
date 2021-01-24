function addUser(){
    player1_name = document.getElementById("player_1_input").value;
    player2_name = document.getElementById("player_2_input").value;
    localStorage.setItem("Player1 Name",player1_name);
    localStorage.setItem("Player2 Name",player2_name);
    window.location = "game_page.html";
}
