// Encrypts text
function encrypt(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.toUpperCase(text[i])) {
            let ch = String.fromCharCode(
                ((char.charCodeAt(0) + shift - 65) % 26) + 65
            );
            result += ch;
        } else {
            let ch = String.fromCharCode(
                ((char.charCodeAt(0) + shift - 97) % 26) + 97
            );
            result += ch;
        }
    }
    return result;
}

// Driver code
document.write("ENCRYPT" + "<br>");
let text = "ALAN RUN, MY COVER IS BLOWN";
let shift = 10;
document.write("Text  : " + text + "<br>");
document.write("Shift : " + shift + "<br>");
document.write("Cipher: " + encrypt(text, shift) + "<br>");


// Decrypts text

function decrypt(cypher, shift) {
    let result = "";
    for (let i = 0; i < cypher.length; i++) {
        let char = cypher[i];
        if (char.toUpperCase(cypher[i])) {
            let ch = String.fromCharCode(
                ((char.charCodeAt(0) + shift - 65) % 26) + 65
            );
            result += ch;
        } else {
            let ch = String.fromCharCode(
                ((char.charCodeAt(0) + shift - 97) % 26) + 97
            );
            result += ch;
        }
    }
    return result;
}

// Driver code

document.write("DECRYPT" + "<br>");
let cypher = document.write("Cipher: " + decrypt(text, shift) + "<br>");
let newshift = 26 - shift;
document.write("Text  : " + text + "<br>");