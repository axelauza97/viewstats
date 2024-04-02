"use client";
import { useContext, useEffect, useState } from "react";
import { TodoAddForm } from "../components/TodoAddForm";
import { EditPopUp } from "../components/EditPopUp";
import {
  deleteTodo,
  editTodo,
  fetchTodos,
  saveTodo,
} from "../services/todoService";
import { useRouter } from "next/navigation";
import { BannerContext } from "../context/banner";
import { TodoList } from "../components/TodoList";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();
  const { setBanner } = useContext(BannerContext);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId === null) {
      router.push("/");
      setBanner({
        message: "You need to login!",
        status: 500,
        show: true,
      });
    }
    (async () => {
      const res = await fetchTodos({ userId: userId });
      setTodos(res.data);
    })();
  }, []);

  const addItemHandler = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));
    if (fields.todo.trim() === "") {
      return;
    }
    const id = crypto.randomUUID();
    (async () => {
      const userId = localStorage.getItem("user_id");
      const formData = new FormData();
      formData.append("uid", id);
      formData.append("text", fields.todo);
      formData.append("user", userId);
      await saveTodo(formData);
      const res = await fetchTodos({ userId: userId });
      setTodos(res.data);
    })();
    setTodos((prev) => [...prev, { text: fields.todo, id: id }]);
    event.target.todo.value = "";
    event.target.todo.focus;
  };
  const deleteTodoHandler = (id) => {
    (async () => {
      await deleteTodo({ uid: id });
    })();
    setTodos((prev) => prev.filter((e) => e.id != id));
  };
  const editTodoHandler = (id) => {
    setIsEditing({
      show: true,
      ...todos.filter((e) => e.id == id)[0],
    });
  };
  const saveEditTodoHandler = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));
    const id = fields.id;
    todos.filter((e) => e.id == fields.id)[0].text = fields.todo;
    (async () => {
      const userId = localStorage.getItem("user_id");
      const formData = new FormData();
      formData.append("uid", id);
      formData.append("text", fields.todo);
      formData.append("user", userId);
      await editTodo({ formData, id });
    })();
    setIsEditing({ show: false });
  };
  return (
    <>
      {isEditing.show ? (
        <EditPopUp todo={isEditing} save={saveEditTodoHandler} />
      ) : (
        ""
      )}

      <section className="mx-auto h-full max-w-full place-content-center gap-4 p-8 sm:max-w-xl">
        <h3 className="text-lg font-bold drop-shadow">Add todo Form</h3>
        <TodoAddForm addItemHandler={addItemHandler} />
      </section>
      <TodoList
        todos={todos}
        editTodoHandler={editTodoHandler}
        deleteTodoHandler={deleteTodoHandler}
      />
    </>
  );
}
