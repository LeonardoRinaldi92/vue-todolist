const { createApp } = Vue

createApp({
  data() {
    return {
        todos: [
            {
                text: 'Fare i compiti',
                done: false
            },
            {
                text: 'Fare la spesa',
                done: true
            },
            {
                text: 'Fare il bucato',
                done: false
            },
            {
                text: 'Rapinare banca',
                done: true
            },
            {
                text: 'Andare dal dentista',
                done: false
            },
            {
                text: 'Chiamare nonna',
                done: false
            },
            {
                text: 'Aggiungere Bonus',
                done: true
            },

        ],

        newTodo : {
            text:'',
            done: false
        },

        errore : false
    }
  },
  methods: {
    addTodo() {
        if (this.newTodo.text !== '' && this.newTodo.text.length > 4){
            this.todos.unshift(this.newTodo),
            this.newTodo = {
                text:'',
            done: false,
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