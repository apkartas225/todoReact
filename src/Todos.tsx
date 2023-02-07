import React, { FC } from "react";
import { ITodo } from '../src/TodoContainer/Interface';
import TodoStore from './store/TodosStore';
import { observer } from "mobx-react-lite";

interface IProps {
    todo: ITodo,
    selectTodo: Function   
}

export const Todos:FC<IProps> = observer(( props: IProps) => {
    return (
        <div className="todo">
            <div className="todo-body" style={ props.todo.checked ? {textDecoration: 'line-through'} : {}}>
                <input type="checkbox" onChange={(e) => TodoStore.selectTodo(props.todo.id, e.target.checked)}/>
                <div>{props.todo.body}</div>
            </div>
            <button className="remove" onClick={() => TodoStore.remove(props.todo.id)}>Удалить</button>
        </div>
    )
})