const app = Vue.createApp({
	data() {
		return {
			newTodoText: '',
			inputError: false,
			todos: [
				{
					text: 'Fare i compiti',
					done: false,
				},
				{
					text: 'Fare la spesa',
					done: true,
				},
				{
					text: 'Fare il bucato',
					done: false,
				},
			],
		};
	},
	methods: {
		addTodo() {
			let cleanedTodo = this.newTodoText.trim();
			if (cleanedTodo.length >= 5) {
				this.todos.unshift({
					text: this.newTodoText,
					done: false,
				});
				this.newTodoText = '';
				this.inputError = false;
			} else {
				this.inputError = true;
			}
		},
		deleteItem(index) {
			this.todos.splice(index, 1);
		},
		toggleDone(objTodo) {
			objTodo.done = !objTodo.done;
		}
	},
});

app.mount('#root');