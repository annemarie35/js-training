<script setup lang="ts">
import { ref } from 'vue'

const header = ref('Shopping List App')
const items = ref([
  {id: 1, label: "10 party hats", purchased: true, highPriority: true},
  {id: 2, label:"2 board games", purchased: false, highPriority: true},
  {id: 3, label: "20 cups", purchased: true, highPriority: false}
])
const editing = ref(false)
const newItem = ref('')
const newItemHighPriority = ref(false)
const saveItems = () => {
  items.value.push({id: items.value.length + 1,label: newItem.value})
  newItem.value = ''
}
const doEdit = (edit)=>{
  editing.value = edit
  newItem.value = ""
}
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">
      Cancel
    </button>
    <button
      v-else class="btn btn-primary"
      @click="doEdit(true)"
    >
      Add Item
    </button>
  </div>
<!--  <a v-bind:href="newItem">Dynamic Link</a>-->
  <form
    class="add-item-form"
    @submit.prevent="saveItems"
    v-if="editing"
  >
  <input
    v-model.trim='newItem'
    type="text"
    placeholder="Add an item" />
  <label>
    <input type="checkbox" v-model="newItemHighPriority" value="true">
    High priority
  </label>

  <button class="btn btn-primary"  :disabled="newItem.length < 5">Add item</button>/
  </form>
  <br/>
  <ul>
    <li
      v-for="({id, label, purchased, highPriority}) in items"
      :key="id"
      :class="[
        purchased ? 'strikeout' : '',
        highPriority ? 'priority' : '',
        ]"
    >
      {{label}}
    </li>
  </ul>
  <p v-if="!items.length">
    Nothing to see here
  </p>

</template>
