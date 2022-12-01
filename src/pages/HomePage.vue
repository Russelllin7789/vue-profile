<template>
  <div>
    <PostList>
      <PostItem v-for="post in posts" />
    </PostList>
    <!-- <PostDetails /> -->
    <PostUpload v-if="showPostUpload" />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import PostDetails from "../components/PostDetails.vue";
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";
import { useStore } from "vuex";

const store = useStore();

const showPostUpload = computed(() => store.state.showPostUpload);

const posts = computed(() => store.state.post.list);

onMounted(() => {
  store.dispatch("loadAllPosts");
});
</script>

<style scoped></style>
