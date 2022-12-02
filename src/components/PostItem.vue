<template>
  <div class="postItem">
    <img
      :src="post.image"
      alt=""
      width="100%"
      height="100%"
      style="background: #eee"
    />
    <div class="postInfo">
      <div class="postMeta">
        <TheAvatar :src="post?.user?.avatar" />
        <span>{{ post?.user?.name || "NotFound" }}</span>
        <span class="postPubDate">{{ dateToRelative(post.publishedAt) }}</span>
        <PostActions />
        <div class="postDesc">
          <p>{{ post.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheAvatar from "../components/TheAvatar.vue";
import PostActions from "../components/PostActions.vue";
import dateToRelative from "../utils/date";

defineProps<{
  post: any;
}>();
</script>

<style scoped>
.postItem {
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.postInfo {
  padding: 24px;
}

.postItem > img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: #eee;
  cursor: pointer;
}

.postMeta {
  display: grid;
  grid-template-areas:
    "avatar name actions"
    "pubDate pubDate actions";
  grid-template-columns: 42px 1fr 3fr;
  row-gap: 6px;
}
.postMeta .avatar {
  grid-area: avatar;
}

.postMeta .postPubDate {
  grid-area: pubDate;
  color: #9f9f9f;
  font-size: 14px;
}

.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>
