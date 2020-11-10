//Main js
const app = new Vue({
    el: '#app',
    data: {
        listItems: [
            'Comprare la pasta',
            'Comprare le mele',
            'Comprare il pane',

        ],
        

    },
    methods: {
        close() {
            console.log('OK!!!');
        },
        
    }
});