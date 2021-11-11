



// Define my constants
const numBtn = document.querySelectorAll(".num__btn");
// const opBtn = document.querySelectorAll(".op__btn");
const output = document.querySelectorAll(".output");
const prevOp = document.querySelectorAll(".prev__Op");
const currentOp = document.querySelector("#current__Op");

// const multiBtn = document.querySelector("#multi__btn");
// const divideBtn = document.querySelector("#divide__btn");
// const addBtn = document.querySelector("#add__btn");
// const subBtn = document.querySelector("#sub__btn");

// const decimalBtn = document.querySelector("#decimal__btn");
const acBtn = document.querySelector("#ac__btn");
const delBtn = document.querySelector("#del__btn");
const eqBtn = document.querySelector("#eq__btn");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
let sum = [];


// 1. Have each num button attached to an event listener

// 2. Have pre-determined array of numbers

// --dataset numbers?

// 3. Have initial array (Current operand)

// 4. Have baseline sum set to a blank array for all clear and answers (do I need 
// blank sum if I just push innerHTML to output?)

// 5. On num button click add innerHTML to initial array in order of incidence

// 6. Operation buttons that on pressing makes initial array a string,
// then passes initial array to second array (previous operand)

// 7. Equals button that when pressed converts initial array to string 
// and uses operation between the initial and second arrays, passing answer to output array

// numBtn.forEach(button =>{
//     button.addEventListener("click" , () => {
//         Calculator.inputNumber(button.textContent)
//         Calculator.updateOutput()
//     })
// })

// class Calculator {
//     constructor (currentOp, prevOp){
//         this.prevOp = prevOp
//         this.currentOp = currentOp
//     }

//     clear() {
//         this.currentOp = ""
//         this.prevOp = ""
//         this.operation = undefined
    
//     }
    
//     delete() {
    
//     }
    
//     inputNumber(number) {
//         this.currentOp = number
//     }
    
//     inputOperation(operation) {
    
//     }
    
//     compute() {
    
//     }
    
//     updateOutput () {
//         this.currentOp.innerText = this.currentOp
//     }
// }

// numBtn.forEach(btn =>{
//     btn.addEventListener("click" , () => {
//         console.log(btn.innerHTML)
//     })
// })

// opBtn.forEach(button =>{
//     button.addEventListener("click" , () => {
//         console.log(button)
//     })
// })

// acBtn.forEach(button =>{
//     button.addEventListener("click" , () => {
//         console.log(button)
//     })
// })

// delBtn.forEach(button =>{
//     button.addEventListener("click" , () => {
//         console.log(button)
//     })
// })

// eqBtn.forEach(button =>{
//     button.addEventListener("click" , () => {
//         console.log(button)
//     })
// })

// WORKS

numBtn.forEach(numBtn => {
    numBtn.addEventListener("click", () => {
        numbers.forEach(element => {
            if (element == numBtn.dataset.number) {
            currentOp.innerHTML += element;
            console.log(currentOp.innerHTML);
            }
            // console.log(numBtn.innerHTML);
        });
    });
});

acBtn.addEventListener("click", () => {
    currentOp.innerHTML = "";
    prevOp.innerHTML = "";
    output.innerHTML = "";
})
