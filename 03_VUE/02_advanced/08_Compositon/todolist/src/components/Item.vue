<template>
  <div>
    <li @click="toggleComplete(todoItem.id)">
      <span
        :style="{
          textDecoration: todoItem.completed ? 'line-through' : 'none',
        }"
      >
        {{ todoItem.todo }} {{ todoItem.completed ? '[완료]' : '' }}
      </span>
      <span @click="deleteTodo(todoItem.id)">삭제</span>
    </li>
  </div>
</template>

<script setup>
const props = defineProps({
  todoItem: Object,
});

const emit = defineEmits(['toggle-complete', 'delete-todo']);

const toggleComplete = (id) => {
  emit('toggle-complete', id);
};
const deleteTodo = (id) => {
  emit('delete-todo', id);
};
</script>

<style></style>