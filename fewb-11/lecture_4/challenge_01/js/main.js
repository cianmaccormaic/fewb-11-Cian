//Write a function that takes a positive integer N and then calculates and displays the sum of
// the first N odd integers. For example, if N is 4, your function should display the
// value 16, which is 1 + 3 + 5 + 7.

function oddSum(inputNumber) {
  //reusing inputNumber assuming variable scope is fine
  let output = 0;
  console.log("function inputNumber: " + inputNumber);

  if (inputNumber > 1 ** isNaN(inputNumber)) {
    for (let i = 1; i <= inputNumber; i++) {
      // inner loop
      console.log("-----iteration number: " + i);
      if (i == 1) {
        output = 1;
        previousOutput = output;
      } else {
        output += previousOutput + 2;
        previousOutput = previousOutput + 2;
        console.log("just added: " + previousOutput);
      }

      console.log("so now the output is: " + output);
    }
    console.log("done with function, returning: " + output);
    return output;
  } else alert("Number out of bounds");
}

//
// MAIN
number = parseInt(prompt("Challenge 01 - Enter a positive integer "));

while ((isNaN(number) || number <= 1) && number != "x") {
  number = parseInt(prompt("No, doofus - Enter a positive integer"));
  console.log("=== Bad Input " + number);
}
console.log("=== Input has been validated: " + number);

alert(oddSum(number));
