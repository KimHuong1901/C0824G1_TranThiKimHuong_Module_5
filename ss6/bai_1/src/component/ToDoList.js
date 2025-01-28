import React, { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import {getAllList, saveList} from "../service/ToDoListService";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getAllList();
                setTodos(data);
            } catch (error) {
                enqueueSnackbar("Failed to fetch todos", { variant: "error" });
            }
        };
        fetchTodos();
    }, []);
    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };
    const handleSubmit = async () => {
        if (!newTodo.trim()) {
            enqueueSnackbar("Todo task cannot be empty!", { variant: "warning" });
            return;
        }

        const todo = {
            title: newTodo,
        };

        try {
            const newItem = await saveList(todo);
            setTodos((prevTodos) => [newItem, ...prevTodos]);
            setNewTodo("");
            enqueueSnackbar("Todo added successfully!", { variant: "success" });
        } catch (error) {
            enqueueSnackbar("Failed to add todo", { variant: "error" });
        }
    };
    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
            <div className="flex mb-4">
                <input
                    type="text"
                    className="border border-gray-300 p-2 rounded w-full"
                    placeholder="Enter a todo task"
                    value={newTodo}
                    onChange={handleInputChange}
                />
                <button
                    className="bg-blue-500 text-white p-2 rounded ml-2 hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
            {todos.length === 0 ? (
                <p className="text-gray-500 text-center">No todos available. Add one!</p>
            ) : (
                <ul className="list-disc pl-5">
                    {todos.map((todo, index) => (
                        <li key={index} className="mb-2">
                            <span>{todo.title}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default TodoList;
