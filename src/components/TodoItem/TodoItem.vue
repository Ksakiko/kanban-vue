<template>
  <li class="todo-item">
    <div>
      {{ todo.todo }}
      <button @click="$emit('handleDelete', e, todo.id)">X</button>
    </div>
  </li>
</template>

<script setup>
import "./TodoItem.css";
defineProps(["todo"]);
defineEmits(["handleDelete"]);
</script>
