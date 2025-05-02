<template>
  <div class="kanban-board">
    <div class="container__inner kanban-board__inner">
      <TodoList v-for="list in todoLists" :list="list" :key="list.id" />
    </div>
  </div>
</template>

<script setup>
import "./KanbanBoard.css";
import { getAllTodoLists } from "../../services/todoLists";
import TodoList from "../TodoList/TodoList.vue";
import { ref } from "vue";

const todoLists = ref([]);

const getTodoLists = async () => {
  const data = await getAllTodoLists();
  todoLists.value = await data;
};

getTodoLists();
</script>
