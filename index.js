let userPlaying = 0;//0 user is playing 1 computer is playing
let gameIsActive = true;
let counter = 0;

let game_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
const win_states  = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]];

const cells = document.querySelectorAll('.cell');

function setImg(id){

    let pos = document.getElementById(id);
    console.log("I clicked on position: " + pos.innerText);

    if(game_state[pos.id]==-1 && gameIsActive){

        game_state[pos.id] = userPlaying;

        if(userPlaying == 0){
            userPlaying = 1;
            pos.style.backgroundImage = "url(red.png)";
            counter++;
        }
        else if(userPlaying == 1){
            userPlaying = 0;
            pos.style.backgroundImage = "url(yellow.png)";
            counter++;
        }
        
    }

    for (let win of win_states){
        if(game_state[win[0]] == game_state[win[1]] && game_state[win[0]] == game_state[win[2]] && game_state[win[1]] == game_state[win[2]] && game_state[win[0]] !=-1 ){

            if(game_state[win[0]] == 1){
                console.log("User has won");
            }
            else{
                console.log("AI has won");
            }
            gameIsActive=false;
        }
        
    }
    
    if(counter == 9){
        console.log("Its a tie");
    }

}

function playAgain(){

    
}