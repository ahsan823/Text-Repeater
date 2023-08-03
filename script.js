console.log("Hello");
let input = document.getElementById("input")
let Repeat = document.getElementById("Repeat")
let number = document.getElementById("number")
let textarea = document.getElementById("textarea")
let Copy = document.getElementById("Copy")

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