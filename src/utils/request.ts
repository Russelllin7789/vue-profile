import { getJwtToken } from "../apis/auth";

interface fetchObj {
  method: string;
  body?: {};
  headers?: {};
  auth: boolean;
}

export async function request(
  url: string,
  { method, body, headers, auth }: fetchObj = {
    method: "GET",
    auth: true,
  }
) {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(auth && { Authorization: `Bearer ${getJwtToken()}` }),
      ...headers,
    },
    ...(body && { body: JSON.stringify(body) }),
  });
  // if(res.status > 400)
  const result = await res.json();
  return result;
}
