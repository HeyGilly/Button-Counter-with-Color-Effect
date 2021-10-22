
// We first have to select values, and grab the variable from the html file.
// we are going to effect the "0" that will change numbers or
//  the count needs to be zero, because it allows you to reset and have a starting point
//Firstly we'll start by select our various elements using document.
// queryselector and putting the result into some variables.
// base is the reference point, we will be using it as a starting point and a reset
var displayCounter = document.querySelector('#displayCounter')
var increase = document.querySelector("#increase");
var decrease = document.querySelector("#decrease");
var startOver = document.querySelector("#reset");
var base = 0;

// this will update the display counter on the front end. we will be updating our base of "0"
function updatePage(){
    displayCounter.innerHTML = base;
}

// This function will change the color of the text and change the shadow depending if higher or lower then zero.
// Remember that if you do not add the text shadow to the last else statement the shawdow before hand will stay on displayCounter
//For Example you going to 1 -> 0 the green shadow would stay, you need to put none so it can clear the effect.
function colorChange(){
    if (base > 0){
        displayCounter.style.color = "#ABFCBB";
        displayCounter.style.textShadow = " 2px 2px 5px #00FF32";

    } else if (base < 0){
        displayCounter.style.color = "#FCABAB";
        displayCounter.style.textShadow = " 2px 2px 5px #FF0000";

    } else {
        displayCounter.style.color = "#fff";
        displayCounter.style.textShadow = 'none';
    }
}


//When people push the button with class increase the displayCounter will increase by 1`
// it will increase by one, then it will update the page updating the displayCounter
//This will only occur when user clicks on increase button.
increase.addEventListener("click",()=>{
    base++;
    colorChange();
    updatePage();
});
//When people push the button with class decrease the displayCounter will decrease by 1`
////This will only occur when user clicks on decrease button.
decrease.addEventListener("click",()=>{
    base--;
    colorChange();
    updatePage();
});
//When people push the button with class reset the displayCounter will return back to zero`
////This will only occur when user clicks on reset button.
startOver.addEventListener("click",()=>{
    base =0;
    colorChange();
    updatePage();
});

