var app = document.getElementById("app");
app.className = "container-fluid p-5 border";

var count = 0;
var arrayCount = 0;
var symbols = ["C", " ", " ", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", 0, " ", ".", "="]
var userInput = [];
var answer = 9+3;

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
        newCol.className = "col-3 btn btn-outline-success p-4";
        newCol.id = count;
        //console.log(count);
        var text = document.createTextNode(symbols[count]);
        var insert = symbols[count];
        newCol.setAttribute("style", "height: 75px;");
        newCol.addEventListener("click", clickHandler); 
            
        //text.setAttribute("style", "font-size: 3em;")
        newRow.appendChild(newCol);
        newCol.appendChild(text);
        count++;
    }
}

function clickHandler(){
    if (symbols[this.id]!== "=" && symbols[this.id] !== "C" && symbols[this.id] !== "."  && symbols[this.id] !== " "){
    
    userInput[arrayCount] = symbols[this.id];
    document.getElementById("numField").innerHTML = userInput.join("");
    console.log("button click");
    console.log(userInput);
    arrayCount++;}

    else if (symbols[this.id] == "="){
        answer = parseInt(userInput.join(""));
        console.log(answer);
    }

    else if (symbols[this.id == "C"]){
        console.log("clear");
    }

    else if (symbols[this.id] == "."){
        console.log("decimal");
    }

}