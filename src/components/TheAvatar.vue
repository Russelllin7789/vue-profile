<template>
  <img :src="src || defaultAvatar" class="avatar" />
</template>

<script setup lang="ts">
import defaultAvatar from "../assets/avatarDefault.png";

defineProps<{
  src?: string;
  width: number;
  height: number;
}>();
</script>

<style scoped>
.avatar {
  width: v-bind(width + "px");
  height: v-bind(height + "px");
  border-radius: 50%;
  background: #eee;
  object-fit: cover;
  object-position: top center;
}
</style>
