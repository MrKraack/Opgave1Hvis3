document.getElementById("btn").addEventListener("click", function (n) {
  var n = prompt("Skriv et tal for at bergene summen af cifre");
  var s = 0;
  while (n != 0) {
    s = s + (n % 10);
    n = Math.floor(n / 10);
  }
  console.log(s);
});