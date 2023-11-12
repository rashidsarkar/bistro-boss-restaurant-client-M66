import { useState } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authInffo = {
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInffo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
