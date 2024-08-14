const textoOriginal = document.getElementById('texto-original');
const resultado = document.getElementById('resultado');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const btnCopiar = document.getElementById('btn-copiar');

const objetoCodificar = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
};

function encriptar(string) {
    return string.toLowerCase().replace(/[aeiou]/g, letra => objetoCodificar[letra]);
}

function desencriptar(string) {
    for (let clave in objetoCodificar) {
        string = string.replaceAll(objetoCodificar[clave], clave);
    }
    return string;
}

function copiarTexto() {
    resultado.select();
    document.execCommand('copy');
    alert('¡Texto copiado al portapapeles!');
}

btnEncriptar.onclick = () => {
    const texto = textoOriginal.value;
    resultado.value = encriptar(texto);
};

btnDesencriptar.onclick = () => {
    const texto = textoOriginal.value;
    resultado.value = desencriptar(texto);
};

btnCopiar.onclick = copiarTexto;
