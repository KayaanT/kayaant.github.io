// Interactive Scene Assignment
// Kayaan Tharani
// October 1st, 2021
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cardSuits = ["hearts", "spades", "clubs", "diamonds"];

let card;
let deck = [];

function setup() {
  createCanvas(400, 400);
  fill("white");

  // create a shuffled deck of cards
  createShuffledDeck();
  console.log(deck);
}

function draw() {
  background(0);
  text(card.Value + " of " + card.Suit, 100, 100);
}

function mouseClicked() {
  card = chooseCard();
  console.log(str(card));
  text(card.Value + " of " + card.Suit, 100, 100);
}

function chooseCard() {
  let chosenCard;
  chosenCard = deck[0];
  deck.splice(0, 1);
  return chosenCard;
}

function createShuffledDeck() {
  for (let suit = 0; suit < cardSuits.length; suit++) {
    for (let value = 0; value < cardValues.length; value++) {
      card = { Value: cardValues[value], Suit: cardSuits[suit] };
      deck.push(card);
    }
  }
  deck = shuffle(deck);
}