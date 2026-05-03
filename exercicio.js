// 1.1 Inverter uma string
function inverterString(texto) {
    // .split("") transforma a string em um array de caracteres
    // .reverse() inverte a ordem dos elementos no array
    // .join("") junta os elementos do array de volta em uma string
    return texto.split("").reverse().join("");
}

// Testes do exercício
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

// Testes do exercício
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

// 1.3 Verificar palíndromo
function ehPalindromo(texto) {
    // 1. Converte para minúsculas para ignorar a diferença (ex: "Ana" vira "ana")
    const textoMinusculo = texto.toLowerCase();
    
    // 2. Inverte o texto (usando a lógica do exercício 1.1)
    const textoInvertido = textoMinusculo.split("").reverse().join("");
    
    // 3. Compara o texto original tratado com o invertido
    return textoMinusculo === textoInvertido;
}

// Testes sugeridos
console.log(ehPalindromo("Ana"));    // true
console.log(ehPalindromo("arara"));  // true
console.log(ehPalindromo("casa"));   // false

// 1.4 Capitalizar palavras
function capitalizarPalavras(frase) {
    // 1. Separa a frase em um array de palavras usando o espaço como divisor
    const palavras = frase.split(" ");

    // 2. Cria um novo array com as palavras modificadas
    const palavrasCapitalizadas = palavras.map(palavra => {
        // Pega a primeira letra (maiúscula) e junta com o restante da palavra
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    });

    // 3. Junta as palavras novamente em uma única string, separadas por espaço
    return palavrasCapitalizadas.join(" ");
}

// Testes F2
console.log(capitalizarPalavras("olá mundo"));             // "Olá Mundo"
console.log(capitalizarPalavras("sistemas web é legal"));  // "Sistemas Web É Legal"