//Declaring Initilizing variables
let userPlaying = 0;//0 user is playing 1 computer is playing
let gameIsActive = true;
let counter = 0;
let status = document.getElementById("status");

//Array representing the game state where -1 is an empty spot and !-1 is a taken spot
let game_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
//Array showing the indices indicating a win
const win_states  = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]];

const cells = document.querySelectorAll(".cell");
console.log(cells);


function tic(id){
//Function that sets an image red or yellow based on which player turn

    let pos = document.getElementById(id);
    console.log("I clicked on position: " + pos.innerText);

    if(game_state[pos.id]==-1 && gameIsActive){

        game_state[pos.id] = 0;

        if(userPlaying == 0){
            userPlaying = 1;
            pos.style.backgroundImage = "url(red.png)";
            counter++;
            checkForWin();
          //  console.log(game_state);
        }
        
            AiTurn();
            
    }

}

function AiTurn(){
//Function that tells the AI how to act when it is its turn
    if(userPlaying == 1){

        const empty = game_state.filter(s => s === -1);
    
    for(let i =0; i < game_state.length; i++){
        if(game_state[i] === -1){
            let pos = document.getElementById(i);
            pos.style.backgroundImage = "url(yellow.png)";
            userPlaying = 0;
            game_state[i] = 1;
            i = game_state.length;
            counter++;
        }
    }
    checkForWin();
    }
    
}




function checkForWin(){
//Function that checks if there is a winning state or a tie

    for (let win of win_states){
        if(game_state[win[0]] == game_state[win[1]] && game_state[win[0]] == game_state[win[2]] && game_state[win[1]] == game_state[win[2]] && game_state[win[0]] !=-1 ){

            if(userPlaying == 1){
                userPlaying =0;
                let status = document.getElementById("status");
                status.innerText = "User has won";
                let reset_button = document.getElementById("reset_button");
                reset_button.style.display="block";
            }
            
            else if(userPlaying == 0){
                userPlaying = 1;
                let status = document.getElementById("status");
                status.innerText = "AI has won";
                let reset_button = document.getElementById("reset_button");
                reset_button.style.display="block";

            }

            gameIsActive=false;
        }

        if(counter == 9){
            let status = document.getElementById("status");
            status.innerText = "Its a tie !";
            let reset_button = document.getElementById("reset_button");
            reset_button.style.display="block";
        }
        
    }

    

    emptyCells();


}
    




function playAgain(){
//Function that resets the game once it is finished

    userPlaying = 0;
    counter = 0;
    gameIsActive = true;
    let status = document.getElementById("status");
    status.innerText = "";
    let reset_button = document.getElementById("reset_button");
    reset_button.style.display="none";


    for (let i = 0;i < game_state.length;i++){
        game_state[i] = -1;
        cells[i].style.backgroundImage = "url()";
    }

}

function emptyCells(){
//Function that checks the empty cells
    let index_available = [];

    for(let i =0 ; i < game_state.length;i++){
        if(game_state[i] == -1){
            index_available.push(i);
        }
        
    }
    console.log(index_available);
    return index_available;
}