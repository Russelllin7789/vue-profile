<template>
  <div>
    <PostList>
      <PostItem v-for="n in 10" />
    </PostList>
    <!-- <PostDetails /> -->
    <PostUpload v-if="showPostUpload" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import PostDetails from "../components/PostDetails.vue";
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";
import { useStore } from "vuex";

const store = useStore();

const showPostUpload = computed(() => store.state.showPostUpload);
</script>

<style scoped></style>
