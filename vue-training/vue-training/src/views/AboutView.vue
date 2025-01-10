<template>
  <ShoppingList/>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import About from "@/components/About.vue";
import ShoppingList from "@/components/ShoppingList.vue";
</script>
