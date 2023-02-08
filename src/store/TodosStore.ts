import { makeAutoObservable } from "mobx"
import { ITodo } from "../TodoContainer/Interface";



class TodoStore {
    todos:any = [];
    constructor() {
        makeAutoObservable(this)
    }
    add(todo: ITodo) {
        this.todos.push(todo)
    }
    remove(id: number) {
        this.todos = this.todos.filter((el: ITodo) => el.id !== id)
        console.log('remove.todos', this.todos)
    }

    selectTodo( id: number, checked: boolean ) {
        this.todos = this.todos.map( (el: ITodo) => {
            if (el.id === id) {
                el.checked = checked;
                return el;
            }
            return el;
        })
    }
}

export default new TodoStore();

