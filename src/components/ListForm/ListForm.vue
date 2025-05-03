<template>
  <div class="todo-list">
    <form class="form list-form">
      <label for="todoList"></label>
      <input
        type="text"
        id="todoList"
        name="todoList"
        placeholder="Write a list name here..."
        v-model="listTitleInput"
        @blur="handleSubmit"
      />
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import "./ListForm.css";
import { postNewList } from "../../services/todoLists";

const emit = defineEmits(["getTodoLists"]);
const listTitleInput = ref("");

const handleSubmit = async () => {
  if (listTitleInput.value === "") return;
  const newList = {
    title: listTitleInput.value,
  };
  await postNewList(newList);
  emit("getTodoLists");
};
</script>
