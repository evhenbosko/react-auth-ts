import axios from "axios";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
const Me = () => {
  const dispatch = useDispatch();
  dispatch({ type: "CHANGE_REDIRECT", payload: false });
  const message = useSelector(({ reducer }: any) => reducer.message);
  const loader = useSelector(({ reducer }: any) => reducer.loader);
  const accesstoken = useSelector(({ reducer }: any) => reducer.accessToken);

  let show;
  const res = async () => {
    if (message === "auth needed") {
      show = { display: "none" };
    } else {
      show = { display: "flex" };
    }
    dispatch({ type: "CHANGE_LOADER", payload: true });
    axios.interceptors.response.use((res: any) => {
      if (res.statusCode === 401 || res.statusCode === 1004) {
        axios({
          method: "post",
          url: "http://142.93.134.108:1111/refresh",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
          },
        })
          .then((res) => {
            dispatch({ type: "CHANGE_LOADER", payload: false });

            dispatch({
              type: "CHANGE_ACCESS_TOKEN",
              payload: res.data.body.access_token,
            });
            dispatch({
              type: "CHANGE_REFRESH_TOKEN",
              payload: res.data.body.refresh_token,
            });
            axios.get("http://142.93.134.108:1111/me", {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("accessToken"),
              },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        dispatch({ type: "CHANGE_LOADER", payload: false });
        dispatch({ type: "CHANGE_MESSAGE", payload: res.data.body.message });
      }
      return res;
    });
    await axios.get("http://142.93.134.108:1111/me", {
      headers: {
        Authorization: "Bearer " + accesstoken,
      },
    });
  };

  return (
    <div>
      <h1 style={show} onClick={res}>
        Click to refresh status
      </h1>
      {loader && (
        <p>
          <Loader />
        </p>
      )}

      <h2>Token status:{message}</h2>
    </div>
  );
};
export default Me;
