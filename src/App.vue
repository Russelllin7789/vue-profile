<template>
  <div>
    <header class="header">
      <Navbar />
    </header>
    <TheLayout>
      <router-view></router-view>
    </TheLayout>
  </div>
</template>

<script setup lang="ts">
import "./assets/base.css";
import Navbar from "./components/Navbar.vue";
import TheLayout from "./components/TheLayout.vue";
</script>

<style scoped>
.header {
  height: 80px;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
}

.footer {
  text-align: center;
  padding: 38px 0;
  color: #828282;
}
.footer.inside {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
