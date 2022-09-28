let userPlaying = 0;//0 user is playing 1 computer is playing
let gameIsActive = true;

let game_state = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
const win_state  = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,4,6], [1,4,7], [2,5,8]];

const cells = document.querySelectorAll('.cell');

function setImg(id){

    let pos = document.getElementById(id);
    console.log("I clicked on position: " + pos.innerText);

    if(game_state[pos.id]==-1 && gameIsActive){

        console.log("Fete 3al if");

        game_state[pos.id] = userPlaying;

        if(userPlaying == 0){
            userPlaying = 1;
            pos.style.backgroundImage = "url(red.png)";
        }
        else if(userPlaying == 1){
            userPlaying = 0;
            pos.style.backgroundImage = "url(yellow.png)";
        }
       
        
    }
    

}