const carrinho1 = {
    cor: "vermelho",
    tamnho: "grande",
    andar(){
        return (`O carrinho ${this.cor} está andando`)
    }
}
const carrinho2 = {
    cor: "verde",
    tamnho: "pequeno",
    andar(){
        return (`O carrinho ${this.cor} está andando`)
    }
}


console.log(carrinho1.andar()); //O carrinho vermelho está andando
console.log(carrinho2.andar()); //O carrinho verde está andando