<template>
  <div class="postActions">
    <TheIcon
      icon="like"
      :fill="likedByMe ? '#FF3c3c' : 'none'"
      :stroke="likedByMe ? '#FF3c3c' : '#000000'"
      @click="$emit('likeClick')"
    /><span>{{ likes || "" }}</span>
    <TheIcon
      icon="comment"
      fill="none"
      stroke="#000000"
      @click="$emit('commentsClick')"
    /><span>{{ comments || "" }}</span>
    <TheIcon
      icon="favorite"
      :fill="likedByMe ? '#FFD12E' : 'none'"
      :stroke="likedByMe ? '#FFD12E' : '#000000'"
      @click="$emit('favorClick')"
    /><span>{{ favors || "" }}</span>
  </div>
</template>

<script setup lang="ts">
import TheIcon from "./TheIcon.vue";

defineProps<{
  likes: number;
  comments: number;
  favors: number;
  likedByMe: boolean;
  favoredByMe: boolean;
}>();

defineEmits(["likeClick", "commentsClick", "favorClick"]);
</script>

<style scoped>
.postActions {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  column-gap: 16px;
  row-gap: 4px;
}

.postActions > svg {
  width: 32px;
  height: 32px;
  grid-row: 1 / 2;
  cursor: pointer;
}

.postActions > span {
  font-size: 14px;
}
</style>
