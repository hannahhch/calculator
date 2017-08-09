
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

/*when operator button is click, clear numbers*/
$('.math-btn').click(function(){
  operator = $(this).text();
  newNumber = number;
  number = "";
  resultDiv.text(operator);
});

$('.clear').click(function(){
  number = "";
  resultDiv.text("0");
  if ($(this).attr("class")=== "clear") {
    newNumber = "";
  }
});

$('.equal-btn').click(function(){
  if (operator === "+") {
    number = (parseInt(number)+ parseInt (newNumber)).toString();
  } else if (operator === "-") {
    number = (parseInt(newNumber) - parseInt (number)).toString();
  } else if (operator === "/") {
    number = (parseInt(newNumber) / parseInt (number)).toString();
  } else if (operator === "x") {
    number = (parseInt(newNumber) * parseInt (newNumber)).toString();
  }
  resultDiv.text(number);
  number = "";
  newNumber = "";
});
