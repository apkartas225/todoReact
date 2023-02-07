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
    }

    selectTodo( id: number, checked: boolean ) {
        console.log('selectTodo')
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

