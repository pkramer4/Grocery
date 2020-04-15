// initialize totals
var a = 0;
var c = 0;
var e = 0;
var s = 0;

function addAshley() {
  var textBox = document.querySelector('input').value;
  var number = parseInt(textBox, 10)
  a = a + number;
  document.querySelector('input').value = '';
  console.log('Ashley' + a);
}
function addCass() {
  var textBox = document.querySelector('input').value;
  var number = parseInt(textBox, 10)
  c = c + number;
  document.querySelector('input').value = '';
  console.log('Cass' + c);
}
function addEd() {
  var textBox = document.querySelector('input').value;
  var number = parseInt(textBox, 10)
  e = e + number;
  document.querySelector('input').value = '';

}
function addSequoia() {
  var textBox = document.querySelector('input').value;
  var number = parseInt(textBox, 10)
  s = s + number;
  document.querySelector('input').value = '';
}

function finish() {
  document.querySelector('#ashTotal').innerHTML =
    'Ashley owes $'+(a/100)
  document.querySelector('#cassTotal').innerHTML =
    'Cass owes $'+(c/100);
  document.querySelector('#edTotal').innerHTML =
     'Ed owes $'+(e/100);
  document.querySelector('#seqTotal').innerHTML =
    'Sequoia owes $'+(s/100);

}
