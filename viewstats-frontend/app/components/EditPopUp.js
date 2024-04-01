export const EditPopUp = ({ todo, save }) => {
  return (
    <>
      <section className="z-50 fixed left-0 right-0 top-0 grid h-dvh w-full place-content-center backdrop-blur">
        <form
          className=" bg-slate-100 p-4 relative grid max-h-44 max-w-80 items-center gap-4 rounded border border-gray-500  text-lg shadow sm:grid-cols-[min-content,1fr] sm:text-xl"
          aria-label="Add Elements"
          onSubmit={save}
        >
          <label htmlFor="todo" className="drop-shadow pr-2 font-semibold text-gray-900">
            Todo:
          </label>
          <input
            type="text"
            name="todo"
            id="todo"
            placeholder="Add..."
            defaultValue={todo.text}
            className="drop-shadow w-full rounded border border-gray-400 p-2 shadow"
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
            className="drop-shadow ml-auto mr-0 rounded-md bg-slate-400 p-2 px-8 font-bold text-slate-950 shadow transition duration-75  ease-in-out hover:scale-105  hover:text-gray-900 focus:ring active:scale-90 sm:col-start-2"
          >
            Save
          </button>
        </form>
      </section>
    </>
  );
};
