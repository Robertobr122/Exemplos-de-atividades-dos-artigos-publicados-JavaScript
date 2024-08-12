const pessoa = {
    nome: "Francisco",
    idade: 34,

    //Método
    apresentar(){
        return (`Oi, meu nome é ${this.nome}, e tenho ${this.idade} anos. `)
    },

    //Método
    aniversario(){
        this.idade++;
        return `Agora eu tenho ${this.idade} anos`

    }
}

console.log(pessoa.apresentar()); //Oi, meu nome é Francisco, e tenho 34 anos. 
console.log(pessoa.aniversario()); //Agora eu tenho 35 anos