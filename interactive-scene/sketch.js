// Interactive Scene Assignment
// Kayaan Tharani
// October 1st, 2021
//
// Description: 
// Random Card Chooser
// This is a virtual deck of cards. You can draw a card, shuffle the deck, and start over.
//
// Extra for Experts:
// - window can be resized at any time, content will adjust to fit
// - 3 different sound effects for 3 different actoins user can do

/* -------------------------------------------------------------------------------------------------- */

// variables for creating deck of cards
let cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let cardSuits = ["hearts", "spades", "clubs", "diamonds"];
let deck = [];

// global variables to be used later
let card;
let spades, hearts, clubs, diamonds;
let createDeckSound, shuffleSound, drawCardSound;

// some switches
let mouseCollidingButton = false;
let cardChosen = false;

function preload() {
  // images for suits
  spades = loadImage("assets/spades.png");
  hearts = loadImage("assets/hearts.png");
  clubs = loadImage("assets/clubs.png");
  diamonds = loadImage("assets/diamonds.png");

  // sound effects
  soundFormats("mp3");
  createDeckSound = loadSound("assets/card_deck");
  shuffleSound = loadSound("assets/card_shuffle");
  drawCardSound = loadSound("assets/draw_card");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill("white");
  imageMode(CENTER);

  createShuffledDeck();
  console.log(deck);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight); // canvas adjusts to window size
  background("#204c13"); // green

  // call functions
  displayButton();
  drawInstructions();
  if (cardChosen) {
    displayCard();
  }  
}

function mouseClicked() {
  // check if button is clicked
  if (mouseCollidingButton) {
    if (deck.length > 0) {
      card = chooseCard();
    }
    else {
      // if deck is empty then make a new deck
      createShuffledDeck();
      cardChosen = false;
      console.log(deck);
    }
  }
}

function keyPressed() {
  // draw card
  if (key === "d") {
    if (deck.length > 0) {
      card = chooseCard();
    }
  }
  // shuffle deck
  if (key === "s") {
    if (deck.length > 0) {
      deck = shuffle(deck);
      shuffleSound.play();
      console.log(deck);
    }
  }
  // reset the deck
  if (key === "r") {
    createShuffledDeck();
    cardChosen = false;
    console.log(deck);
  }
}

function chooseCard() {
  // take first card from deck and then remove it from the deck
  let chosenCard;
  chosenCard = deck[0];
  deck.splice(0, 1);
  cardChosen = true;
  drawCardSound.play(); // sound effect
  return chosenCard;
}

function createShuffledDeck() {
  let newCard;
  deck = []; // make sure deck is empty

  // iterate through every suit and value combination and add it to the deck
  for (let suit = 0; suit < cardSuits.length; suit++) {
    for (let value = 0; value < cardValues.length; value++) {
      // create object in new card variable with value to be replaced every time the loop runs
      newCard = { 
        Value: cardValues[value], 
        Suit: cardSuits[suit] 
      };
      deck.push(newCard);
    }
  }
  deck = shuffle(deck); // shuffle the deck since it will always be made in order
  createDeckSound.play(); // sound effect
}

function displayCard() {
  // draw an empty white card
  fill("white");
  rect(width/2 - 125, height/8, 250, 400, 20);

  // display suit image on rectangle
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

  // write value onto the rectangle 
  textAlign(CENTER);
  textSize(48);
  if (card.Value === 1) {
    text("A", width / 2, height / 4); // 1 => A
  }
  else if (card.Value === 11) {
    text("J", width / 2, height / 4); // 11 => J
  }
  else if (card.Value === 12) {
    text("Q", width / 2, height / 4); // 12 => Q
  }
  else if (card.Value === 13) {
    text("K", width / 2, height / 4); // 13 => K
  }
  else {
    text(card.Value, width / 2, height / 4);
  }
}

function displayButton() {
  // draw card button
  fill("grey");
  rect(width / 2 - 125, 3 * height / 4, 250, 80, 20);

  // collision detection between mouse and button
  mouseCollidingButton = collidePointRect(
    mouseX, mouseY, width / 2 - 125, 3 * height / 4, 250, 80
  );
 
  // button text
  fill("black");
  textAlign(LEFT);
  textSize(36);

  // change text to 'reset' if user has drawn every card already
  if (deck.length > 0) {
    text("Draw Card (d)", width / 2 - 115, 3 * height / 4 + 55);
  }
  else {
    text("Reset", width / 2 - 50, 3 * height / 4 + 55);
  }
}

function drawInstructions() {
  // text in top right of screen
  text("Commands: ", width - 250, height/10);
  textSize(24);
  text("Shuffle (s)", width - 250, height/10 + 30);
  text("Draw Card (d)", width - 250, height/10 + 60);
  text("Reset (r)", width - 250, height/10 + 90);
}