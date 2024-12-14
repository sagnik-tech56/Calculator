//<DOM Manipulation>
//<Event Handling>
//<Arrow Functions>
//<Error Handling>
//<Attributes Manipulation>
//<Updating Element Values>

document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        const display = document.querySelector("#display");
        const value = button.getAttribute("data-value");
        // const trueValue = Math.round(Math.random() * 10 % 9);

        if (value === "C") {
            display.value = "";
        } else if (value === "=") {
            display.value = eval(display.value);
        } else if (value === "+" || value === "-" || value === "*" || value === "/" || value === ".") {
            display.value += value;
        } else {
            display.value += value;
        }
        console.log(display.value);
    })
})