function countVowels() {
    const inputString = document.getElementById('inputString').value;

    if (!inputString.trim()) {
        document.getElementById('resultBox').innerHTML = 'Please enter a valid string.';
        return;
    }

    const vowelCount = countVowelsInString(inputString);

    document.getElementById('resultBox').innerHTML = ` Number of vowel${vowelCount === 1 ? '' : 's'}: ${vowelCount}`;
}

function countVowelsInString(str) {
    const strLower = str.toLowerCase();

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (let i = 0; i < strLower.length; i++) {
        const ch = strLower.charAt(i);

        if (vowels.includes(ch)) {
            count++;
        }
    }

    return count;
}