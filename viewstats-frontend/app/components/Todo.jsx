export const Todo = ({ element, editHandler, deleteHandler }) => {
  return (
    <li className="shadow grid grid-rows-2 grid-cols-2 w-40 px-2 py-2 m-2 border border-gray-700 border-solid rounded hover:border-gray-800 items-center">
      <p className="text-lg col-span-2">{element.text}</p>
      <p
        className="text-sm hover:cursor-pointer hover:underline text-center"
        onClick={() => editHandler(element.id)}
      >
        Edit
      </p>
      <p
        className="text-sm hover:cursor-pointer hover:underline text-center"
        onClick={() => deleteHandler(element.id)}
      >
        Remove
      </p>
    </li>
  );
};
