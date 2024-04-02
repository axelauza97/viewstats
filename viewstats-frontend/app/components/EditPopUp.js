export const EditPopUp = ({ todo, save }) => {
  return (
    <>
      <section className="fixed left-0 right-0 top-0 z-50 grid h-dvh w-full place-content-center backdrop-blur">
        <form
          className=" relative grid max-h-44 max-w-80 items-center gap-4 rounded border border-gray-500 bg-gray-50 p-4  text-lg shadow sm:grid-cols-[min-content,1fr] sm:text-xl"
          aria-label="Add Elements"
          onSubmit={save}
        >
          <label
            htmlFor="todo"
            className="pr-2 font-semibold text-gray-900 drop-shadow"
          >
            Todo:
          </label>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add..."
            defaultValue={todo.text}
            className="w-full rounded p-2 shadow drop-shadow"
          />
          <input
            type="text"
            name="id"
            id="id"
            value={todo.id}
            className="hidden"
          />
          <button
            id="submit"
            className="bg-red ml-auto mr-0 rounded-md p-2 px-8 font-bold text-white shadow drop-shadow transition duration-75 ease-in-out hover:scale-105 focus:ring active:scale-90 sm:col-start-2"
          >
            Save
          </button>
        </form>
      </section>
    </>
  );
};
