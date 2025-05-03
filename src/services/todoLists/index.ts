import type { InputList } from "./type";

export const getAllTodoLists = async () => {
  try {
    const res = await fetch("http://localhost:3000/lists");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postNewList = async (list: InputList) => {
  try {
    const res = await fetch("http://localhost:3000/lists", {
      method: "POST",
      body: JSON.stringify(list),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteList = async (listId: string) => {
  try {
    const res = await fetch(`http://localhost:3000/lists/${listId}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
