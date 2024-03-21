document.getElementById('extract-button').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value.toLowerCase(); // Convert input text to lowercase for easier comparison
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let resultArray = [];

    for (let i = 0; i < inputText.length; i++) {
        if (vowels.includes(inputText[i]) || inputText[i] === 'e' || inputText[i] === 'u') {
            resultArray.push(inputText[i]);
        }
    }

    const resultString = resultArray.join('').toUpperCase();

    if (resultString.length > 0) {
        document.getElementById('result').textContent = resultString;
    } else {
        document.getElementById('result').textContent = "The input text is not translatable to whale talk.";
    }
});
