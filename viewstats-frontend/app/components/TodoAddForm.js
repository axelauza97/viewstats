export const TodoAddForm = ({ addItemHandler }) => {
  return (
    <form
      className="grid items-center gap-4 rounded border bg-slate-100 border-gray-500 p-4 text-lg shadow sm:grid-cols-[min-content,1fr] sm:text-xl"
      aria-label="Add Elements"
      onSubmit={addItemHandler}
    >
      <label htmlFor="todo" className="pr-2 font-bold text-gray-900 drop-shadow">
        Todo:
      </label>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Add..."
        className="drop-shadow w-full rounded border border-gray-400 p-2 font-semibold shadow"
      />
      <button
        id="submit"
        className="drop-shadow ml-auto mr-0 rounded-md bg-slate-400 p-2 px-8 font-bold text-slate-950 shadow transition duration-75  ease-in-out hover:scale-105  hover:text-gray-900 focus:ring active:scale-90 sm:col-start-2"
      >
        Add
      </button>
    </form>
  );
};
