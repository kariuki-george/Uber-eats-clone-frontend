import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
import toast from "react-hot-toast";
import { login } from "../services/auth";
import { clearState } from "../state/slices/authReducer";
import { useDispatch, useSelector } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const { isError, errorMessage, isSuccess } = useSelector(
    (state) => state.user
  );

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email && password) {
      return dispatch(login({ email, password }));
    }
    return alert("Ensure all fields are filled");
  };

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
    if (isSuccess) {
      history.replace("/home");
      dispatch(clearState());
    }
  }, [isError, isSuccess]);

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder=" email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder=" password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>login</button>
      </form>
      <h4>Don't have an account? {<Link to="/register">Register</Link>}</h4>
    </div>
  );
}

export default Login;
