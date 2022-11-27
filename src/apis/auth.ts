export function getJwtToken() {
  return localStorage.getItem("jwtToken");
}

export function setJwtToken(jwt: string) {
  return localStorage.setItem("jwtToken", jwt);
}
