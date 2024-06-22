const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.id == "encrypt") {
      encrypt();
    } else if (event.target.id == "decrypt") {
      decrypt();
    } else if (event.target.id == "copy-button") {
      copyText();
    } else {
      return;
    }
  });
});

/**
 * Encrypts the text input value by calling the `textEncrypter` function and updates the output field with the encrypted text.
 * If the text input value is empty, the output container is hidden and the no-output container is shown.
 *
 * @return {void}
 */
function encrypt() {
  const textInput = document.getElementById("input-field").value;

  if (textInput == "") {
    document.getElementById("output-container").classList.add("hidden");
    document.getElementById("no-output-container").classList.remove("hidden");
    return;
  }

  const textEncrypted = textEncrypter(textInput);
  document.getElementById("output-field").innerHTML = textEncrypted;
  document.getElementById("output-container").classList.remove("hidden");
  document.getElementById("no-output-container").classList.add("hidden");
}

/**
 * Decrypts the text input value by calling the `textDecrypter` function and updates the output field with the decrypted text.
 * If the text input value is empty, the output container is hidden and the no-output container is shown.
 *
 * @return {void}
 */
function decrypt() {
  const textInput = document.getElementById("input-field").value;

  if (textInput == "") {
    document.getElementById("output-container").classList.add("hidden");
    document.getElementById("no-output-container").classList.remove("hidden");
    return;
  }

  const textDecrypted = textDecrypter(textInput);
  document.getElementById("output-field").innerHTML = textDecrypted;
  document.getElementById("output-container").classList.remove("hidden");
  document.getElementById("no-output-container").classList.add("hidden");
}

/**
 * Copies the text from the "output-field" element to the clipboard.
 *
 * @return {void}
 */
function copyText() {
  const text = document.getElementById("output-field").innerText;

  if (text == "") {
    return;
  }

  if (!navigator.clipboard) {
    alert("Copiar não suportado pelo seu navegador");
    return;
  }

  navigator.clipboard.writeText(text);
}

/**
 * Encrypts the given text by replacing each character with a corresponding encrypted character.
 *
 * @param {string} text - The text to be encrypted.
 * @return {string} The encrypted text.
 */
function textEncrypter(text) {
  let textConverted = Array.from(text);

  textConverted = textConverted
    .map((caracter) => {
      if (caracter == "e") {
        return "enter";
      } else if (caracter == "i") {
        return "imes";
      } else if (caracter == "a") {
        return "ai";
      } else if (caracter == "o") {
        return "ober";
      } else if (caracter == "u") {
        return "ufat";
      } else {
        return caracter;
      }
    })
    .join("");

  return textConverted;
}

/**
 * Decrypts the given text by replacing specific substrings with corresponding characters.
 *
 * @param {string} text - The text to be decrypted.
 * @return {string} The decrypted text.
 */
function textDecrypter(text) {
  let decryptedText = text;

  decryptedText = decryptedText.replace(/enter/g, "e");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ufat/g, "u");

  return decryptedText;
}
