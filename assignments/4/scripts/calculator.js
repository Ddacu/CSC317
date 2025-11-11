const output = document.getElementById("output");
let values;
let currentValue = ")";
let plusMinus = "+";

function addButtonValue(input) {

    // If input equals AC this will reset it to 0
   if(input == "AC"){
        output.value = "";
        values.value = "";

        return;
    }
    
    // Based off the variables above we will assume we start with ), so that 
    // on first run and pressing the button, it will start with ( and the
    // currentValue tracks it, so that each time it can swap between them.
    if (input == "()"){

        if(currentValue == ")"){
            currentValue = "(";
            input = "(";

        } else if (currentValue == "("){
            currentValue = ")";
            input = ")";
        }
    }


    if(input == "+/-"){

    // If it's postive value already it will become a negative and if it's
    // already negative at the start it will remove it from the output.value
    // array
        if(output.value[0] != "-"){
            output.value = "-" + output.value;

        } else if (output.value[0] == "-"){
            output.value = output.value.slice(1);
        }

        return;
    }

    // Runs the calculations
    if(input == "="){
       output.value = eval(output.value);
       return;
    }

    // Adds the input, so that it appears on the input screen
    output.value += input;

    return;
}