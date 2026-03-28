<template>
  <div id="new" @keyup.enter="addPost">
    <input type="text" v-model="newPost.title" placeholder="새 게시글 제목" />
    <input type="text" v-model="newPost.content" placeholder="새 게시글 내용" />
    <button @click="addPost">저장</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  sortedPosts: Array,
});


const newPost = ref({
  title: '',
  content: '',
});

const emit = defineEmits(['add-post']);


const addPost = (e) => {
  
  if (newPost.value.title === '' || newPost.value.content === '') return;


  emit('add-post', {
    no: props.sortedPosts[0].no + 1,
    title: newPost.value.title,
    content: newPost.value.content,
  });


  newPost.value.title = '';
  newPost.value.content = '';
};
</script>

<style lang="scss" scoped></style>