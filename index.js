const ball = document.getElementById('ball')
document.addEventListener('keydown', handleKeyPress);
let x = 0;
let y = 0;

function handleKeyPress(e){
    if (e.code == "ArrowLeft"){
        x = x-10
    }
    if (e.code == "ArrowRight"){
        x = x+10
    }
    if (e.code == "ArrowDown"){
        y = y+10
    }
    if (e.code == "ArrowUp"){
        y = y-10
    }
    if (x<0){
        x = 0;
    }
    if (y<0){
        y = 0;
    }
    refresh();
}
function refresh(){ //for updating the balls position   
    ball.style.left = x + "px";
    ball.style.top = y + "px";
}