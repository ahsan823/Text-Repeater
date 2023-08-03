console.log("Hello");
let input = document.getElementById("input")
let Repeat = document.getElementById("Repeat")
let number = document.getElementById("number")
let textarea = document.getElementById("textarea")
let Copy = document.getElementById("Copy")
let UpperCase = document.getElementById("UpperCase")
let UpperCase2 = document.getElementById("UpperCase2")
let LowerCase = document.getElementById("LowerCase")
let LowerCase2 = document.getElementById("LowerCase2")

Repeat.addEventListener("click", () => {
    // console.log(input.value);
    // console.log(number.value);
    // console.log(textarea.value);
    let result = ""
    for (let i = 0; i < number.value; i++) {
        result += input.value;
    }
    textarea.value = result;
})

Copy.addEventListener("click", () => {
    textarea.select();
    navigator.clipboard.writeText(textarea.value)
    alert("Copied");
})

UpperCase.addEventListener("click", () => {
    textarea.value = input.value.toUpperCase();
})
UpperCase2.addEventListener("click", () => {
    textarea.value = textarea.value.toUpperCase();
})

LowerCase.addEventListener("click", () => {
    textarea.value = input.value.toLowerCase();
})
LowerCase2.addEventListener("click", () => {
    textarea.value = textarea.value.toLowerCase();
})