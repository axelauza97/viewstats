"use client";

import { Todo } from "./Todo";

export const TodoList = ({ todos, deleteTodoHandler, editTodoHandler }) => {
  function filterListByCategory(category) {
    return todos.filter((todo) => todo.category === category);
  }
  return (
    <section
      className={`no-scrollbar my-2 grid max-h-full w-full justify-items-stretch p-8 py-8 pt-0  sm:grid-cols-3 sm:gap-6 sm:pt-8 ${todos.length > 0 ? "overflow-y-scroll" : "overflow-hidden"}`}
    >
      <ul className="my-2 sm:my-0">
        {todos &&
          todos.map((e) => (
            <>
              {e.category === "work" ? (
                <Todo
                  key={e.id}
                  element={e}
                  deleteHandler={deleteTodoHandler}
                  editHandler={editTodoHandler}
                />
              ) : (
                ""
              )}
            </>
          ))}
        {filterListByCategory("work").length == 0 && (
          <li className="m-2 mx-auto w-40 rounded bg-white p-8 px-2 py-2 text-center shadow hover:cursor-pointer hover:border-gray-800">
            No Work todos
          </li>
        )}
      </ul>
      <ul className="my-2 sm:my-0">
        {todos &&
          todos.map((e) => (
            <>
              {e.category === "grocery" ? (
                <Todo
                  key={e.id}
                  element={e}
                  deleteHandler={deleteTodoHandler}
                  editHandler={editTodoHandler}
                />
              ) : (
                ""
              )}
            </>
          ))}
        {filterListByCategory("grocery").length == 0 && (
          <li className="m-2 mx-auto w-40 rounded bg-white p-8 px-2 py-2 text-center shadow hover:cursor-pointer hover:border-gray-800">
            No Grocery todos
          </li>
        )}
      </ul>
      <ul className="my-2 sm:my-0">
        {todos &&
          todos.map((e) => (
            <>
              {e.category === "school" ? (
                <Todo
                  key={e.id}
                  element={e}
                  deleteHandler={deleteTodoHandler}
                  editHandler={editTodoHandler}
                />
              ) : (
                ""
              )}
            </>
          ))}
        {filterListByCategory("school").length == 0 && (
          <li className="m-2 mx-auto w-40 rounded bg-white p-8 px-2 py-2 text-center shadow hover:cursor-pointer hover:border-gray-800">
            No School todos
          </li>
        )}
      </ul>
    </section>
  );
};
