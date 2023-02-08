import React, { FC, useState } from 'react';
import { Todos } from './Todos';
import { ITodo } from '../src/TodoContainer/Interface';
import { observer } from "mobx-react-lite";
import TodoStore from './store/TodosStore';

   
  

type Props = {
    children: string
}

export const TodoContainer: FC<Props> = observer(({ children }) => {
    // let [ todos, setTodos ]:any = useState([]);
    const [ value, setValue ] = useState('');
    const addTodo = () => {
        if (!value) { return; }
        TodoStore.add( {body: value, id: Math.random(), checked: false} )
        // setTodos( [...todos, {body: value, id: Math.random(), checked: false} ] );
        setValue('');
    };

    const selectTodo = ( id: number, checked: boolean ) => {
      TodoStore.selectTodo( id, checked )
    };
   
    return (
       <div className="container">
            <h1>{children}</h1>
            <div className="field-wrap">
                <div className='field'>
                    <input onChange={(e) => setValue(e.target.value)} value={value} />
                </div>
                <button className='todoBtn' onClick={() => addTodo()}>Добавить</button>
            </div>
            <div className="todos-wrap">
              { !TodoStore.todos.length && 
                <h1>Нет Дел</h1>
              }
                  { TodoStore.todos.map(( el: ITodo, i: number ) => 
                    <Todos key={i} todo={el} selectTodo={selectTodo}/>
                  )}
               
            </div>
       </div>
    )
})

