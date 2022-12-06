import { request } from "../utils/request";
import { saveUser, getUser } from "./auth";

export async function changeUser(user: any) {
  const response = await request(`/api/users/${getUser().id}`, {
    method: "PUT",
    body: user,
  });
  saveUser(response);
  return response;
}
