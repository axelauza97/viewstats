export const TodoAddForm = ({ addItemHandler }) => {
  return (
    <form
      className="gap-4 items-center grid sm:grid-cols-[min-content,1fr] text-lg sm:text-xl border border-gray-500 p-4 rounded shadow"
      aria-label="Add Elements"
      onSubmit={addItemHandler}
    >
      <label htmlFor="todo" className="pr-2 text-gray-900">
        Todo:
      </label>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Add..."
        className="p-2 w-full border border-gray-400 rounded shadow"
      />
      <button
        id="submit"
        className="sm:col-start-2 ml-auto mr-0 px-4 py-2 transition duration-75 ease-in-out bg-white border  rounded shadow text-slate-950 hover:bg-gray-200 hover:text-gray-900 active:scale-90 focus:ring"
      >
        Add
      </button>
    </form>
  );
};
