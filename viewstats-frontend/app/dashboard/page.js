"use client";
import { useState } from "react";
import { Todo } from "../components/Todo";
import { TodoAddForm } from "../components/TodoAddForm";

export default function Dashboard() {
  const [todo, setTodo] = useState([]);
  const addItemHandler = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));
    if (fields.todo.trim() === "") {
      return;
    }
    setTodo((prev) => [
      ...prev,
      { text: fields.todo, id: crypto.randomUUID() },
    ]);
    event.target.todo.value = "";
    event.target.todo.focus;
  };
  const deleteTodoHandler = (id) => {
    setTodo((prev) => prev.filter((e) => e.id != id));
  };
  const editTodoHandler = (id) => {
    setTodo((prev) => prev.filter((e) => e.id != id));
  };
  return (
    <>
      <section className="mx-auto h-full max-w-full sm:max-w-xl  place-content-center p-8  gap-4">
        <h3 className="font-bold">Add todo Form</h3>
        <TodoAddForm addItemHandler={addItemHandler} />
      </section>
      <section
        className={`no-scrollbar ${todo.length > 0 ? "overflow-y-scroll" : ""}`}
      >
        <ul>
          {todo &&
            todo.map((e) => (
              <Todo
                key={e.id}
                element={e}
                deleteHandler={deleteTodoHandler}
                editHandler={editTodoHandler}
              />
            ))}
          {todo.length == 0 && (
            <li className="w-40 px-2 py-2 m-2 border border-gray-700 border-solid rounded hover:border-gray-800 hover:cursor-pointer">
              No elements
            </li>
          )}
        </ul>
      </section>
    </>
  );
}
