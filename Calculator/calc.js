// global variables
var firstVal = "0";
var secondVal = "0";
var displayVal = "";
var operator = "";
var power = false;

// function to turn the calculator on
function powToggle(){
  if (!power) {
    displayVal = "0"
    toggleOnOff(true);
    power = true;
  } else {
    displayVal = "";
    toggleOnOff(false);
    reset();
    power = false;
  }
  display();
}

// function to reset the orientation of the power button
function toggleOnOff(val){
  if (val == true)
    document.getElementsByClassName('dblock1')[0].setAttribute("class", "on");
  else
    document.getElementsByClassName('on')[0].setAttribute("class", "dblock1");
}

// function to display the current display value
function display(){
  document.getElementById("calcDisplay").innerHTML = displayVal;
}

// function to build operands
function buildOp(val) {

  if (power) {
    // if operator is empty, the client is building
    // firstVal
    if (operator == "") {
      if (firstVal == "0")
        firstVal = val.toString();
      else
        firstVal += val;
      displayVal = firstVal;
    }
    // else the client is building the second operator
    else {
      if (secondVal == "0")
        secondVal = val.toString();
      else
        secondVal += val;
      displayVal = secondVal;
    }
    // display the current displayVal
    display();
  }
}

// function to set operand to positive or negative
function setCoeff() {
  if (power) {
    if (operator == "") {
      firstVal = firstVal*-1;
      displayVal = firstVal;
    }
    else {
      secondVal = secondVal*-1;
      displayVal = secondVal;
    }
    display();
  }
}

// function to set operator
function setOp(val) {
  if (power)
    operator = val.toString();
  if (["sqrt", "sin", "cos", "tan"].includes(operator))
    compute();
}

// function to reset operands
// and displayVal
function reset(){
  if (power) {
    firstVal = "0";
    secondVal = "0";
    operator = "";
  }
}

// function to compute Result using the
// current firstVal, secondVal, and operand
function compute() {
  if (power) {
    switch (operator) {
      case "*":
        displayVal = parseFloat(firstVal) * parseFloat(secondVal);
        break;
      case "/":
        displayVal = parseFloat(firstVal) / parseFloat(secondVal);
        break;
      case "+":
        displayVal = parseFloat(firstVal) + parseFloat(secondVal);
        break;
      case "-":
        displayVal = parseFloat(firstVal) - parseFloat(secondVal);
        break;
      case "sqrt":
        displayVal = Math.sqrt(parseFloat(firstVal));
        break;
      case "sin":
        displayVal = Math.sin(parseFloat(firstVal));
        break;
      case "cos":
        displayVal = Math.cos(parseFloat(firstVal));
        break;
      case "tan":
        displayVal = Math.tan(parseFloat(firstVal));
        break;
    }
    display();
    reset();
  }
}

// function to truncate the current operand
// when clear button is pressed
function backspace() {
  if (power) {
    if (operator == ""){
      firstVal = firstVal.length == 1 ? "0" :
                 firstVal.substring(0, firstVal.length - 1);
      displayVal = firstVal;
    }
    else {
      secondVal = secondVal.length == 1 ? "0" :
                 secondVal.substring(0, secondVal.length - 1);
      displayVal = secondVal;
    }
    display();
  }
}

// function to clear all values
function clr() {
  if (power) {
    firstVal = "0";
    secondVal = "0";
    displayVal = "0";
    operator = "";
    display();
  }
}
