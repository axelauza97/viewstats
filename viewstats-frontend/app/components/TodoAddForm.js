import { useState } from "react";

export const TodoAddForm = ({ addItemHandler }) => {
  const [category, setCategory] = useState("work");
  const handleCategory = ({ name, event }) => {
    event.preventDefault();
    setCategory(name);
  };
  return (
    <form
      className="grid items-center gap-4 rounded bg-white p-4 text-lg shadow sm:grid-cols-[min-content,1fr] sm:text-xl"
      aria-label="Add Elements"
      onSubmit={addItemHandler}
    >
      <input
        className="hidden"
        type="text"
        name="category"
        id="category"
        value={category}
      />
      <label
        htmlFor="todo"
        className="pr-2 font-bold text-gray-900 drop-shadow"
      >
        Todo:
      </label>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Add..."
        className="w-full rounded p-2 font-semibold shadow drop-shadow"
      />
      <button
        id="submit"
        className="bg-red col-start-2 ml-auto mr-0 rounded-md p-2 px-8 font-bold text-white shadow drop-shadow transition duration-75 ease-in-out hover:scale-105 focus:ring active:scale-90"
      >
        Add
      </button>
      <section className="col-span-2 grid w-full items-center gap-2 sm:grid-cols-[min-content,1fr]">
        <label className="text-sm font-bold text-gray-900 drop-shadow">
          Category:
        </label>
        <ul className="grid grid-cols-3 justify-center justify-items-center">
          <li>
            <button
              onClick={(e) => {
                handleCategory({ event: e, name: "work" });
              }}
              className={`rounded-xl p-2 text-sm drop-shadow hover:bg-slate-50 ${category === "work" ? "bg-slate-50" : ""}`}
            >
              Work
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                handleCategory({ event: e, name: "grocery" });
              }}
              className={`rounded-xl p-2 text-sm drop-shadow hover:bg-slate-50 ${category === "grocery" ? "bg-slate-50" : ""}`}
            >
              Grocery
            </button>
          </li>

          <li>
            <button
              onClick={(e) => {
                handleCategory({ event: e, name: "school" });
              }}
              className={`rounded-xl p-2 text-sm drop-shadow hover:bg-slate-50 ${category === "school" ? "bg-slate-50" : ""}`}
            >
              School
            </button>
          </li>
        </ul>
      </section>
    </form>
  );
};
