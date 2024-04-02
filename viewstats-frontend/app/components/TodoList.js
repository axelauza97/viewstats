"use client";

import { Todo } from "./Todo";

export const TodoList = ({ todos, deleteTodoHandler, editTodoHandler }) => {
  return (
    <section
      className={`no-scrollbar my-2 max-h-full w-full p-8 pt-0 sm:w-fit sm:pt-8  ${todos.length > 0 ? "overflow-y-scroll" : "overflow-hidden"}`}
    >
      <ul>
        {todos &&
          todos.map((e) => (
            <Todo
              key={e.id}
              element={e}
              deleteHandler={deleteTodoHandler}
              editHandler={editTodoHandler}
            />
          ))}
        {todos.length == 0 && (
          <li className="m-2 mx-auto w-40 rounded bg-white p-8 px-2 py-2 text-center shadow hover:cursor-pointer hover:border-gray-800">
            No elements
          </li>
        )}
      </ul>
    </section>
  );
};
