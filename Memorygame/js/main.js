var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var cardOne = cards[0];

var cardTwo = cards[1];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
	alert("You've found a match");
} else if (cardsInPlay.length === 2 && cardsInPlay[0] != cardsInPlay[1]){
	alert("Sorry, try again"); 
} else {
};

console.log("User flipped " + cardsInPlay[0]);
console.log("User flipped " + cardsInPlay[1]);

