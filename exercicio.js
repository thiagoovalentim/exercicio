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

// 2.1 Ficha do aluno
function criarAluno(nome, idade, curso) {
    // Retorna um objeto "empacotando" os dados recebidos como propriedades
    return {
        nome: nome,
        idade: idade,
        curso: curso
    };
}

// Testes sugeridos
let aluno = criarAluno("Thiago", 26, "Sistemas de Informação");
console.log(aluno); 
// Saída esperada: { nome: "Thiago", idade: 26, curso: "Sistemas de Informação" }

// 2.2 Calculadora de IMC
function calcularIMC(nome, peso, altura) {
    // 1. Calcula o IMC usando a fórmula: peso / (altura * altura)
    const imc = peso / (altura * altura);

    let classificacao;

    // 2. Define a classificação com base no valor do IMC
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else {
        classificacao = "Obesidade";
    }

    // 3. Retorna um objeto com os dados
    return {
        nome: nome,
        imc: Number(imc.toFixed(2)), // limita para 2 casas decimais
        classificacao: classificacao
    };
}

// Testes do exercício
let pessoa1 = calcularIMC("João", 75, 1.80);
console.log(pessoa1);
// { nome: "João", imc: 23.15, classificacao: "Peso normal" }

let pessoa2 = calcularIMC("Ana", 50, 1.60);
console.log(pessoa2);
// { nome: "Ana", imc: 19.53, classificacao: "Peso normal" }

// 2.3 Lista de contatos
function buscarContato(contatos, nome) {
    // Percorre o array de contatos
    for (let i = 0; i < contatos.length; i++) {
        // Verifica se o nome do contato atual é igual ao nome buscado
        if (contatos[i].nome === nome) {
            return contatos[i]; // Retorna o objeto encontrado
        }
    }

    // Se não encontrar nenhum contato, retorna null
    return null;
}

// Testes do exercício
let contatos = [
    { nome: "Ana", telefone: "1111-1111" },
    { nome: "Bruno", telefone: "2222-2222" },
    { nome: "Carlos", telefone: "3333-3333" }
];

console.log(buscarContato(contatos, "Bruno"));
// { nome: "Bruno", telefone: "2222-2222" }

console.log(buscarContato(contatos, "Diana"));
// null