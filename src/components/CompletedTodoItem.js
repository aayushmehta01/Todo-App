import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CompletedTodoItem({ item, index, completedTodos, setCompletedTodos }) {
    const handleDeleteCompleted = () => {
        const updatedCompleted = [...completedTodos];
        updatedCompleted.splice(index, 1);
        localStorage.setItem('completedTodos', JSON.stringify(updatedCompleted));
        setCompletedTodos(updatedCompleted);

        toast.success("Todo deleted",{
            position: "top-right",
        })
    };

    return (
        <div className="completed-todo-item">
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>Completed on: {item.completedOn}</span>
            </div>
            <div>
                <AiOutlineDelete className="icon" onClick={handleDeleteCompleted} title="Delete?" />
            </div>
        </div>
    );
}

export default CompletedTodoItem;
