import { createPost, loadPosts, likePost, favorPost } from "../../apis/post";

export const post = {
  state() {
    return {
      list: [],
      searchResult: [],
      currentId: null,
    };
  },
  mutations: {
    initializePosts(state: any, posts: any) {
      state.list = posts;
    },
    toggleLike(state: any, { id, isLike }: { id: string; isLike: boolean }) {
      const post = state.list.find((post: any) => post.id === id);
      if (isLike) {
        post.liked_bies = (post.liked_bies || 0) + 1;
      } else {
        post.liked_bies--;
      }
      post.likedByMe = isLike;
    },
    toggleFavor(state: any, { id, isFavor }: { id: string; isFavor: boolean }) {
      const post = state.list.find((post: any) => post.id === id);
      if (isFavor) {
        post.favored_bies = (post.favored_bies || 0) + 1;
      } else {
        post.favored_bies--;
      }
      post.favoredByMe = isFavor;
    },
    setCurrentId(state: any, id: string) {
      state.currentId = id;
    },
    increaseCommentCount(state: any, id: string) {
      const post = state.list.find((post: any) => post.id === id);
      post.comments++;
    },
    setPostsSearchResult(state: any, posts: any) {
      state.searchResult = posts;
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

    async toggleLike({ commit }: { commit: any }, id: string) {
      const isLike = await likePost(id);
      commit("toggleLike", { id, isLike });
    },

    async toggleFavor({ commit }: { commit: any }, id: string) {
      const isFavor = await favorPost(id);
      commit("toggleFavor", { id, isFavor });
    },
    async showPostDetails(
      { commit, dispatch }: { commit: any; dispatch: any },
      id: string
    ) {
      commit("setCurrentId", id);
      dispatch("loadAllComments", id);
      commit("changeShowPostDetails", true);
    },
    async hidePostDetails({ commit }: { commit: any }) {
      commit("setCurrentId", null);
      commit("changeShowPostDetails", false);
    },
    async searchPosts({ commit }: { commit: any }, term: string) {
      const posts = await loadPosts("filters[description][$contains]=" + term);
      commit("setPostsSearchResult", posts);
    },
  },
  getters: {
    postDetails(state: any) {
      return state.list.find((post: any) => post.id === state.currentId);
    },
  },
};
