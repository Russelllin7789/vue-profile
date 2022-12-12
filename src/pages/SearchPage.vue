<template>
  <div>
    <h2 class="title">搜尋結果：{{ term }}</h2>
    <PostList>
      <PostItem v-for="post in searchResult" :post="post" />
    </PostList>
    <!-- <PostDetails /> -->
    <PostUpload />
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed } from "vue";
import PostDetails from "../components/PostDetails.vue";
import PostList from "../components/PostList.vue";
import PostItem from "../components/PostItem.vue";
import PostUpload from "../components/PostUpload.vue";

const store = useStore();
const searchResult = computed(() => store.state.post.searchResult);
const route = useRoute();
const term = computed(() => route.params.term);
</script>

<style scoped>
.title {
  font-weight: 600px;
  font-size: 24px;
  margin-bottom: 44px;
}
</style>
