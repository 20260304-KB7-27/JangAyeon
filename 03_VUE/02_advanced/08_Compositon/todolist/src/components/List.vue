<template>
  <div>
    <ul>
      <TodoItem
        v-for="todoItem in todoList"
        :key="todoItem.id"
        :todoItem="todoItem"
        @toggle-complete="toggleComplete"
        @delete-todo="deleteTodo"
      ></TodoItem>
    </ul>
  </div>
</template>

<script setup>
import TodoItem from './TodoItem.vue';

const props = defineProps({
  todoList: Array,
});

const emit = defineEmits(['toggle-complete', 'delete-todo']);
const toggleComplete = (id) => {
  emit('toggle-complete', id);
};
const deleteTodo = (id) => {
  emit('delete-todo', id);
};
</script>