let n = prompt(
  "how many iterations of the fibonacci sequence do you want to see?"
);

let myArray = [];

const fibonacciSequence = n => {
  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      myArray.push(i);
    } else {
      let newNumber = myArray[myArray.length - 1] + myArray[myArray.length - 2];
      myArray.push(newNumber);
    }
  }
  console.log(myArray);
};
console.log(fibonacciSequence(n));
