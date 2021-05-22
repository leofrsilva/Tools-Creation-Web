function onShowReset(){
    var btnReset = document.getElementById('code-container-reset');
    if (btnReset.getAttribute('class') == 'show-container') {
        btnReset.setAttribute('class', 'hide-container');
    }
    else {
        btnReset.setAttribute('class', 'show-container');
    } 
}

function onShowScroll(){
    var btnReset = document.getElementById('code-container-scroll');
    if (btnReset.getAttribute('class') == 'show-container') {
        btnReset.setAttribute('class', 'hide-container');
    }
    else {
        btnReset.setAttribute('class', 'show-container');
    } 
}

function copyCodeReset(){
  /* Get the text field */
  var code = document.getElementById("codigo-reset");

  const inputText = document.createElement('textarea');
  inputText.value = code.textContent;
  document.body.appendChild(inputText);

  /* Select the text field */
  inputText.select();
  inputText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  document.body.removeChild(inputText);
}

function copyCodeScroll(){
    /* Get the text field */
    var code = document.getElementById("codigo-scroll");
  
    const inputText = document.createElement('textarea');
    inputText.value = code.textContent;
    document.body.appendChild(inputText);
  
    /* Select the text field */
    inputText.select();
    inputText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    document.body.removeChild(inputText);
  }