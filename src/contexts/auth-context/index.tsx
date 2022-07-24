import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface AuthContextProps {
  authMethod: "local" | "aws" | null;
  login(state: AuthContextProps["authMethod"]): void;
  logout(): void;
}

const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: { children: ReactNode }) {
  const [authMethod, setAuthMethod] =
    useState<AuthContextProps["authMethod"]>(null);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  function login(authMethod: AuthContextProps["authMethod"]) {
    authMethod && setAuthMethod(authMethod);
    navigate("/dashboard", { replace: true });
  }

  function logout() {
    if (authMethod === "local") {
      setAuthMethod(null);
      localStorage.removeItem("authMethod");
      navigate("/login");
    }
  }

  useEffect(() => {
    // handle if user try to access dashboard without a login
    !authMethod &&
      !localStorage.getItem("authMethod") &&
      pathname.startsWith("/dashboard") &&
      navigate("/login");

    // handle if user try to access login page with a login
    (authMethod || localStorage.getItem("authMethod")) &&
      pathname.startsWith("/login") &&
      navigate("/dashboard");

    // update local storage if authMethod is available and changes
    authMethod && localStorage.setItem("authMethod", authMethod);
  }, [authMethod]);

  useEffect(() => {
    localStorage.getItem("authMethod") &&
      setAuthMethod(
        localStorage.getItem("authMethod") as AuthContextProps["authMethod"]
      );
  }, []);

  return (
    <AuthContext.Provider value={{ authMethod, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
