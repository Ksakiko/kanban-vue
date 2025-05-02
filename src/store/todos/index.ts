// import { defineStore } from "pinia";
// import { ref } from "vue";
// import type { Todo } from "../../services/todos/types";
// import type { APIResponse } from "../../services/types";
// import { API } from "../../services";
// import type { AxiosError } from "axios";

// export const useTodoStore = defineStore("todoStore", () => {
//   const todos = ref<Todo[]>([]);

//   const initTodos = (data: Todo[]) => {
//     todos.value = data;
//   };

//   async function dispatchGetTodos(): Promise<APIResponse<null>> {
//     try {
//       const { status, data } = await API.todos.getAllTodos();
//       if (status === 200) {
//         initTodos(data.content);
//         return {
//           success: true,
//           content: null,
//         };
//       }
//     } catch (error) {
//       const _error = error as AxiosError<string>;
//       return {
//         success: false,
//         status: _error.response?.status,
//         content: null,
//       };
//     }
//     return {
//       success: false,
//       content: null,
//       status: 400,
//     };
//   }

//   return {
//     todos,
//     initTodos,
//     dispatchGetTodos,
//   };
// });
