export const Todo = ({ element, editHandler, deleteHandler }) => {
  return (
    <li className="m-2 grid w-56 grid-cols-2 grid-rows-2 items-center rounded border border-solid border-gray-700 bg-gray-50 px-2 py-2 shadow hover:scale-105 hover:cursor-pointer hover:border-gray-800">
      <p className="col-span-2 overflow-hidden text-lg drop-shadow">
        {element.text}
      </p>
      <p
        className="text-center text-sm drop-shadow hover:cursor-pointer hover:font-bold hover:underline"
        onClick={() => editHandler(element.id)}
      >
        Edit
      </p>
      <p
        className="text-center text-sm drop-shadow hover:cursor-pointer hover:font-bold hover:underline"
        onClick={() => deleteHandler(element.id)}
      >
        Remove
      </p>
    </li>
  );
};
