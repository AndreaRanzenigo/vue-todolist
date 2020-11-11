//Main js
const app = new Vue({
    el: '#app',
    data: {
        listItems: [
            'Comprare la pasta',
            'Comprare le mele',
            'Comprare il pane',
        ],
        newTodo: '',
        
    },
    methods: {
        close(index) {
            this.listItems.splice(index, 1);
            if (this.listItems == "") {
                alert('Lista vuota');
            }
        },
        addItems() {
            if (this.newTodo.trim() !== "") {
                
                this.listItems.push(this.newTodo);
                this.newTodo = '';
            }
        },
        removeAll() {
            alert('Todo list cancellata');
            this.listItems = [];
        }
    }
});