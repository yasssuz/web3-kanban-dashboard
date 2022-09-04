import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/oauth";

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <>
      <button onClick={() => login("local")}>login as local</button>
    </>
  );
}

export default Login;
