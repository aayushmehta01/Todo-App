import React, { useState, useEffect } from 'react';
import '../../styles/App.css';
import Header from '../Header';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';
import CompletedTodoList from '../CompletedTodoList';

function Home(){
    const [isCompleteScreen, setIsCompleteScreen] = useState(false);
    const [allTodos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('todolist'));
        let savedCompletedTodo = JSON.parse(localStorage.getItem('completedTodos'));
        if (savedTodo) setTodos(savedTodo);
        if (savedCompletedTodo) setCompletedTodos(savedCompletedTodo);
    }, []);

    return (
        <>
        <div className="App">
            <Header />
            <div className="todo-wrapper">
                <TodoInput setTodos={setTodos} allTodos={allTodos} />
                <div className="btn-area">
                    <button className={`secondaryBtn ${!isCompleteScreen && 'active'}`} onClick={() => setIsCompleteScreen(false)}>Incomplete</button>
                    <button className={`secondaryBtn ${isCompleteScreen && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
                </div>
                {isCompleteScreen ? (
                    <CompletedTodoList completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
                ) : (
                    <TodoList allTodos={allTodos} setTodos={setTodos} setCompletedTodos={setCompletedTodos} completedTodos={completedTodos} />
                )}
            </div>
        </div>
        
        </>
    );
}

export default Home;