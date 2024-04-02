"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Todo } from "./Todo";

export const TodoList = ({ todos, deleteTodoHandler, editTodoHandler }) => {
  return (
    <section
      className={`no-scrollbar my-2 max-h-full  p-8  ${todos.length > 0 ? "overflow-y-scroll" : "overflow-hidden"}`}
    >
      <ul>
        {todos &&
          todos.map((e) => (
            <AnimatePresence mode="sync" key={e.id}>
              <motion.li
                exit={{ scale: 0.8, opacity: 0 }}
                initial={{ opacity: 0, scale: 0.85, filter: "blur(0.25rem)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0)" }}
                transition={{
                  duration: 0.25,
                  delay: 0.1,
                }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0)" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Todo
                  key={e.id}
                  element={e}
                  deleteHandler={deleteTodoHandler}
                  editHandler={editTodoHandler}
                />
              </motion.li>
            </AnimatePresence>
          ))}
        {todos.length == 0 && (
          <li className="m-2 w-40 rounded border border-solid border-gray-700 p-8 px-2 py-2 hover:cursor-pointer hover:border-gray-800">
            No elements
          </li>
        )}
      </ul>
    </section>
  );
};
