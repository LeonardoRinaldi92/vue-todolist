const { createApp } = Vue

createApp({
  data() {
    return {
        todos: [
            {
                text: 'Fare i compiti',
                done: false,
                position: this.randomPosition(),
                color: this.randomColor()
            },
            {
                text: 'Fare la spesa',
                done: true,
                position: this.randomPosition(),
                color: this.randomColor()
            },
            {
                text: 'Fare il bucato',
                done: false,
                position: this.randomPosition(),
                color: this.randomColor()
            },
            {
                text: 'Rapinare banca',
                done: true,
                position: this.randomPosition(),
                color: this.randomColor()
            },
            {
                text: 'Andare dal dentista',
                done: false,
                position: this.randomPosition(),
                color: this.randomColor()
            },
            {
                text: 'Chiamare nonna',
                done: false,
                position: this.randomPosition(),
                color: this.randomColor()
            },
            {
                text: 'Aggiungere Bonus',
                done: true,
                position: this.randomPosition(),
                color: this.randomColor()
            },

        ],

        newTodo : {
            text:'',
            done: false,
            position: this.randomPosition(),
            color: this.randomColor()
        },

        errore : false,
    }
  },
  methods: {
    addTodo() {
        if (this.newTodo.text !== '' && this.newTodo.text.length > 4){
            this.todos.unshift(this.newTodo),
            this.newTodo = {
                text:'',
                position: this.randomPosition(),
                color: this.randomColor()
            }
            this.errore = false
        }else{
            this.errore = true
        } 
    },

    eliminaPost(i) {
        this.todos.splice(i , 1)
    },

    randomColor() {
        let colore = Math.floor(Math.random() * 4)
        if (colore == 0){
            return "giallo"
        }else if (colore == 1) {
            return "verde"
        }else if (colore == 2) {
            return "celeste"
        }else if (colore == 3) {
            return "rosa"
        }
    },

    randomPosition(){
        let angolo = Math.floor(Math.random() * 2)
        let numero = Math.floor(Math.random() * 18) + 1
        if (angolo == 1) {
            angolo = "+" 
        } else {
            angolo = "-"
        }
        return "transform: rotate("+angolo+numero+"deg)"


    }
  },
}

).mount('#app')