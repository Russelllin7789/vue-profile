import { createPost, loadPosts } from "../../apis/post";

export const post = {
  state() {
    return {
      list: [],
    };
  },
  mutations: {
    initializePosts(state: any, posts: any) {
      state.list = posts;
    },
  },
  actions: {
    async uploadPost(
      { commit, dispatch }: { commit: any; dispatch: any },
      { image, description }: { image: File; description: string }
    ) {
      await createPost(image, description);
      commit("changeShowPostUpload", false);
      dispatch("loadAllPosts");
    },

    async loadAllPosts({ commit }: { commit: any }) {
      const posts = await loadPosts();
      commit("initializePosts", posts);
    },
  },
};
