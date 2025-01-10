<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg.toLowerCase() }}</h1>
  <input v-model="msg" />
</template>
