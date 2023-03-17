import { createContext } from "react";

const AuthContext = createContext({
  user: null,
  authenticated: false,
  setUser: (user) => {},
  setAuthenticated: (auth) => {}
});

export default AuthContext;