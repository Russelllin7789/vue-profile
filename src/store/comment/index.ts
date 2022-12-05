import { createComment } from "../../apis/comment";

export const comment = {
  state() {
    return {
      list: [],
    };
  },
  mutations: {},
  actions: {
    async addComment(
      { commit }: { commit: any },
      { content, postId }: { content: string; postId: string }
    ) {
      await createComment(content, postId);
      commit("increaseCommentCount", postId);
    },
  },
};
