let values;
let paraCheck = "0";
let plusMinus = "+";
let output = document.getElementById("output");

function addValue(userInput) {

    // If userInput equals AC this will reset it to 0 and takes
    // priority over the error message, it needs to be 
    // the first userInput checked
    if(userInput == "AC"){
        output.value = "";
        return;

    // This prevents the user from pressing the buttons
    // during this error screen
    } else if(output.value == "Invalid (Press AC)"){
        userInput = "";
    }
    
    // Based off the variables above we will assume we start with ), so that 
    // on first run and pressing the button, it will start with ( and the
    // paraCheck tracks it, so that each time it can swap between them.
    // However, it also check if the previous ( is the same one

    // Note: This wasn't in instructions, but I added it because of the 
    // Samsung Calculator which I used for inspiration for what it should
    // look and act like.

    // This is used for event listeners
    if(userInput == "("){
        output.value += userInput;
        return;
    } else if(userInput == ")"){
        output.value += userInput;
        return;
    }
    
    if (userInput == "()"){

        // If the first button pressed is the parantheses it start with
        // "("
        if(output.value[0] != "("){
            userInput = "(";
        } else {
            if(paraCheck == "0"){
                userInput = "(";

            } else if (paraCheck == "1"){
                userInput = ")";
            }

            if(output.value[output.value.length - 1] == "("){
                paraCheck = "1";
                userInput = "(";
            } else if(output.value[output.value.length - 1] == ")"){
                paraCheck = "0";
                userInput = ")"; 
            }
        }
        output.value += userInput;
        return;

    }

    
    

    // If it's postive value already it will become a negative and if it's
    // already negative at the start it will remove it from the output.value
    // array
    if(userInput == "+/-"){

        if(output.value[0] != "-"){
            output.value = "-" + output.value;

        } else if (output.value[0] == "-"){
            output.value = output.value.slice(1);
        }

        return;
    }

    // Changes them to symbols that can be used in the calculations
    if(userInput == "÷"){
        userInput = "/";
    } else if (userInput == "×"){
        userInput = "*";
        
    }
    
    // Uses the eval function to calculate, but also tries to catch
    // if there's an error with the calculation to tell the user
    // it won't work    
    if(userInput == "=" || userInput == "Enter"){
        try {
            output.value = eval(output.value);
            output.value = "Result: " + output.value;
        } catch (error) {
            output.value = "Error: Press AC or Backspace"; 
        }
        
        return;
    }

    // Adds the userInput, so that it appears on the userInput screen
    output.value += userInput;

    return;
}


document.addEventListener('keydown', eventListen => {

    // If it isn't "Not a Number" then it's a number, so we add it
    if(!isNaN(eventListen.key)){
        addValue(eventListen.key);
    } 
    
    if (eventListen.key == "(" || eventListen.key == ")"){
        addValue(eventListen.key);
    }

    // I do it like this because of addValue as we only store it in output.value
    // if it's these symbols and then we convert it back to / and *.
    if (eventListen.key == "÷"){
        addValue("/");
    } else if (eventListen.key == "×"){
        addValue("*");
    }

    // This will clear it like AC
    if (eventListen.key == "Backspace"){
        addValue("AC");
    }

    if(eventListen.key == "%" || eventListen.key == "+" || eventListen.key == "-" || eventListen.key == "." ){
        addValue(eventListen.key);
    }

    // This will automatically evaluate because of addValue
    if(eventListen.key == "=" || eventListen.key == "Enter"){
        addValue(eventListen.key);
    }

    return;
});