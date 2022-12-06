<template>
  <div>
    <h2 class="title">Profile</h2>
    <div class="changeAvatar">
      <TheAvatar :width="48" :height="48" :src="profileData.avatar" />
      <TheButton>Avatar</TheButton>
      <input type="file" class="inputFile" @change="uploadAvatar" />
    </div>
    <form class="profileForm">
      <label for="username">Name</label>
      <input type="text" v-model="profileData.username" />
      <label for="name">Nickname</label>
      <input type="text" v-model="profileData.name" />
      <label for="intro">Introduction</label>
      <textarea rows="12" v-model="profileData.intro"></textarea>
      <label for="mobilePhone">Phone</label>
      <input type="text" v-model="profileData.mobilePhone" />
      <label>Gender</label>
      <div class="genderRadios">
        <input
          type="radio"
          name="gender"
          id="M"
          value="M"
          v-model="profileData.gender"
        />
        Male
        <input
          type="radio"
          name="gender"
          id="F"
          value="F"
          v-model="profileData.gender"
        />
        Female
      </div>
      <label for="website">Website</label>
      <input type="text" v-model="profileData.website" />
      <div class="actions">
        <TheButton type="reset" reverse>Cancel</TheButton>
        <TheButton type="submit">Save</TheButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import TheButton from "../components/TheButton.vue";
import TheAvatar from "../components/TheAvatar.vue";

import { useStore } from "vuex";
import { computed, reactive } from "vue";
import { uploadFile } from "../apis/file";

const store = useStore();
const user = computed(() => store.state.user.user);
const profileData = reactive({
  avatar: user.value.avatar,
  username: user.value.username,
  name: user.value.name,
  intro: user.value.intro,
  mobilePhone: user.value.mobilePhone,
  gender: user.value.gender,
  website: user.value.website,
});

const uploadAvatar = async (e: Event) => {
  const file = (e.target as HTMLInputElement).files?.[0];
  const url = await uploadFile(file);
  profileData.avatar = url;
};
</script>

<style scoped>
.title {
  margin-bottom: 42px;
  font-size: 24px;
  font-weight: 600;
}

.changeAvatar {
  display: flex;
  align-items: center;
  position: relative;
}

.changeAvatar .button {
  margin-left: 26px;
}

.inputFile {
  opacity: 0;
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
}

.profileForm {
  display: grid;
  grid-template-columns: max-content 1fr;
  row-gap: 32px;
  column-gap: 10px;
  margin-top: 38px;
}

.profileForm > label {
  grid-column: 1 / 2;
  justify-self: end;
  position: relative;
  top: 6px;
}

.profileForm .actions {
  grid-column: 1 / 3;
  justify-self: end;
  display: flex;
  gap: 16px;
}
</style>
