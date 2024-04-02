export const TodoAddForm = ({ addItemHandler }) => {
  return (
    <form
      className="grid items-center gap-4 rounded border border-gray-500 bg-gray-50 p-4 text-lg shadow sm:grid-cols-[min-content,1fr] sm:text-xl"
      aria-label="Add Elements"
      onSubmit={addItemHandler}
    >
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
        className="bg-red ml-auto mr-0 rounded-md p-2 px-8 font-bold text-white shadow drop-shadow transition duration-75 ease-in-out hover:scale-105 focus:ring active:scale-90 sm:col-start-2"
      >
        Add
      </button>
    </form>
  );
};
