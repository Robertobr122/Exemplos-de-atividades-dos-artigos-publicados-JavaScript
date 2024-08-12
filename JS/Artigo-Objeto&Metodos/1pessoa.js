const pessoa = {
    nome: "Roberto",
    idade: 26,
    corFavorita: "Verde",
    jogosPreferidos: ["Call Of Duty", "Fifa", "Overcooked"]
};
//Usando Ponto
console.log(pessoa.nome); // Roberto
pessoa.jogosPreferidos.push("Fortnite");
console.log(pessoa.jogosPreferidos); // [ 'Call Of Duty', 'Fifa', 'Overcooked', 'Fortnite' ]
pessoa.idade = 27;
console.log(pessoa.idade) // 27

//Usando Colchetes
console.log(pessoa["nome"]); // Roberto
console.log(pessoa["jogosPreferidos"]); // [ 'Call Of Duty', 'Fifa', 'Overcooked', 'Fortnite' ]
pessoa.idade = 27;
console.log(pessoa["idade"]) // 27