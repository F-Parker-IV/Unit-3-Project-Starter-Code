/* Declare variables below to save the different sections (divs) of your story*/
let firstButton = document.querySelector(".option-one");
let secondButton = document.querySelector(".option-two");
let firstAnswer = document.querySelector(".option-one-screen");
let secondAnswer = document.querySelector(".option-two-screen");
let firstImg = document.querySelector(".nfc");
let secondImg = document.querySelector(".afc");
let opening = document.querySelector(".story-opening");
let paragraph = document.querySelector(".you-clicked");
let thirdAnswer = document.querySelector(".option-one-end");
let fourthAnswer = document.querySelector(".option-two-end");

firstButton.onmouseover = function() {
    firstAnswer.style.display = "block"; 
    firstImg.style.display = "block" ;
    opening.style.display = "none";
    paragraph.innerHTML= "You Clicked NFC";
    thirdAnswer.style.display = "block";
};
    

secondButton.onclick = function() {
    secondAnswer.style.display = "block";
	secondImg.style.display = "block";
    paragraph.innerHTML= "You Clicked AFC";
    fourthAnswer.style.display = "block";
};


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

}; */
