<template>
  <li class="todo-item">
    <div>
      {{ todo.todo }}
      <button @click="$emit('handleDeleteTodo', e, todo.id)">X</button>
    </div>
  </li>
</template>

<script setup>
import "./TodoItem.css";
defineProps(["todo"]);
defineEmits(["handleDeleteTodo"]);
</script>
