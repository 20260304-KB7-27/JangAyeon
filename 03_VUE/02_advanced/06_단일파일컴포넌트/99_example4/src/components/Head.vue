<template>
  <div>
    
    <div @click="emit('toggle-post', post.no)" class="post-item">
      {{ post.no }}. {{ post.title }}
      <span class="arrow">{{ isOpen ? '▲' : '▼' }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    no: [Number, String],
    title: String,
    content: String,
  },
  isOpen: Boolean,
});
const emit = defineEmits(['toggle-post']);
</script>

<style lang="scss" scoped></style>