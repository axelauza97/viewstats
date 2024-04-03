import { SvgGrocery } from "../svg/grocery";
import { SvgSchool } from "../svg/school";
import { SvgWork } from "../svg/work";

export const Todo = ({ element, editHandler, deleteHandler }) => {
  return (
    <article className="relative my-2 grid grid-cols-2 grid-rows-2 items-center rounded bg-white px-2 py-2 shadow hover:scale-105 hover:cursor-pointer hover:border-gray-800 sm:m-2 sm:w-full">
      <p className="col-span-2 max-w-[90%] overflow-hidden truncate text-lg drop-shadow ">
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
      <p className="bg-red absolute right-0 top-0 h-8 w-8 rounded p-1 shadow">
        {element.category === "work" ? <SvgWork /> : ""}
        {element.category === "grocery" ? <SvgGrocery /> : ""}
        {element.category === "school" ? <SvgSchool /> : ""}
      </p>
    </article>
  );
};
