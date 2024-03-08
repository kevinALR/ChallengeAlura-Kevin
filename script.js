document.addEventListener('DOMContentLoaded', function () {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const encryptBtn = document.getElementById('encryptBtn');
    const decryptBtn = document.getElementById('decryptBtn');
    const copyBtn = document.getElementById('copyBtn');

    // Función para encriptar una palabra
    function encriptar(palabra) {
        return palabra
            .replace(/e/g, 'enter')  // Reemplaza todas las 'e' por 'enter'
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat')
            
    }

    // Función para desencriptar una palabra
    function desencriptar(palabra) {
        return palabra
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    encryptBtn.addEventListener('click', function () {
        const textoOriginal = inputText.value.toLowerCase();
        const textoEncriptado = encriptar(textoOriginal);
        outputText.value = textoEncriptado;
    });

    decryptBtn.addEventListener('click', function () {
        const textoEncriptado = inputText.value.toLowerCase();
        const textoDesencriptado = desencriptar(textoEncriptado);
        outputText.value = textoDesencriptado;
    });

    copyBtn.addEventListener('click', function () {
        outputText.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});
