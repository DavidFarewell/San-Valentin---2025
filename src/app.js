import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    generateRandomCard();
    document.getElementById('theCard').addEventListener('click', generateRandomCard);
};

function generateRandomCard() {
    let cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["Diamonds", "Spades", "Hearts", "Clubs"];

    let randomCardIndex = Math.floor(Math.random() * cardNumbers.length);
    let randomSuitIndex = Math.floor(Math.random() * suits.length);
    let selectedSuit = suits[randomSuitIndex];

    document.getElementById('cardContent').innerHTML = cardNumbers[randomCardIndex];
    let cardElement = document.getElementById('theCard');
    cardElement.className = "card " + getSuitClass(selectedSuit);

    console.log("Generated card: " + cardNumbers[randomCardIndex] + " of " + selectedSuit);
}

function getSuitClass(suit) {
    switch (suit) {
        case "Diamonds": return "suit-diamonds";
        case "Spades": return "suit-spades";
        case "Hearts": return "suit-hearts";
        case "Clubs": return "suit-clubs";
    }
}

