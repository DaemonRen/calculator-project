// 1. Have each num button attached to an event listener

// 2. Have pre-determined array of numbers

// --dataset numbers?

// 3. Have initial array (Current operand)

// 4. Have baseline sum set to a blank array for all clear and answers (do I need 
// blank sum if I just push innerHTML to output?(sum needed because I can't have 2 arrays that
// are const but also editable?))

// 5. On num button click add innerHTML to initial array in order of incidence

// 6. Operation buttons that on pressing makes initial array a string,
// then passes initial array to second array (previous operand)

// 7. Equals button that when pressed converts initial array to string 
// and uses operation between the initial and second arrays, passing answer to second array

// // if last button operator


const numBtn = document.querySelectorAll(".num__btn");
const acBtn = document.querySelector("#ac__btn");
const delBtn = document.querySelector("#del__btn");
const eqBtn = document.querySelector("#eq__btn");

const opBtn = document.querySelectorAll(".op__btn");
const output = document.querySelectorAll(".output");
const prevOp = document.querySelector("#prev__Op");
const currentOp = document.querySelector("#current__Op");
  
// const addBtn = document.querySelector("#add__btn").addEventListener("click" , clickOp);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
const operators = ["+", "-", "/", "*"]
// let currentLine = currentOp;
let opUsed = "";
let sum = "";


// ADD DIGIT PRESSED TO DISPLAY!
numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", () => {
        numbers.forEach(element => {
            if (element == numBtn.dataset.number) {
            currentOp.innerHTML += element;
            // console.log(currentOp.innerHTML);
            }
            // console.log(numBtn.innerHTML);
        });
    });
});

// ADD OPERATOR PRESSED TO DISPLAY!
opBtn.forEach(opBtn => {
  opBtn.addEventListener("click", () => {
      operators.forEach(element => {
          if (element == opBtn.dataset.operation) {
          prevOp.innerHTML = currentOp.innerHTML;
          currentOp.innerHTML = element += "";
          sum = prevOp.innerHTML;
          }
      });
  });
});

// ALL CLEAR BUTTON!
acBtn.addEventListener("click", () => {
    currentOp.innerHTML = "";
    prevOp.innerHTML = "";
    output.innerHTML = "";
});

eqBtn.addEventListener("click", () => {calcAns()})

calcAns = () => {
  if (currentOp.innerHTML.includes("+")) {
    const working = currentOp.innerHTML;
    const recentAns = working.substring(1);
    currentAns = parseFloat(prevOp.innerHTML) + parseFloat(recentAns);
    console.log(currentAns);
    prevOp.innerHTML = currentAns;
    console.log(prevOp.innerHTML);
    currentOp.innerHTML = "";
  } else if (currentOp.innerHTML.includes("-")) {
    const working = currentOp.innerHTML;
    const recentAns = working.substring(1);
    currentAns = parseFloat(prevOp.innerHTML) - parseFloat(recentAns);
    console.log(currentAns);
    prevOp.innerHTML = currentAns;
    console.log(prevOp.innerHTML);
    currentOp.innerHTML = "";
  } else if (currentOp.innerHTML.includes("*")) {
    const working = currentOp.innerHTML;
    const recentAns = working.substring(1);
    currentAns = parseFloat(prevOp.innerHTML) * parseFloat(recentAns);
    console.log(currentAns);
    prevOp.innerHTML = currentAns;
    console.log(prevOp.innerHTML);
    currentOp.innerHTML = "";
  } else if (currentOp.innerHTML.includes("/")) {
    const working = currentOp.innerHTML;
    const recentAns = working.substring(1);
    currentAns = parseFloat(prevOp.innerHTML) / parseFloat(recentAns);
    console.log(currentAns);
    prevOp.innerHTML = currentAns;
    console.log(prevOp.innerHTML);
    currentOp.innerHTML = "";
  }};
