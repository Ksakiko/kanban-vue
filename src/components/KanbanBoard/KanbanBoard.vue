<template>
  <div class="kanban-board">
    <div class="container__inner">
      <div class="kanban-board__action">
        <button @click="handleAddNewList">+ Add new list</button>
      </div>
      <div class="kanban-board__inner">
        <TodoList
          v-for="list in todoLists"
          :list="list"
          :key="list.id"
          @getTempUpdatedTodoLists="getTempUpdatedTodoLists"
          @dragover="handleDragover"
          @drop="handleDrop"
        />
        <ListForm v-if="newListIsVisible" @getTodoLists="getTodoLists" />
      </div>
    </div>
  </div>
</template>

<script setup>
import "./KanbanBoard.css";
import { getAllTodoLists } from "../../services/todoLists";
import TodoList from "../TodoList/TodoList.vue";
import { ref } from "vue";
import ListForm from "../ListForm/ListForm.vue";
import { useTodosStore } from "../../store/todos";
import { updateListIdToBelong } from "../../services/todos";

const todoLists = ref([]);
const newListIsVisible = ref(false);
const store = useTodosStore();

const getTodoLists = async () => {
  newListIsVisible.value = false;
  const data = await getAllTodoLists();
  todoLists.value = await data;
};

const getTempUpdatedTodoLists = (id) => {
  const newList = todoLists.value.filter((x) => x.id !== id);
  todoLists.value = newList;
};

const handleAddNewList = () => {
  newListIsVisible.value = true;
};

const handleDragover = (e) => {
  e.preventDefault();
};
const handleDrop = async (e) => {
  const todoId = store.currentDraggedTodoId;
  const listId = e.target.closest(".todo-list").id;

  // Update database
  await updateListIdToBelong(todoId, listId);
};

getTodoLists();
</script>
