export const fetchTodos = async ({ userId }) => {
  const response = await fetch(
    "http://127.0.0.1:8000/api/todos/?user_id=" + userId,
    {
      method: "GET",
    },
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const userData = await response.json();
  return userData;
};
export const saveTodo = async (formData) => {
  const response = await fetch("http://127.0.0.1:8000/api/todos/", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const userData = await response.json();
  return userData;
};

export const deleteTodo = async ({ uid }) => {
  const response = await fetch(`http://127.0.0.1:8000/api/todos/${uid}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const userData = await response.json();
  return userData;
};

export const editTodo = async ({ formData, id }) => {
  const response = await fetch(`http://127.0.0.1:8000/api/todos/${id}/`, {
    method: "PATCH",
    body: formData,
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const userData = await response.json();
  return userData;
};
