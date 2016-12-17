var copyBtn = document.querySelector('.js-copyBtn');
var txtToCopy = document.querySelector('.js-txtToCopy');
copyBtn.addEventListener('click', function(event) {
  // Select the text
  selectText(txtToCopy);
  //Copy
  copyTextSelected();
  //Unselect
  unselectText();
});

function selectText(el) {
  var range = document.createRange();
  range.selectNode(el);
  window.getSelection().addRange(range);
}

function unselectText() {
  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported
  window.getSelection().removeAllRanges();
}

function copyTextSelected() {
  try {
    // Now that we've selected the anchor text, execute the copy command
    var successful = document.execCommand('copy');
    if(successful) {
      copySuccess();
    } else {
      copyError();
    }
  } catch(err) {
    copyError();
  }
}

function copyError() {
  console.log('Oops, unable to copy');
}

function copySuccess() {
  console.log('Copy email command was successful');
}
