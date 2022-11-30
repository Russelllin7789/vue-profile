<template>
  <TheModal @close="store.commit('changeShowPostUpload', false)">
    <div class="postUpload">
      <label class="upload">
        <img v-if="imageUrl" :src="imageUrl" class="preview" />
        <TheIcon v-else icon="upload-image" />
        <input
          type="file"
          accept="image/*"
          class="fileChooser"
          @change="handleImageUpload"
        />
      </label>

      <div class="postContent">
        <textarea
          placeholder="留下想說的話吧......"
          class="postContentInput"
        ></textarea>
        <TheButton class="pubBtn">送出</TheButton>
      </div>
    </div>
  </TheModal>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TheModal from "./TheModal.vue";
import TheIcon from "./TheIcon.vue";
import TheButton from "./TheButton.vue";
import { useStore } from "vuex";

const store = useStore();

const imageUrl = ref("");

const handleImageUpload = async (e: Event): Promise<void> => {
  const imageFileList = (e.target as HTMLInputElement).files as FileList;
  if (imageFileList[0]) {
    imageUrl.value = URL.createObjectURL(imageFileList[0]);
  }
};
</script>

<style scoped>
.postUpload {
  width: 50vw;
  height: 70vh;
  display: grid;
  grid-template-rows: 4fr 1fr;
}

.preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 0;
}
.upload {
  display: grid;
  place-items: center;
  cursor: pointer;
  min-height: 0;
}
.upload > svg {
  width: 254px;
  height: 316px;
}

.fileChooser {
  opacity: 0;
  position: absolute;
}

.postContent {
  display: grid;
}
.postContentInput {
  border-bottom: none;
  resize: none;
  padding: 12px 24px;
}

.postContentInput::placeholder {
  color: #757575;
}

.pubBtn {
  align-self: end;
  justify-self: end;
  position: relative;
  right: 24px;
  bottom: 18px;
}
</style>
