"use client";

import { Todo } from "./Todo";
const renderTodosForCategory = ({
  category,
  todos,
  deleteTodoHandler,
  editTodoHandler,
}) => {
  function filterListByCategory(category) {
    return todos.filter((todo) => todo.category === category);
  }
  const filteredTodos = filterListByCategory(category);
  if (filteredTodos.length === 0) {
    return (
      <li className="m-2 mx-auto w-40 rounded bg-white p-8 px-2 py-2 text-center shadow hover:cursor-pointer hover:border-gray-800">
        No {category} todos
      </li>
    );
  }
  return filteredTodos.map((todo) => (
    <Todo
      key={todo.id}
      element={todo}
      deleteHandler={deleteTodoHandler}
      editHandler={editTodoHandler}
    />
  ));
};

export const TodoList = ({ todos, deleteTodoHandler, editTodoHandler }) => {
  return (
    <section
      className={`no-scrollbar my-2 grid max-h-full w-full justify-items-stretch p-8 py-8 pt-0  sm:grid-cols-3 sm:gap-6 sm:pt-8 ${todos.length > 0 ? "overflow-y-scroll" : "overflow-hidden"}`}
    >
      <ul className="my-2 sm:my-0">
        {renderTodosForCategory({
          category: "work",
          todos,
          deleteTodoHandler,
          editTodoHandler,
        })}
      </ul>
      <ul className="my-2 sm:my-0">
        {renderTodosForCategory({
          category: "grocery",
          todos,
          deleteTodoHandler,
          editTodoHandler,
        })}
      </ul>
      <ul className="my-2 sm:my-0">
        {renderTodosForCategory({
          category: "school",
          todos,
          deleteTodoHandler,
          editTodoHandler,
        })}
      </ul>
    </section>
  );
};
