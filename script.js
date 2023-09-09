function clearScreen() {
  document.getElementById("hasil").value = "";
}

function display(value) {
  document.getElementById("hasil").value += value;
}

function calculate() {
  var p = document.getElementById("hasil").value;
  var q = eval(p);
  document.getElementById("hasil").value = q;
}
