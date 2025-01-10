<script setup lang="ts">
import { ref, computed } from 'vue'

const header = ref('Shopping List App')
const items = ref([
  { id: 1, label: '10 party hats', purchased: true, highPriority: true },
  { id: 2, label: '2 board games', purchased: false, highPriority: true },
  { id: 3, label: '20 cups', purchased: true, highPriority: false },
])
const editing = ref(false)
const caracterCount = computed(() => newItem.value.length)
const reversedItems = computed(() => {
  // return [...] spread operator returns a new instance of items
  return [...items.value].reverse()
})
const newItem = ref('')
const newItemHighPriority = ref(false)
const saveItems = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    highPriority: newItemHighPriority.value,
  })
  newItem.value = ''
  newItemHighPriority.value = ''
}
const doEdit = (edit) => {
  editing.value = edit
  newItem.value = ''
  newItemHighPriority.value = ''
}

const togglePurchased = (item) => {
  item.purchased = !item.purchased
}
</script>

<template>
  <div class="header">
    <h1>{{ header }}</h1>
    <button v-if="editing" class="btn" @click="doEdit(false)">Cancel</button>
    <button v-else class="btn btn-primary" @click="doEdit(true)">Add Item</button>
  </div>
  <!--  <a v-bind:href="newItem">Dynamic Link</a>-->
  <form class="add-item-form" @submit.prevent="saveItems" v-if="editing">
    <input v-model.trim="newItem" type="text" placeholder="Add an item" />
    <label>
      <input type="checkbox" v-model="newItemHighPriority" value="true" />
      High priority
    </label>

    <button class="btn btn-primary" :disabled="newItem.length < 5">Add item</button>/
  </form>
  <p class="counter">{{ caracterCount }}/200</p>
  <ul>
    <li
      @click="togglePurchased(item)"
      v-for="item in reversedItems"
      :key="item.id"
      :class="[item.purchased ? 'strikeout' : '', item.highPriority ? 'priority' : '']"
    >
      {{ item.label }}
    </li>
  </ul>
  <p v-if="!items.length">Nothing to see here</p>
</template>
