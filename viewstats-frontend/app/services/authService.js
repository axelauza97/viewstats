export async function loginWithEmailAndPassword(formData) {
  const response = await fetch(
    "https://axelsell2.pythonanywhere.com/api/login/",
    {
      method: "POST",
      body: formData,
    },
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const userData = await response.json();
  return userData;
}
export async function createUserWithEmailAndPassword(formData) {
  const response = await fetch(
    "https://axelsell2.pythonanywhere.com/api/user/create/",
    {
      method: "POST",
      body: formData,
    },
  );
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message);
  }
  const userData = await response.json();
  return userData;
}
