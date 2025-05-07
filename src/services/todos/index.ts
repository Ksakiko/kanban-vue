// import http from "../api";
// import type { APIResponse } from "../types";
// import type { Todo } from "./types";

import type { InputTodo } from "./types";

// const getAllTodos = async () => {
//   return await http.get<APIResponse<Todo[]>>("todos");
// };

// export default {
//   getAllTodos,
// };
export const getAllTodos = async () => {
  try {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postNewTodo = async (todo: InputTodo) => {
  try {
    const res = await fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(todo),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    const res = await fetch(`http://localhost:3000/todos/${todoId}`, {
      method: "DELETE",
    });
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

// Use this in order to delete todos by listId
export const deleteMultipleTodos = async (todoIds: string[]) => {
  try {
    Promise.all(
      todoIds.map((id) => {
        fetch(`http://localhost:3000/todos/${id}`, {
          method: "DELETE",
        }).then((res) => res.json());
      })
    );
  } catch (err) {
    console.error(err);
  }
};
