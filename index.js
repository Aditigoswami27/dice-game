var randomNumber1 = Math.floor(Math.random()*7);
var randomNumber2 = Math.floor(Math.random()*7);
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src" ,"./images/dice"+randomNumber1+".png"); 
image2.setAttribute("src" ,"./images/dice"+randomNumber2+".png"); 

function winner(){
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins !";
    }
    else if(randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML = "Its a Draw !";
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 wins !";
    }

}
winner();