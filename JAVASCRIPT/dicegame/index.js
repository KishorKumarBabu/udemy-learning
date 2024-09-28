var player1 = Math.floor(Math.random() * 6) + 1;
var player2 = Math.floor(Math.random() * 6) + 1;

var randomdice1 = "./images/dice" + player1 + ".png";
var randomdice2 = "./images/dice" + player2 + ".png";

document.querySelectorAll("img")[0].setAttribute('src', randomdice1);
document.querySelectorAll("img")[1].setAttribute('src', randomdice2);

if (player1>player2)
{
    document.querySelector("h1").textContent="🚩 Player1 wins"
}
else if (player1<player2)
    {
        document.querySelector("h1").textContent="🚩 Player2 wins"
    }
else(
    document.querySelector("h1").textContent="draw 😑"
)