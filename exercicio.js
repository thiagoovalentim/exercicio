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


// 1.2 Contar vogais
function contarVogais(texto) {
    let contador = 0;
    const vogais = "aeiou";
    
    // Converte o texto para minúsculas para não diferenciar 'A' de 'a'
    const textoMinusculo = texto.toLowerCase();

    // Percorre cada caractere da string
    for (let i = 0; i < textoMinusculo.length; i++) {
        // Verifica se o caractere atual está na lista de vogais
        if (vogais.includes(textoMinusculo[i])) {
            contador++;
        }
    }

    return contador;
}

// Testes sugeridos
console.log(contarVogais("javascript")); // 3
console.log(contarVogais("abacaxi"));    // 4

// 1.3 Verificar Palíndromo
function verificarPalindromo(palavra) {
    // 1. Inverte a palavra (reaproveitando a lógica do ex 1.1)
    const palavraInvertida = palavra.split("").reverse().join("");
    
    // 2. Compara a original com a invertida
    return palavra === palavraInvertida;
}

// Testes para você rodar
console.log(verificarPalindromo("arara")); // true
console.log(verificarPalindromo("ana"));   // true
console.log(verificarPalindromo("video")); // false