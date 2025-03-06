import { useDispatch, useSelector } from "react-redux";
import creadoresAPI from "@/api/CreadoresAPI";

import { onGetUser, onLogout, onLogin, onLoginFail, onCheckingUser, clearErrorMessage } from "@/store/auth";


export const useUserStore = () => {
      const { status, users, user, rol, token, loading, message, errorMessage } =
        useSelector((state) => state.usuarios);
    const dispatch = useDispatch();

    const getUsers = async () => {
        try {
            const { data } = await creadoresAPI.get('/users');
            // console.log(data)
            dispatch(onGetUser(data));
        } catch (error) {
            console.log(error);
        }
    };

    const checkAuthToken = async () => {
      dispatch(onCheckingUser())
      const token = localStorage.getItem('token');
      if (!token) return dispatch(onLogout());

      try {
        const {data} = await creadoresAPI.get('/auth/refresh');
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(onLogin(data)); 

      } catch (error) {
        localStorage.clear();
        dispatch(onLogout());
      }
    }

    const startLogin = async ({ email, password }) => {
      dispatch(onCheckingUser());
  
      try {
        const { data } = await creadoresAPI.post("/auth/login", {
          email,
          password,
        });
        // console.log(data)
        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        dispatch(onLogin(data));
  
      } catch (error) {
        console.log(error)
        dispatch( onLoginFail(error.response?.data || '--') );
        setTimeout(() => {
            dispatch( clearErrorMessage() );
        }, 10);
      }
    };

    const startLogout = async () => {
   
      localStorage.clear();
      dispatch(onLogout());
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 1000);
    };

  return {
    //* Propiedades
    status,
    users,
    user,
    rol,
    token,
    loading,
    message,
    errorMessage,

    //* Métodos
    getUsers,
    startLogin,
    startLogout,
    checkAuthToken,
  };
};
