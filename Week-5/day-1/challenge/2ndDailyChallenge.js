const morse = `{
    "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
    "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
    "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".",
    "f": "..-.", "g": "--.", "h": "....", "i": "..", "j": ".---",
    "k": "-.-", "l": ".-..", "m": "--", "n": "-.", "o": "---",
    "p": ".--.", "q": "--.-", "r": ".-.", "s": "...", "t": "-",
    "u": "..-", "v": "...-", "w": ".--", "x": "-..-", "y": "-.--",
    "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..", "!": "-.-.--",
    "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.", ")": "-.--.-"
}`;

function toJs() {
    return new Promise((resolve, reject) => {
        try {
            const morseObj = JSON.parse(morse);
            if (Object.keys(morseObj).length === 0) {
                reject('Morse object is empty');
            } else {
                resolve(morseObj);
            }
        } catch (error) {
            reject('Invalid JSON string');
        }
    });//rejeccted
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        const input = prompt('Enter a word or sentence:').toLowerCase();
        const chars = input.split('');
        
        const translation = chars.map(char => {
            if (!morseJS[char]) {
                reject(`Character "${char}" not found in morse object`);
            }
            return morseJS[char];
        });
        
        resolve(translation);
    });
}

function joinWords(morseTranslation) {
    const output = morseTranslation.join('\n');
    const div = document.createElement('div');
    div.textContent = output;
    document.body.appendChild(div);
    return output;
}

// Chain the functions
toJs()
    .then(morseObj => toMorse(morseObj))
    .then(translation => joinWords(translation))
    .catch(error => console.log(error));