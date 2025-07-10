<template>
  <ShoppingList />
  <ReactiveFunction />
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
import ShoppingList from '@/components/ShoppingList.vue'
import ReactiveFunction from '@/components/ReactiveFunction.vue'
</script>
