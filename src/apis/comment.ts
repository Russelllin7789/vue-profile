import { request } from "../utils/request";

export async function createComment(content: string, postId: string) {
  await request("/api/comments", {
    method: "POST",
    body: {
      data: {
        content,
        post: postId,
      },
    },
  });
}
