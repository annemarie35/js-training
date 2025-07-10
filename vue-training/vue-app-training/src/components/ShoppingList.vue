<script setup lang="ts">
import { ref, computed, type Ref } from 'vue'

type Item = {
  id: number
  label: string
  purchased: boolean
  highPriority: boolean
}

const header: Ref<string> = ref('Shopping List App')
const items: Ref<Item[]> = ref([
  { id: 1, label: '10 party hats', purchased: true, highPriority: true },
  { id: 2, label: '2 board games', purchased: false, highPriority: true },
  { id: 3, label: '20 cups', purchased: true, highPriority: false },
])
const editing: Ref<boolean> = ref(false)
const characterCount = computed(() => newItem.value.length)
const reversedItems = computed(() => {
  // return [...] spread operator returns a new instance of items
  return [...items.value].reverse()
})
const newItem: Ref<string> = ref('')
const newItemHighPriority: Ref<boolean> = ref(false)

const saveItems = () => {
  items.value.push({
    id: items.value.length + 1,
    label: newItem.value,
    purchased: false,
    highPriority: newItemHighPriority.value,
  })

  newItem.value = ''
  newItemHighPriority.value = false
}
const doEdit = (isEdited: boolean) => {
  editing.value = isEdited
  newItem.value = ''
  newItemHighPriority.value = false
}

const togglePurchased = (item: Item) => {
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
  <p class="counter">{{ characterCount }}/200</p>
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
