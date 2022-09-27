
let userIsPlaying = true;

const cells = document.querySelectorAll('.cell');

function setImg(id){

    let pos = document.getElementById(id);
    console.log("I clicked on position: " + pos.innerText);

    if(userIsPlaying){
        pos.style.backgroundImage = "url(red.png)";
        userIsPlaying=false;
    }
    else{
        pos.style.backgroundImage = "url(yellow.png)";
        userIsPlaying = true;
    }

}