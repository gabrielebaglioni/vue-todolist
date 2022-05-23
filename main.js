const app = new Vue({
    el: "#app",
    data: {
        todos: [{
                text: "fare la spesa",
                isDone: true
            },
            {
                text: "fare uscire il cane",
                isDone: false
            },
            {
                text: "magiare ",
                isDone: false
            },
            {
                text: "fare il pieno",
                isDone: false
            },
        ],
        newTodo: {
            text: " ",
            isDone: false,
        },
    },
    methods: {
        addToDo() {
            if (this.newTodo !== " ") {
                this.todos.push(this.newTodo);
                this.newTodo = "";
            }
        },
        removeToDo(index) {
            this.todos.splice(index, 1)
        },
        doneToDo(index) {
            this.todos[index].isDone = !this.todos[index].isDone
        }

    },
});