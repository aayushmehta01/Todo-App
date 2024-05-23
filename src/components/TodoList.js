import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ allTodos, setTodos, setCompletedTodos, completedTodos }) {
    return (
        <div className="todo-list">
            {allTodos.map((item, index) => (
                <TodoItem key={index} item={item} index={index} allTodos={allTodos} setTodos={setTodos} setCompletedTodos={setCompletedTodos} completedTodos={completedTodos} />
            ))}
        </div>
    );
}

export default TodoList;
