
let number = "";
let newNumber = "";
let operator = "";
/*start calculator at 0*/
let resultDiv = $('#result');
resultDiv.text('0');

/* when a number button is clicked, display it*/
$('.num-btn').click(function(){
  number += $(this).text();
  resultDiv.text(number);
});

/*when math button is clicked, display operator*/
$('.math-btn').click(function(){
  operator = $(this).text();
  newNumber = number;
  number = "";
  resultDiv.text(operator);
});

/*when clear button is click, clear */
$('.clear').click(function(){
  number = "";
  resultDiv.text("0");
  if ($(this).attr("class")=== "clear") {
    newNumber = "";
  }
});

$('.equal-btn').click(function(){
  if (operator === "+") {
    number = (parseFloat(number)+ parseFloat (newNumber)).toString();
  } else if (operator === "-") {
    number = (parseFloat(newNumber) - parseFloat (number)).toString();
  } else if (operator === "/") {
    number = (parseFloat(newNumber) / parseFloat (number)).toString();
  } else if (operator === "x") {
    number = (parseFloat(newNumber) * parseFloat (newNumber)).toString();
  }
  resultDiv.text(number);
  number = "";
  newNumber = "";
});
