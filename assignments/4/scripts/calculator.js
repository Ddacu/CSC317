let values;
let paraCheck = "0";
let plusMinus = "+";
const output = document.getElementById("output");

function addValue(input) {

    // If input equals AC this will reset it to 0 and takes
    // priority over the error message
    if(input == "AC"){
        output.value = "";
        return;

    // This prevents the user from pressing the buttons
    // during this error screen
    } else if(output.value == "Invalid (Press AC)"){
        input = "";
    }
    
    // Based off the variables above we will assume we start with ), so that 
    // on first run and pressing the button, it will start with ( and the
    // paraCheck tracks it, so that each time it can swap between them.
    // However, it also check if the previous ( is the same one

    // Note: This wasn't in instructions, but I added it because of the 
    // Samsung Calculator which I used for inspiration for what it should
    // look and act like.
    if (input == "()"){

        if(paraCheck == "0"){
            input = "(";

        } else if (paraCheck == "1"){
            input = ")";
        }

        if(output.value[output.value.length - 1] == "("){
            paraCheck = "1";
            input = "(";
        } else if(output.value[output.value.length - 1] == ")"){
            paraCheck = "0";
            input = ")"; 
        }

        // If the first button pressed is the parantheses it start with
        // "("
        if(output.value[0] != "("){
            input = "(";
        }

    }

    // If it's postive value already it will become a negative and if it's
    // already negative at the start it will remove it from the output.value
    // array
    if(input == "+/-"){

        if(output.value[0] != "-"){
            output.value = "-" + output.value;

        } else if (output.value[0] == "-"){
            output.value = output.value.slice(1);
        }

        return;
    }

    // Changes them to symbols that can be used in the calculations
    if(input == "÷"){
        input = "/";
    } else if (input == "×"){
        input = "*";
        
    }
    
    // Uses the eval function to calculate, but also tries to catch
    // if there's an error with the calculation to tell the user
    // it won't work    
    if(input == "="){
        try {
            output.value = eval(output.value);
            output.value = "Result: " + output.value;
        } catch (error) {
            output.value = "Invalid (Press AC)"; 
        }
        
        return;
    }

    // Adds the input, so that it appears on the input screen
    output.value += input;

    return;
}