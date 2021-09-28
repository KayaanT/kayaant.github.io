// Interactive Scene Assignment - random card
// Kayaan Tharani
// October 1st, 2021
//
// Extra for Experts:
// - window can be resized at any time, content will adjust
// - 

// To-do:
// sound effect when card drawn
// optimize suit image code

// optional:
// start from top left and put all cards in order they were drawn (maybe create a used cards array)
// create loading screen for extras for experts


// variables for creating deck of cards
let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cardSuits = ["hearts", "spades", "clubs", "diamonds"];
let deck = [];
let card;
let spades, hearts, clubs, diamonds;

// some switches
let mouseCollidingButton = false;
let cardChosen = false;

// load images
function preload() {
  spades = loadImage("assets/spades.png");
  hearts = loadImage("assets/hearts.png");
  clubs = loadImage("assets/clubs.png");
  diamonds = loadImage("assets/diamonds.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  fill("white");
  textSize(38);
  imageMode(CENTER);

  // create a shuffled deck of cards
  createShuffledDeck();
  console.log(deck);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background("#204c13"); // green

  if (cardChosen === true) {
    displayCard();
  }
  displayButton();
}

function mouseClicked() {
  if (mouseCollidingButton) {
    if (deck.length > 0) {
      card = chooseCard();
    }
    else {
      createShuffledDeck();
      cardChosen = false;
      console.log(deck);
    }
  }
}

function keyPressed() {
  if (key === "d") {
    if (deck.length > 0) {
      card = chooseCard();
    }
  }
  if (key === "s") {
    deck = shuffle(deck);
    console.log(deck);
  }
  if (key === "r") {
    createShuffledDeck();
    cardChosen = false;
    console.log(deck);
  }
}

function chooseCard() {
  let chosenCard;
  chosenCard = deck[0];
  deck.splice(0, 1);
  cardChosen = true; 
  return chosenCard;
}

function createShuffledDeck() {
  let newCard;
  deck = []; // make sure deck is empty
  for (let suit = 0; suit < cardSuits.length; suit++) {
    for (let value = 0; value < cardValues.length; value++) {
      newCard = { Value: cardValues[value], Suit: cardSuits[suit] };
      deck.push(newCard);
    }
  }
  deck = shuffle(deck); // shuffle the deck
}

function displayCard() {
  // draw the white rectangle card
  fill("white");
  rect(width/2 - 125, height/8, 250, 400, 20);

  // display suit image
  if (card.Suit === "spades") {
    image(spades, width/2, height/3 + 75, 100, 100);
    fill("black");
  }
  else if (card.Suit === "hearts") {
    image(hearts, width/2, height/3 + 75, 100, 100);
    fill("red");
  }
  else if (card.Suit === "clubs") {
    image(clubs, width/2, height/3 + 75, 100, 100);
    fill("black");
  }
  else if (card.Suit === "diamonds") {
    image(diamonds, width/2, height/3 + 75, 100, 100);
    fill("red");
  }

  // write into the rectangle 
  textAlign(CENTER);
  if (card.Value === 1) {
    text("A", width / 2, height / 4);
  }
  else if (card.Value === 11) {
    text("J", width / 2, height / 4);
  }
  else if (card.Value === 12) {
    text("Q", width / 2, height / 4);
  }
  else if (card.Value === 13) {
    text("K", width / 2, height / 4);
  }
  else {
    text(card.Value, width / 2, height / 4);
  }
}

function displayButton() {
  // draw card button
  fill("grey");
  rect(width / 2 - 125, 3 * height / 4, 250, 80, 20);
  mouseCollidingButton = collidePointRect(mouseX, mouseY, width / 2 - 125, 3 * height / 4, 250, 80);
 
  // button text
  fill("black");
  textAlign(LEFT);
  if (deck.length > 0) {
    text("Draw Card (d)", width / 2 - 115, 3 * height / 4 + 55);
  }
  else {
    text("Reset", width / 2 - 50, 3 * height / 4 + 55);
  }
}