import { createPost } from "../../apis/post";

export const post = {
  state() {},
  mutations: {},
  actions: {
    async uploadPost(
      { commit, dispatch }: { commit: any; dispatch: any },
      { image, description }: { image: File; description: string }
    ) {
      await createPost(image, description);
      commit("changeShowPostUpload", false);
    },
  },
};
