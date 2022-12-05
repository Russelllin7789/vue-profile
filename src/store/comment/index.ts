import { createComment, loadComments } from "../../apis/comment";

export const comment = {
  state() {
    return {
      list: [],
    };
  },
  mutations: {
    initializeComments(state: any, comments: any) {
      state.list = comments;
    },
  },
  actions: {
    async addComment(
      { commit, dispatch }: { commit: any; dispatch: any },
      { content, postId }: { content: string; postId: string }
    ) {
      await createComment(content, postId);
      dispatch("loadAllComments", postId);
      commit("increaseCommentCount", postId);
    },
    async loadAllComments({ commit }: { commit: any }, postId: string) {
      const comments = await loadComments(postId);
      commit("initializeComments", comments);
    },
  },
};
