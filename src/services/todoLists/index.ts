export const getAllTodoLists = async () => {
  try {
    const res = await fetch("http://localhost:3000/lists");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
