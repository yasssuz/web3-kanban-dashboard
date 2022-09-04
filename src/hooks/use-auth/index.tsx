import { useContext } from "react";
import { AuthContext } from "../../contexts/oauth";

function useAuth() {
  return useContext(AuthContext);
}

export default useAuth;
