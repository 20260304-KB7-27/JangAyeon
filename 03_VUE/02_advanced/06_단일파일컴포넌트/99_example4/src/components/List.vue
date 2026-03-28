<template>
  <ul>
    <PostListItem
      v-for="post in posts"
      :key="post.no"
      :post="post"
      :is-open="selectedPostNo === post.no"
      :is-edit="isEdit"
      :edit-post="editPost"
      @toggle-post="togglePost"
      @close-post="closePost"
      @start-edit="startEdit"
      @update-post="updatePost"
      @delete-post="deletePost"
    ></PostListItem>
  </ul>
</template>

<script setup>
import PostListItem from './PostListItem.vue';
import { ref } from 'vue';


const props = defineProps({
  posts: Array,
});

const emit = defineEmits(['update-post', 'delete-post']);


const selectedPostNo = ref(null);

const togglePost = (no) => {
  
  selectedPostNo.value = selectedPostNo.value === no ? null : no;
};
const closePost = () => {
  selectedPostNo.value = null;
  isEdit.value = false;
};


const isEdit = ref(false);


const editPost = ref({
  no: '',
  title: '',
  content: '',
});


const startEdit = (post) => {
  editPost.value.no = post.no;
  editPost.value.title = post.title;
  editPost.value.content = post.content;
  isEdit.value = true;
};

const updatePost = (post) => {
  emit('update-post', post);
  isEdit.value = false;
  editPost.value.no = '';
  editPost.value.title = '';
  editPost.value.content = '';
};
const deletePost = (no) => {
  emit('delete-post', no);
};
</script>

<style lang="scss" scoped></style>