
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
  resultDiv.text("0");
});
