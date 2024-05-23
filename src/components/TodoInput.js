// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function TodoInput({ setTodos, allTodos }) {
//   const [newTitle, setNewTitle] = useState("");
//   const [newDescription, setNewDescription] = useState("");

//   const handleAddTodo = () => {
//     const newTodoItem = { title: newTitle, description: newDescription };
//     const updatedTodoArr = [...allTodos, newTodoItem];
//     setTodos(updatedTodoArr);
//     localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
//     setNewTitle("");
//     setNewDescription("");

//     toast.success("Todo added successfully",{
//       position: "top-right",
//     })
//   };

//   return (
//     <div className="todo-input">
//       <div className="todo-input-item">
//         <label>Title</label>
//         <input
//           type="text"
//           value={newTitle}
//           onChange={(e) => setNewTitle(e.target.value)}
//           placeholder="Add a title"
//           required
//         />
//       </div>
//       <div className="todo-input-item">
//         <label>Date</label>
//         <input
//           type="datetime-local"
//           value={newDescription}
//           onChange={(e) => setNewDescription(e.target.value)}
//         />
//       </div>

//       <div className="todo-input-item">
//         <button type="button" onClick={handleAddTodo} className="primaryBtn">
//           Add
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TodoInput;



import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoInput({ setTodos, allTodos }) {
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  // Request notification permission when the component mounts
  useEffect(() => {
    if ("Notification" in window && Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const handleAddTodo = () => {
    const newTodoItem = { title: newTitle, description: newDescription, completed: false };
    const updatedTodoArr = [...allTodos, newTodoItem];
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist", JSON.stringify(updatedTodoArr));
    setNewTitle("");
    setNewDescription("");

    // Schedule the reminder
    scheduleReminder(newTodoItem, updatedTodoArr);

    toast.success("Todo added successfully", {
      position: "top-right",
    });
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = [...allTodos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
    localStorage.setItem("todolist", JSON.stringify(updatedTodos));
    toast.info("Todo marked as completed", {
      position: "top-right",
    });
  };

  const scheduleReminder = (todo, todos) => {
    const reminderTime = new Date(todo.description).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = reminderTime - currentTime;

    if (timeDifference > 0) {
      setTimeout(() => {
        const updatedTodos = JSON.parse(localStorage.getItem("todolist")) || todos;
        const currentTodo = updatedTodos.find(t => t.title === todo.title && t.description === todo.description);
        if (currentTodo && !currentTodo.completed) {
          new Notification("Reminder", {
            body: `You have a todo: ${todo.title}`,
          });
        }
      }, timeDifference);
    }
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todolist")) || [];
    todos.forEach(todo => scheduleReminder(todo, todos));
  }, [setTodos]);

  return (
    <div className="todo-input">
      <div className="todo-input-item">
        <label>Title</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Add a title"
          required
        />
      </div>
      <div className="todo-input-item">
        <label>Date</label>
        <input
          type="datetime-local"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </div>
      <div className="todo-input-item">
        <button type="button" onClick={handleAddTodo} className="primaryBtn">
          Add
        </button>
      </div>
    </div>
  );
}

export default TodoInput;