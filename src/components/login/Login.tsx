import { Redirect } from "react-router-dom";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const redirect = useSelector(({ reducer }: any) => reducer.redirect);
  const loader = useSelector(({ reducer }: any) => reducer.loader);
  const email = useSelector(({ reducer }: any) => reducer.email);
  const password = useSelector(({ reducer }: any) => reducer.password);

  const submit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "CHANGE_REDIRECT", payload: false });
    dispatch({ type: "CHANGE_LOADER", payload: true });

    await axios
      .post(
        `http://142.93.134.108:1111/login?email=${email}&password=${password}`,
        { email, password }
      )
      .then((response) => {
        dispatch({ type: "CHANGE_LOADER", payload: false });
        console.log(response.data.statusCode);
        if (response.data.statusCode === 200) {
          dispatch({ type: "CHANGE_REDIRECT", payload: true });
          dispatch({
            type: "CHANGE_ACCESS_TOKEN",
            payload: response.data.body.access_token,
          });
          dispatch({
            type: "CHANGE_REFRESH_TOKEN",
            payload: response.data.body.refresh_token,
          });
        } else {
          alert("wrong email or password");
          dispatch({
            type: "CHANGE_ACCESS_TOKEN",
            payload: "",
          });
          dispatch({
            type: "CHANGE_REFRESH_TOKEN",
            payload: "",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  if (redirect) {
    return <Redirect to="/" />;
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
        Login
      </button>
    </form>
  );
};
export default Login;
