import { getUser, register } from "../../apis/auth";

export const user = {
  state() {
    return {
      user: getUser() || {},
    };
  },
  mutations: {
    setUser(state: any, user: any) {
      state.user = user;
    },
  },
  actions: {
    async registerUser(
      { commit }: { commit: any },
      {
        email,
        username,
        password,
      }: { email: string; username: string; password: string }
    ) {
      const user = await register(email, username, password);
      commit("setUser", user);
    },
  },
};
