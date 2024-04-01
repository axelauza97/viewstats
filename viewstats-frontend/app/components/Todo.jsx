export const Todo = ({ element, editHandler, deleteHandler }) => {
  return (
    <li className="hover:scale-105 hover:cursor-pointer bg-slate-100 m-2 grid w-40 grid-cols-2 grid-rows-2 items-center rounded border border-solid border-gray-700 px-2 py-2 shadow hover:border-gray-800">
      <p className="drop-shadow col-span-2 text-lg">{element.text}</p>
      <p
        className="drop-shadow text-center text-sm hover:cursor-pointer hover:underline hover:font-bold"
        onClick={() => editHandler(element.id)}
      >
        Edit
      </p>
      <p
        className="drop-shadow text-center text-sm hover:cursor-pointer hover:underline hover:font-bold"
        onClick={() => deleteHandler(element.id)}
      >
        Remove
      </p>
    </li>
  );
};
