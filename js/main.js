var app = document.getElementById("app");
app.className = "container-fluid p-5 border";

var count = 0;
var arrayCount = 0;
var symbols = ["C", " ", " ", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, " ", ".", "="]
var userInput = [];
var answer = 0;
var tempNumber = 0;
var num1 = 0;
var num2 = 0;
var operator = "";
// Create UI
//Create Title

var newRow = document.createElement("div");
newRow.className = "row";
var title = document.createElement("div");
title.className = "h-1 btn btn-success btn-lg btn-block";
var text = document.createTextNode("Calculator");
app.appendChild(newRow);
newRow.appendChild(title);
title.appendChild(text);

//Create Text field
var newRow = document.createElement("div");
newRow.className = "row";
var numField = document.createElement("div");
numField.className = "btn btn-lg btn-block text-right border bg-light";
numField.id = "numField";
numField.setAttribute("style", "height: 50px;")
app.appendChild(newRow);
newRow.appendChild(numField);

//Create buttons
for (var i = 0; i < 5; i++) {
    var newRow = document.createElement("div");
    newRow.className = "row";
    app.appendChild(newRow);

    for (var j = 0; j < 4; j++) {
        var newCol = document.createElement("div");
        newCol.className = "col-3 btn btn-outline-success p-2";
        newCol.id = count;
        //console.log(count);
        var text = document.createTextNode(symbols[count]);
        //var insert = symbols[count];
        newCol.setAttribute("style", "height: 75px;");
        newCol.addEventListener("click", clickHandler);

        //text.setAttribute("style", "font-size: 3em;")
        newRow.appendChild(newCol);
        newCol.appendChild(text);
        count++;
    }
}

function clickHandler() {

var buttonPress = symbols[this.id];
console.log({buttonPress});

var isNum = 0;

if (isNaN(buttonPress) == false  || buttonPress == "."){
    //console.log('number');
   
    isNum = 0;
}

else{
    isNum = symbols[this.id];
    //console.log(isNum);
}

switch (isNum){

    case 0:
        userInput[count] = buttonPress;
        count++;
        document.getElementById("numField").innerHTML = userInput.join("");
        tempNumber = Number(userInput.join(""))
        console.log({tempNumber}, {num1}, {num2});

    break;

    case "+":
        operator = "+";
        document.getElementById("numField").innerHTML = "+";
        num1 += tempNumber;
        num2 = 0;
        userInput = [];
        count = 0;
        tempNumber = 0;
        console.log('addition', {tempNumber}, {num1}, {num2});
    break;
    
    case "-":
        operator = "-";
            document.getElementById("numField").innerHTML = "-";
            
            if (num1 == 0){
                num1 = num1 +tempNumber;}
            else{
                num1 = num1 - tempNumber;
            }
            
            num2 = 0;
            userInput = [];
            count = 0;
            tempNumber = 0;
            console.log('subtract', {tempNumber}, {num1}, {num2});
    break;

    case "x":
            operator = "x";
            document.getElementById("numField").innerHTML = "x";
            num1 = num1 * tempNumber;
            num2 = 0;
            userInput = [];
            count = 0;
            tempNumber = 0;
            console.log('multiply', {tempNumber}, {num1}, {num2});
    break;

    case "/":
            operator = "/";
            document.getElementById("numField").innerHTML = "/";
            num1 = num1 / tempNumber;
            num2 = 0;
            userInput = [];
            count = 0;
            tempNumber = 0;
            console.log('divide', {tempNumber}, {num1}, {num2});
    break;

    case "=":
        num2 = tempNumber;
        console.log('equals', {tempNumber}, {num1}, {num2})
        if (operator == "+"){
        document.getElementById("numField").innerHTML = num1 + num2;
        num1 = num1 + num2;
        }
        else if(operator == "-"){
            document.getElementById("numField").innerHTML = num1 - num2;
            num1 = num1 - num2;
        }
        else if(operator == "x"){
            document.getElementById("numField").innerHTML = num1 * num2;
            num1 = num1 * num2;
        }
        else if(operator == "/"){
            document.getElementById("numField").innerHTML = num1 / num2;
            num1 = num1 / num2;
        }
        //console.log(number);
        tempNumber = 0;
        num2 = 0;
        console.log('equals', {tempNumber}, {num1}, {num2})
        
        
        
    break;

    case "C":
        console.log('clear');
        tempNumber = 0;
        num1 = 0;
        num2 = 0;
        userInput = [];
        document.getElementById("numField").innerHTML = "";
        console.log({tempNumber}, {num1}, {num2})
    break;
    
    
}
}

