import React from 'react';
import CompletedTodoItem from './CompletedTodoItem';

function CompletedTodoList({ completedTodos, setCompletedTodos }) {
    return (
        <div className="completed-todo-list">
            {completedTodos.map((item, index) => (
                <CompletedTodoItem key={index} item={item} index={index} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
            ))}
        </div>
    );
}

export default CompletedTodoList;
