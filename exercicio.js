// 1.1 Inverter uma string
function inverterString(texto) {
    // .split("") transforma a string em um array de caracteres
    // .reverse() inverte a ordem dos elementos no array
    // .join("") junta os elementos do array de volta em uma string
    return texto.split("").reverse().join("");
}

// Testes sugeridos no exercício
console.log(inverterString("javascript")); // "tpircsavaj"
console.log(inverterString("hello"));      // "olleh"