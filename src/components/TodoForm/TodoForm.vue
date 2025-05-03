<template>
  <form class="form todo-form">
    <label for="todo"></label>
    <input
      type="text"
      id="todo"
      name="todo"
      placeholder="Write a new todo here..."
      v-model="todoInput"
      @blur="handleSubmit"
    />
  </form>
</template>

<script setup>
import { postNewTodo } from "../../services/todos";
import "./TodoForm.css";
import { ref } from "vue";

const props = defineProps(["listId"]);
const emit = defineEmits(["filterTodos"]);

const todoInput = ref("");
const listId = ref(props.listId);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (todoInput.value === "") return;
  console.log("SUBMIT");

  const res = await postNewTodo({
    todo: todoInput.value,
    listId: listId.value,
  });

  emit("filterTodos");
};
</script>
