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
            }
        ],

        newTodo : {
            text:'',
            done: false,
        }
    }
  },
  methods: {
    addTodo() {
        this.todos.unshift(this.newTodo),
        this.newTodo = {
            text:'',
        done: false,
        }
    },
    eliminaPost(i) {
        this.todos.splice(i , 1)
    },
    }
}

).mount('#app')