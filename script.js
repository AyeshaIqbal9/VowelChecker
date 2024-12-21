function checkVowels() {
    let inputText = document.getElementById('inputText').value;
    let resultDiv = document.getElementById('result');
    let errorDiv = document.getElementById('error');
    // Clears any previous result displayed in the resultDiv.
    resultDiv.textContent = '';
    // Clears any previous error message displayed in the errorDiv.
    errorDiv.textContent = '';

    if (!inputText) {
      errorDiv.textContent = 'Please enter some text.';
      errorDiv.style.margin="10px";
      errorDiv.style.fontWeight="bold";
      errorDiv.style.fontSize="20px";
      errorDiv.style.color = "white"; 
      errorDiv.style.textShadow= "2px 2px 1px black";
      return;
    }

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;

    for (let i = 0; i < inputText.length; i++) {
        for(let j=0;j<vowels.length;j++){
            if (inputText[i]==vowels[j]) {
                count++;
              }
        }
    }

    resultDiv.textContent = 'Number of vowels: ' + count;
    resultDiv.style.margin="10px";
    resultDiv.style.color = "white"; 
      resultDiv.style.fontWeight="bold";
      resultDiv.style.fontSize="20px";
      resultDiv.style.textShadow= "2px 2px 1px black";
  }



//   another code:

//   function checkVowels() {
//     let inputText = document.getElementById('inputText').value;
//     let resultDiv = document.getElementById('result');
//     let errorDiv = document.getElementById('error');
//     resultDiv.textContent = '';
//     errorDiv.textContent = '';

//     if (!inputText) {
//       errorDiv.textContent = 'Please enter some text.';
//       return;
//     }

//     let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let count = 0;

//     for (let i = 0; i < inputText.length; i++) {
//       if (vowels.includes(inputText[i])) {
//         count++;
//       }
//     }

//     resultDiv.textContent = 'Number of vowels: ' + count;
//   }

