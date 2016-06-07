$(function () {
  var factorial = parseInt(prompt("Enter a number please"));
  var total = 1;
  for (i=1; i <= factorial; i++) {
    total *= i;
  }
  alert(total);
});
