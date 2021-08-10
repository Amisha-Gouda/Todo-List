import React from 'react'
import TodoItem from './TodoItem';


function todos(props) {
    return (
        <div className="container my-3">
            <h3 className="text-center"> Todo List </h3>
            {props.todos.length===0? 'no todos to display':
            
            props.todos.map((todo)=>{
                return (
                    
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                
                
                )
            })}
            
            
        </div>
    )
}

export default todos
