function keyInput(value) {
  document.getElementById('screen').value += value
}
function backspace() {
  let value = document.getElementById('screen').value.slice(0, -1)
  document.getElementById('screen').value = value
}

function clr() {
  document.getElementById('screen').value = ''
}

function solve() {
  let value = document.getElementById('screen').value
  let result = eval(value)
  document.getElementById('screen').value = result
}
