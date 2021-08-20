import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../services/auth";
import { clearState } from "../state/slices/authReducer";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const { isFetching, isError, isSuccess, errorMessage } = useSelector(
    (state) => state.user
  );

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(clearState());
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      return alert("password is not the same as confirm password");
    }
    if (name && email && password) {
      return dispatch(register({ name, email, password }));
    }
    return alert("Ensure all fields are filled");
  };
  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);
  useEffect(() => {
    if (isSuccess) {
      toast.success(errorMessage);
      dispatch(clearState());
      history.replace("/login");
    }
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }
  }, [isSuccess, isError]);

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder=" username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleRegister}>register</button>
      </form>
      <h4>Have an account? {<Link to="/login">Login</Link>}</h4>
    </div>
  );
}

export default Register;
