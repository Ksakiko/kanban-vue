<template>
  <li
    class="todo-item"
    draggable="true"
    :id="todo.id"
    ref="todoItem"
    @mousedown="handleDrag"
  >
    <div>
      {{ todo.todo }}
      <button @click="$emit('handleDeleteTodo', e, todo.id)">X</button>
    </div>
  </li>
</template>

<script setup>
import { useTodosStore } from "../../store/todos";
import "./TodoItem.css";
import { ref } from "vue";
const props = defineProps(["todo"]);
const emit = defineEmits(["handleDeleteTodo"]);

const store = useTodosStore();

const handleDrag = (e) => {
  store.currentDraggedTodoId = props.todo.id;
};

// const todoItem = ref(null);

// let offsetX = 0;
// let offsetY = 0;
// let currentElement = null;

// const startDrag = (e, element) => {
//   currentElement = element;
//   if (currentElement) {
//     currentElement.style.position = "absolute";
//   }
//   drag(e);
// };

// const drag = (e) => {
//   if (currentElement) {
//     const rect = currentElement.getBoundingClientRect();
//     offsetX = e.clientX - rect.left;
//     offsetY = e.clientY - rect.top;
//   }

//   document.addEventListener("mousemove", dragOn);
//   document.addEventListener("mouseup", dragOff);
// };

// const dragOn = (e) => {
//   if (currentElement) {
//     const containerRect = currentElement.parentElement.getBoundingClientRect();
//     const newLeft =
//       e.clientX - containerRect.left - currentElement.offsetWidth / 2;
//     // e.clientX - offsetX;
//     const newTop =
//       e.clientY - containerRect.top - currentElement.offsetHeight / 2;
//     // e.clientY - offsetY;

//     currentElement.style.left = `${newLeft}px`;
//     currentElement.style.top = `${newTop}px`;
//   }
// };

// const dragOff = () => {
//   document.removeEventListener("mousemove", dragOn);
//   document.removeEventListener("mouseup", dragOff);

//   // Backend

//   currentElement = null;
// };
</script>
