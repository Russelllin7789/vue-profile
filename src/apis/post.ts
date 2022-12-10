import { request } from "../utils/request";
import { getJwtToken } from "./auth";
import { getUser } from "./auth";

export async function createPost(image: File, description: string) {
  const formData = new FormData();
  formData.append("files.image", image);
  formData.append("data", JSON.stringify({ description }));

  await fetch("/api/posts", {
    method: "POST",
    body: formData,
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
    },
  });
}

export async function loadPosts(filters: string = "") {
  const response = await request(
    "/api/posts?populate=*" + (filters && `${filters}`)
  );
  return response.data.map((post: any) => ({
    id: post?.id,
    ...post?.attributes,
    image: post?.attributes?.image?.data?.[0]?.attributes?.url,
    user: {
      id: post?.attributes?.user?.data?.id,
      ...post?.attributes?.user?.data?.attributes,
    },
  }));
}

export async function loadPostByMe() {
  return loadPosts(`filters[user][id][$eq]=${getUser().id}`);
}

export async function loadPostsLikedOrFavoredByMe(type = "likes") {
  const response = await request(
    `/api/users/me?populate[${type}][populate][0]=image`
  );
  return response[type].map((post: any) => ({
    ...post,
    image: post?.image?.[0].url,
  }));
}

export async function likePost(id: string) {
  const response = await request(`/api/posts/${id}/like`, {
    method: "PUT",
  });
  return response.data;
}

export async function favorPost(id: string) {
  const response = await request(`/api/posts/${id}/favor`, {
    method: "PUT",
  });
  return response.data;
}
