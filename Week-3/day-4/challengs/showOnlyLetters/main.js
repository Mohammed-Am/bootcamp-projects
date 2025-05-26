let root = document.getElementById('root')

let input = document.createElement("input")

    input.type = "text"; 
    input.placeholder = "Enter text here";



    root.appendChild(input)
    
   document.addEventListener('keydown', function(event) {
        const pressedKey = event.key;

        if (/[a-zA-Z]/.test(pressedKey)) {
            console.log(`Letter key pressed: ${pressedKey}`);
        } else if (/\d/.test(pressedKey)){
            console.log(`Number key pressed: ${pressedKey}`);
        } else {
            console.log(`Other key pressed: ${pressedKey}`);
        }
});