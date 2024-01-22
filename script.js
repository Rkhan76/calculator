let keyInputString = ''
let percentageClicked = 0;
let parenthesis = 0

// Part to show the input and output on the screen

function handleShowInputInUpperPart(input) {
  document.getElementById('upper').innerText = input
  
}
function handleShowInputLowerPart(result) {
  document.getElementById('middle').innerText = result
}

// handle the key input
function handleKeyInput(key) {
        keyInputString += key.innerText
        handleShowInputInUpperPart(keyInputString)
    
}

// handle the clear key
function handleTheClearKey() {
  keyInputString = ''
  handleShowInputInUpperPart('')
  handleShowInputLowerPart('')
}

// handle Parenthesis
function handleParenthesis() {
  if (parenthesis == 0) {
    keyInputString += '('
    parenthesis = 1
    handleShowInputInUpperPart(keyInputString)
  } else {
    keyInputString += ')'
    parenthesis = 0
    handleShowInputInUpperPart(keyInputString)
  }
}

// handle parensentage key
function handlePercentageOperator(){
    keyInputString += '/100'
     handleShowInputInUpperPart(keyInputString)
     const result = eval(keyInputString)
     handleShowInputLowerPart(result)
}

// handle cut functionality
function handleCutButton() {
  keyInputString = keyInputString.slice(0, -1)
  handleShowInputInUpperPart(keyInputString)
}

// handleOutput app
function handleOutput(output) {
  try {
    const result = eval(keyInputString)
    handleShowInputLowerPart(result)
    return
  } catch (error) {
    handleShowInputLowerPart('Invalid input')
    return 'Error'
  }
}
