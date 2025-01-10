<script src="../main.ts"></script>
<script setup lang="ts">
import { ref, reactive } from 'vue'

const state = reactive({ count: 0 })
// const increment = () => {
//   state = {
//     count: state.count++,
//   }
// }
// do not work
const increment = () => state.count++
const msg = ref('Hello World!')
console.log(msg.value)
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ state.count }}</h2>
  <button @click="increment">Increment Count</button>
</template>
