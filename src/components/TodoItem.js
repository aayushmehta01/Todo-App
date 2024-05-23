import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoItem({ item, index, allTodos, setTodos, setCompletedTodos, completedTodos }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(item.title);
    const [editedDescription, setEditedDescription] = useState(item.description);

    const handleDeleteTodo = () => {
        const reducedTodo = [...allTodos];
        reducedTodo.splice(index, 1);
        localStorage.setItem('todolist', JSON.stringify(reducedTodo));
        setTodos(reducedTodo);

        toast.success("Todo deleted",{
            position: "top-right",
          })
    };

    const handleComplete = () => {
        const now = new Date();
        const completedOn = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} at ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        const filteredItem = { ...item, completedOn };
        const updatedCompletedArr = [...completedTodos, filteredItem];
        // handleDeleteTodo();
        const reducedTodo = [...allTodos];
        reducedTodo.splice(index, 1);
        localStorage.setItem('todolist', JSON.stringify(reducedTodo));
        setTodos(reducedTodo);
        setCompletedTodos(updatedCompletedArr);
        localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArr));

        toast.success("Todo completed",{
            position: "top-right",
          })
    };

    const handleUpdateToDo = () => {
        const newToDo = [...allTodos];
        newToDo[index] = { title: editedTitle, description: editedDescription };
        setTodos(newToDo);
        setIsEditing(false);

        toast.success("Todo updated successfully",{
            position: "top-right",
          })
    };

    if (isEditing) {
        return (
            <div className='edit__wrapper'>
                <input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} placeholder='Updated Title' />
                <input type='datetime-local' value={editedDescription} onChange={(e) => setEditedDescription(e.target.value)} placeholder='Updated Description' />
                <button onClick={handleUpdateToDo} className="primaryBtn">Update</button>
            </div>
        );
    }

    return (
        <div className="todo-list-item">
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
            <div>
                <AiOutlineDelete className="icon" onClick={handleDeleteTodo} title="Delete" />
                <BsCheckLg className="check-icon" onClick={handleComplete} title="Complete" />
                <AiOutlineEdit className="check-icon" onClick={() => setIsEditing(true)} title="Edit" />
            </div>
        </div>
    );
}

export default TodoItem;
