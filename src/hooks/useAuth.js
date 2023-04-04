import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
const useAdminAuth = () => {
  const dispatch = useDispatch();
  const localAuth = localStorage?.getItem("auth");
  useEffect(() => {
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user) {
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
  }, [dispatch, localAuth]);
  const user = JSON.parse(localAuth).user;
  if (user) {
    return true;
  } else {
    return false;
  }
};

const useStudentAuth = () => {
  const dispatch = useDispatch();
  const localAuth = localStorage?.getItem("auth");

  useEffect(() => {
    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.user) {
        console.log("user", auth);
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
  }, [dispatch, localAuth]);
  const user = JSON.parse(localAuth).user;
  if (user) {
    return true;
  } else {
    return false;
  }
};

export { useAdminAuth, useStudentAuth };
