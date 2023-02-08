import { makeAutoObservable } from "mobx"
import { ITodo } from "../TodoContainer/Interface";



class TodoStore {
    todos:any = [];
    constructor() {
        makeAutoObservable(this)
    }
    add(todo: ITodo) {
        console.log('add')
        this.todos.push(todo)
    }
    remove(id: number) {
        console.log('remove')
        this.todos = this.todos.filter((el: ITodo) => el.id !== id)
        console.log('remove.todos', this.todos)
    }

    selectTodo( id: number, checked: boolean ) {
        console.log('id, checked', id, checked)
        console.log('selectTodo')
        this.todos = this.todos.map( (el: ITodo) => {
            if (el.id === id) {
                el.checked = checked;
                return el;
            }
            return el;
        })
        console.log('this.todos', this.todos)
    }
}

export default new TodoStore();

