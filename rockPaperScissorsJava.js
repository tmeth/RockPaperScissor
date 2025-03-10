let user="";
let result="";
let you="";
let comp="";

const images=document.querySelectorAll('img'); //select all image elements
images.forEach(element => {
    element.onclick= () => userChoice(element.id); //when image is selected, call userChoice
});

function userChoice(choice) { //save ID of the image user selected in user and call
    user=choice;
    printResult();
}

//keyboard shortcut
document.addEventListener("keydown",keyFunction);
function keyFunction(event){
    const key=event.key.toUpperCase(); //key pressed
    if (event.ctrlKey){
        alert("Try again. You did not enter r, p, or s.")
    }
    if (key=="R"){
        userChoice("rock");
    }
    else if (key=="P"){
        userChoice("paper");
    }
    else if (key=="S"){
        userChoice("scissors");
    }
}

function printResult(){
    const options=["rock", "paper","scissors"];
    const randIndex=Math.floor(Math.random()*3); //random number between 0 and 3
    const computer=options[randIndex]; //computers random choice

    if ((user=="rock" && computer=="scissors") || (user=="paper" && computer=="rock") || (user=="scissors" && computer=="paper")){
        result="You!";
        you= "You: "+user;
        comp="Computer: "+computer;
    }
    else if ((computer=="rock" && user=="scissors") || (computer=="paper" && user=="rock") || (computer=="scissors" && user=="paper")){
        result="Computer"
        you= "You: "+user;
        comp="Computer: "+computer;
    }
    else{
        result="Tie game. You both chose "+computer+".";
        you= "You: "+user;
        comp="Computer: "+computer;
    }
    //display winner
    document.getElementById("winner").innerHTML="And the winner is...";

    document.getElementById("result").innerHTML=result;
    document.getElementById("you").innerHTML=you;
    document.getElementById("computer").innerHTML=comp;

}
//update fontSize when hover
  const btnReset=document.getElementById("reset")
  btnReset.addEventListener("mouseover",changeFontSize);
  btnReset.addEventListener("mouseout",resetFontSize);

    function changeFontSize(){
        btnReset.style.fontSize="30px";
    }
    function resetFontSize(){
        btnReset.style.fontSize="25px";
    }
    
    //reload page to play again
    document.getElementById("reset").onclick=resetGame;

    function resetGame(){
        location.reload();
    }
