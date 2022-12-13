import { changeUser } from "../../apis/user";
import { getUser, register, login, logout } from "../../apis/auth";

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
    async loginUser(
      { commit }: { commit: any },
      { email, password }: { email: string; password: string }
    ) {
      const user = await login(email, password);
      commit("setUser", user);
    },
    async updateUser({ commit }: { commit: any }, user: any) {
      const updatedUser = await changeUser(user);
      commit("setUser", updatedUser);
    },
    async logoutUser({ commit }: { commit: any }) {
      logout();
      commit("setUser", {});
    },
  },
};
