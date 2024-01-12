class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    ataque(){
        let atacar = ""
        if (this.tipo === "mago") {
            atacar += "magia"
        } else if (this.tipo === "guerreiro") {
            atacar += "espada"
        } else if (this.tipo === "monge") {
            atacar += "artes marciais"
        } else if (this.tipo === "ninja") {
            atacar += "shuriken"
        } else if (this.tipo === "elfo") {
            atacar += "flechas"
        } else {
            atacar += "'não encontrado'"
        }
        console.log(`O ${this.tipo} atacou usando ${atacar}!`)
    }
}

let heroi1 = new heroi("Harry", 28, "mago")
heroi1.ataque()

let heroi2 = new heroi("Lang", 38, "guerreiro")
heroi2.ataque()

let heroi3 = new heroi("Bruce Lee", 90, "monge")
heroi3.ataque()

let heroi4 = new heroi("Kakashi", 50, "ninja")
heroi4.ataque()

let heroi5 = new heroi("Magno", 60, "elfo")
heroi5.ataque()

let heroi6 = new heroi("Rexar", 70, "caçador")
heroi6.ataque()
