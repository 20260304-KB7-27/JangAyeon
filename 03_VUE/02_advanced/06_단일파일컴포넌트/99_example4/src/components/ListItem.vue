<template>
  <li class="post-item-wrapper">
    <PostHeader
      :post="post"
      :is-open="isOpen"
      @toggle-post="togglePost"
    ></PostHeader>

    <PostDetail
      :is-open="isOpen"
      :is-edit="isEdit"
      :post="post"
      :edit-post="editPost"
      @start-edit="startEdit"
      @update-post="updatePost"
      @delete-post="deletePost"
      @close-post="closePost"
    ></PostDetail>
  </li>
</template>

<script setup>
import PostHeader from './PostHeader.vue';
import PostDetail from './PostDetail.vue';

const emit = defineEmits([
  'toggle-post',
  'start-edit',
  'update-post',
  'delete-post',
  'close-post',
]);

const props = defineProps({
  post: {
    no: [Number, String],
    title: String,
    content: String,
  },
  isOpen: Boolean,
  isEdit: Boolean,
  editPost: {
    no: [Number, String],
    title: String,
    content: String,
  },
});

const togglePost = (no) => {
  emit('toggle-post', no);
};
const startEdit = (post) => {
  emit('start-edit', post);
};
const updatePost = (editPost) => {
  emit('update-post', editPost);
};
const deletePost = (no) => {
  emit('delete-post', no);
};
const closePost = () => {
  emit('close-post');
};
</script>

<style lang="scss" scoped></style>
