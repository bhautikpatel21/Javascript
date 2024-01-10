function countWordLengths() {
    var text = document.getElementById('textInput').value;
  
    text = text.trim();
  
    if (text === '') {
      document.getElementById('result').innerText = 'Please enter some text.';
      return;
    }
  
    var words = text.split(/\s+/);
  
    words = words.filter(function (word) {
      return word.length > 0;
    });
  
    document.getElementById('result').innerText = 'Number of words: ' + words.length;
  }