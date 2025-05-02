<template>
  <Header />
  <main class="main">
    <KanbanBoard />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import KanbanBoard from "./components/KanbanBoard/KanbanBoard.vue";
</script>
