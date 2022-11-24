<template>
  <div class="content">
    <div class="postList">
      <div class="postItem" v-for="n in 10">
        <img
          src=""
          alt=""
          width="100%"
          height="100%"
          style="background: #eee"
        />
        <div class="postInfo">
          <div class="postMeta">
            <img src="" alt="" class="avatar" />
            <span>許語彤</span>
            <span class="postPubDate">12小時之前</span>
            <div class="postActions">
              <TheIcon icon="like" fill="none" stroke="#000000" /><span
                >1.5k</span
              >
              <TheIcon icon="comment" fill="none" stroke="#000000" /><span
                >15k</span
              >
              <TheIcon icon="favorite" fill="none" stroke="#000000" /><span
                >99k</span
              >
            </div>
            <div class="postDesc">
              <p>這是一棵樹，這是一棵樹喔！#植物 #職務</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheIcon from "../components/TheIcon.vue";
</script>

<style scoped>
.content {
  width: 80vw;
  max-width: 1124px;
  margin: 0 auto;
  margin-top: 88px;
}

.postList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

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

.postActions {
  grid-area: actions;
  justify-self: end;
}

.postDesc {
  margin-top: 28px;
  white-space: pre-line;
}
</style>
