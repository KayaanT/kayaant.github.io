// Interactive Scene Assignment
// Kayaan Tharani
// October 1st, 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// To-do:
// create button to draw card - can also use a key
// create card like rectangle to display chosen card (or get an empty picture of a playing card)
// link a keyboard key to reshuffle the deck
// make window resizable


let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cardSuits = ["hearts", "spades", "clubs", "diamonds"];
let mouseOverButton = false;

let card;
let deck = [];
let cardChosen = false;

function setup() {
  createCanvas(800, 800);
  fill("white");
  textSize(48);

  // create a shuffled deck of cards
  createShuffledDeck();
  console.log(deck);
}

function draw() {
  background(0);
  if (cardChosen === true) {
    textAlign(CENTER);

    fill("white");
    rect(width/2 - 125, height/8, 250, 400, 20);
    fill("blue");
    text(card.Value + " of " + card.Suit, width / 2, height / 3);
  }
  fill("grey");
  rect(width / 2 - 125, 3 * height / 4, 250, 80, 20);
  mouseOverButton = collidePointRect(mouseX, mouseY, width / 2 - 125, 3 * height / 4, 250, 80);

  fill("black");
  textAlign(LEFT);
  text("Draw Card", width / 2 - 115, 3 * height / 4 + 55);

}

function mouseClicked() {
  if (mouseOverButton) {
    card = chooseCard();
  }
}

function chooseCard() {
  cardChosen = true; 
  let chosenCard;
  chosenCard = deck[0];
  deck.splice(0, 1);
  return chosenCard;
}

function createShuffledDeck() {
  let newCard;
  for (let suit = 0; suit < cardSuits.length; suit++) {
    for (let value = 0; value < cardValues.length; value++) {
      newCard = { Value: cardValues[value], Suit: cardSuits[suit] };
      deck.push(newCard);
    }
  }
  deck = shuffle(deck);
}