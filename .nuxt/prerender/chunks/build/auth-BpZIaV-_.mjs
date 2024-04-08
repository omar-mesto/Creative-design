import { u as useCookie } from './cookie-C__dP6IS.mjs';
import { b as defineStore } from './server.mjs';

const useAuthStorage = ({ authTokenKey, authUserKey } = {
  authTokenKey: "auth.token",
  authUserKey: "auth.user"
}) => {
  const user = useCookie(authUserKey);
  const token = useCookie(authTokenKey);
  const store = (newToken, newUser) => {
    token.value = newToken;
    user.value = newUser;
  };
  const clear = () => {
    user.value = null;
    token.value = "";
  };
  return { store, clear, user, token };
};
const useAuthStore = defineStore({
  id: "auth",
  state: () => {
    const { token, user } = useAuthStorage();
    return {
      loggedIn: !!token.value,
      user: user.value,
      loading: false
    };
  },
  actions: {
    logout() {
      const { clear } = useAuthStorage();
      clear();
      this.loggedIn = false;
      this.user = null;
    }
  }
});

export { useAuthStore as u };
//# sourceMappingURL=auth-BpZIaV-_.mjs.map
