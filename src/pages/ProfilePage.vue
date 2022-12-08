<template>
  <div>
    <div class="profileContainer">
      <TheAvatar :width="186" :height="186" />
      <div class="profile">
        <p class="name">
          <span>許語彤</span
          ><router-link to="/profile/edit">編輯個人檔案</router-link>
        </p>
        <p class="handle">@yu-tong_hsu</p>
        <div class="description">
          <pre>lalalili</pre>
        </div>
        <p class="website">www.google.com</p>
      </div>
    </div>
    <div class="tabs">
      <div class="tab active">
        <TheIcon icon="posts" />
        <p>我的</p>
      </div>
      <div class="tab">
        <TheIcon icon="like" />
        <p>喜愛</p>
      </div>
      <div class="tab">
        <TheIcon icon="favorite" />
        <p>典藏</p>
      </div>
    </div>
    <div class="tabContent">
      <p>162篇貼文</p>
      <div class="posts">
        <img v-for="n in 9" src="" class="postImage" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

import TheIcon from "../components/TheIcon.vue";
import TheAvatar from "../components/TheAvatar.vue";

const store = useStore();
const user = computed(() => store.state.user.user);
</script>

<style scoped>
.profileContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10vw;
}

.avatar {
  justify-self: end;
}

.profile .name {
  display: flex;
  align-items: center;
}

.profile .name > span {
  font-size: 26px;
}
.profile .name > a {
  color: #1da0ff;
  text-decoration: none;
  margin-left: 26px;
}
.profile .handle {
  margin-top: 4px;
  color: #848484;
}

.profile .description {
  margin-top: 26px;
  margin-bottom: 22px;
}

.tabs {
  display: grid;
  grid-template-columns: repeat(3, 88px);
  column-gap: 4vw;
  justify-content: center;

  margin-top: 7vmin;
  margin-bottom: 20px;
}

.tab {
  text-align: center;
  padding: 12px 0;
  cursor: pointer;
}
.tab > svg {
  width: 32px;
  height: 32px;
  stroke: #8a9194;
  fill: #8a9194;
}

.tab.active {
  background: #f6f9fb;
  border-radius: 18px;
}

.tab.active > svg {
  stroke: #1787d9;
  fill: #1787d9;
}
.tab.active > p {
  color: #1787d9;
}

.tabContent > p {
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
}

.posts {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}

.postImage {
  width: 100%;
  height: 321px;
  background: #eee;
  object-fit: cover;
}
</style>
