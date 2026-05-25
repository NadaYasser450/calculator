document.addEventListener(`DOMContentLoaded` , ()=> {
    const display = document.getElementById("result");
    const buttons = document.querySelectorAll(".btn");

    let currentInput = "";
    let operator = null ;
    let firstoperand = "";
    let secondoperand = "";

    buttons.forEach(button => {
        button.addEventListener(`click`, ()=> {
            const value = button.getAttribute("data-value");

            if (value === "c"){
                //clear everythink
                currentInput = "";
                operator = null;
                firstoperand = "";
                secondoperand = "";
                display.value = "";
            }
            else if (value ==="Del") {
                //delete last character
                currentInput = currentInput.toString()
                currentInput = currentInput.slice(0 , -1);
                display.value = currentInput;
            }
            else if (value==="="){
                //perform calculation

                if(operator && firstoperand && currentInput){
                    secondoperand = currentInput;
                    const result = calculate (firstoperand , secondoperand , operator)
                    display.value = result;
                    currentInput = result;
                    operator = null;
                    secondoperand = "";
                }
            }

            else if (["+", "-" , "*" , "/"].includes(value)){
                if(currentInput){
                    operator = value;
                    firstoperand = currentInput;
                    currentInput = "";
                }

            }

            else {
                currentInput += value;
                display.value = currentInput;
                
            }
        })
    })

    function calculate(num1 , num2 , operator){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        switch (operator){
            case "+": 
                return num1 + num2;
            case "-":
                return num1 - num2;
            case "*":
                return num1 * num2;
            case "/":
                return num1 / num2;
            default:
                return 0;
        }
    }
})