import { getJwtToken } from "./auth";

export async function uploadFile(file: any) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch("/api/upload", {
    method: "POST",
    body: formData,
    headers: {
      authorization: `Bearer ${getJwtToken()}`,
    },
  });

  const result = await response.json();
  return result[0].url;
}
