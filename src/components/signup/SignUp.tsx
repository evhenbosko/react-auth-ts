import Loader from "../loader/Loader";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import React from "react";
const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const email = useSelector(({ reducer }: any) => reducer.email);
  const password = useSelector(({ reducer }: any) => reducer.password);
  const loader = useSelector(({ reducer }: any) => reducer.loader);
  const redirect = useSelector(({ reducer }: any) => reducer.redirect);

  const submit = async (e: any) => {
    e.preventDefault();

    dispatch({ type: "CHANGE_LOADER", payload: true });
    await axios
      .post("http://142.93.134.108:1111/sign_up", { email, password })
      .then((response) => {
        dispatch({ type: "CHANGE_LOADER", payload: false });
        if (response.data.status === "Ok") {
          dispatch({ type: "CHANGE_REDIRECT", payload: true });
        } else alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (redirect) {
    dispatch({ type: "CHANGE_EMAIL", payload: "" });
    dispatch({ type: "CHANGE_PASSWORD", payload: "" });
     return <Redirect to="login" />;
  }
  return (
    <form onSubmit={submit}>
      {loader && (
        <p>
          <Loader />
        </p>
      )}
      <div className="form-floating">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e) =>
            dispatch({ type: "CHANGE_EMAIL", payload: e.target.value })
          }
        />
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) =>
            dispatch({ type: "CHANGE_PASSWORD", payload: e.target.value })
          }
        />
      </div>
      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Sign Up
      </button>
    </form>
  );
};
export default SignUp;
