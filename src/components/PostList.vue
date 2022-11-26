<template>
  <div class="postList">
    <!-- <div class="postItem" v-for="n in 10">
        <img
          src=""
          alt=""
          width="100%"
          height="100%"
          style="background: #eee"
        />
        <div class="postInfo">
          <div class="postMeta">
            <TheAvatar />
            <span>許語彤</span>
            <span class="postPubDate">12小時之前</span>
            <PostActions />
            <div class="postDesc">
              <p>這是一棵樹，這是一棵樹喔！#植物 #職務</p>
            </div>
          </div>
        </div>
      </div> -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.postList {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
</style>
