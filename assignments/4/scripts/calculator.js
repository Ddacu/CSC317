const output = document.getElementById("output");
let values;
let currentValue = ")";
let plusMinus = "+";

function addButtonValue(input) {
   if(input == "AC"){
        output.value = "";
        values.value = "";

        return;
    } else if (input == "()"){

        if(currentValue == ")"){
            currentValue = "(";
            output.value += "(";

        } else if (currentValue == "("){
            currentValue = ")";
            output.value += ")";
        }

        return;
    }

    if(input == "+/-"){

    // If it's postive value already it will become a negative
        if(!(output.value.startsWith("-"))){
            output.value = "-" + output.value;

        } else if (output.value.startsWith("-")){
            output.value = output.value.slice(1);
        }
        return;
    }

    if(input == "="){
       output.value = eval(output.value);
       return;
    }

    output.value += input;
}