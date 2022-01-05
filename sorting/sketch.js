// Bubble Sort 

let someList = [5, 15, 3, 8, 9, 1, 20, 7];
let list2 = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(aList){
  let swapDone = true;
  // for (let j = 0; j < aList.length-1; j++) {
  while (swapDone) {
    swapDone = false;
    for (let i = 0; i < aList.length-1; i++) {
      let current = aList[i];
      if (aList[i] > aList[i+1]) {
        swapDone = true;
        aList[i] = aList[i+1];
        aList[i+1] = current;
      }
    }
  }
  // }
  return aList;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(someList));
}

function draw() {
  background(0);
  
}
