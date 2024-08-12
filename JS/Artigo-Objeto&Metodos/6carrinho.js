class Carrinho{
    constructor(cor, tamanho){
        this.cor = cor;
        this.tamanho = tamanho;
    } 
    andar(){
        return (`O carrinho ${this.cor} é ${this.tamanho} e está andando`)
    }
}

const carrinho1 = new Carrinho("vermelho", "grande");
const carrinho2 = new Carrinho("verde", "pequeno")


console.log(carrinho1.andar()); //O carrinho vermelho é Grande e está andando
console.log(carrinho2.andar()); //O carrinho verde é pequeno e está andando