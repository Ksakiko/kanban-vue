<template>
  <div class="todo-list">
    <header class="todo-list__header">
      <h3 class="todo-list__title">{{ list.title }}</h3>
      <div class="todo-list__action">
        <button @click="handleDeleteList">X</button>
      </div>
    </header>
    <ul class="todo-list__list">
      <TodoItem
        v-for="todo in filteredTodos"
        :todo="todo"
        :key="todo.id"
        @handleDeleteTodo="handleDeleteTodo"
      />
      <div class="todo-list__action" v-if="!formIsVisible">
        <button @click="handleAddTodo">+ Add new todo</button>
      </div>
      <TodoForm v-else :listId="list.id" @filterTodos="filterTodos" />
    </ul>
  </div>
</template>

<script setup>
import "./TodoList.css";
import TodoForm from "../TodoForm/TodoForm.vue";
import TodoItem from "../TodoItem/TodoItem.vue";
import { deleteMultipleTodos, getAllTodos } from "../../services/todos";
import { deleteTodo } from "../../services/todos";
import { ref } from "vue";
import { deleteList } from "../../services/todoLists";

const props = defineProps(["list"]);
const emit = defineEmits(["getTempUpdatedTodoLists"]);

const filteredTodos = ref([]);
const formIsVisible = ref(false);
const todoListId = ref(props.list.id);

const handleAddTodo = () => {
  formIsVisible.value = true;
};

const handleDeleteTodo = (e, id) => {
  // Update for Frontend's sake
  const newTodos = filteredTodos.value.filter((x) => x.id !== id);
  filteredTodos.value = newTodos;

  // Handle backend
  deleteTodo(id);
};

const handleDeleteList = async () => {
  const todosToBeDeleted = filteredTodos.value.filter(
    (x) => x.listId === todoListId.value
  );

  const todoIds = todosToBeDeleted.map((x) => x.id);

  deleteMultipleTodos(todoIds);

  // Handle delete in backend
  deleteList(todoListId.value);

  // Update the lists realtime in frontend
  emit("getTempUpdatedTodoLists", todoListId.value);
};

const filterTodos = async () => {
  formIsVisible.value = false;
  const data = await getAllTodos();

  const newTodos = await data.filter(
    (todo) => todo.listId === todoListId.value
  );

  filteredTodos.value = await newTodos;
};

filterTodos();
</script>
