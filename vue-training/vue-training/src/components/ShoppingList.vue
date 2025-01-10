<script setup lang="ts">
import { ref } from 'vue'

const header = ref('Shopping List App')
const items = ref([
  {id: 1, label: "10 party hats"},
  {id: 2, label:"2 board games"},
  {id: 3, label: "20 cups"}
])
const newItem = ref('')
const newItemHighPriority = ref(false)
const iceCreamFlavors = ref([])

</script>

<template>
  <h1>{{ header }}</h1>
  <div class="add-item-form">
  <input
    v-model.trim='newItem'
    v-on:keyup.enter="items.push({id: items.length + 1,label: newItem})"
    type="text"
    placeholder="Add an item" />
  <label>
    <input type="checkbox" v-model="newItemHighPriority" value="true">
    High priority
  </label>

  <button v-on:click="items.push({id: items.length + 1,label: newItem})" class="btn btn-primary">Add item</button>/
  </div>
  <br/>
  <ul>
    <li v-for="({id, label}) in items" :key="id">
      {{label}}
    </li>
  </ul>
</template>
