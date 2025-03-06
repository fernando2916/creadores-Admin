import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/emprende horizontal blanco.png";
import { FaUser, FaLockOpen, FaLock } from "react-icons/fa";
import { useState, useEffect } from "react";

import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { Oval } from "react-loader-spinner";
import { useUserStore } from "@/hooks/useUserStore";

const loginFormFields = {
  email: "",
  password: "",
};

export const Ingresar = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { startLogin, errorMessage, message, status, loading } = useUserStore();
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const loginSubmit = (values) => {
    
      startLogin({
        email: values.email,
        password: values.password,
      })
    
  };

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("El correo no es válido")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  useEffect(() => {
    if (status === "Authenticated") {
      Swal.fire({
        icon: "success",
        title: message,
        background: "#120024",
        color: "#ffffff",
      });
    }
  }, [status]);

  useEffect(() => {
    if (status === "Authenticated") {
      Navigate("/");
    }
  }, [status]);

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mt-5">
        <img className="mx-auto h-12 w-auto " src={Logo} alt="compañia" />
      </div>
      <div className="m-8 sm:mx-auto sm:w-full sm:max-w-md p-2">
        <div className={` bg-nav-900 py-8 px-4 rounded-xl sm:px-10`}>
          <h2 className="text-center p-3 mb-5 text-3xl font-bold">
            Administrador
          </h2>

          <Formik
            initialValues={loginFormFields}
            onSubmit={loginSubmit}
            validationSchema={loginSchema}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <form
                className="pt-3 space-y-5"
                noValidate
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col space-y-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Correo Electrónico
                  </label>
                  <input
                    disabled={loading}
                    type="email"
                    placeholder="Ingresa tu Correo Electrónico"
                    className={
                      errors.email || errorMessage
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 placeholder:text-black dark:placeholder:text-gray-400"
                        : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                    }
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                  <p className="text-sm text-red-400 font-semibold">
                    {errorMessage}
                    {errors.email}
                  </p>
                </div>
                <div className=" flex flex-col space-y-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Contraseña
                  </label>
                  <div className="relative">
                    <input
                      disabled={loading}
                      type={showPassword ? "text" : "password"}
                      placeholder="Ingresa una contraseña"
                      className={
                        errors.password
                          ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 w-full placeholder:text-black dark:placeholder:text-gray-400"
                          : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full placeholder:text-black dark:placeholder:text-gray-400"
                      }
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      error={errors.password}
                    />
                    <button
                      disabled={loading}
                      type="button"
                      className="absolute right-3 top-3 text-xl outline-none"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaLockOpen /> : <FaLock />}
                    </button>
                  </div>
                  <p className="text-sm text-red-400 font-semibold">
                    {errors.password}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-5">
                  <div className=" flex items-center gap-1">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-btn-200"
                    />
                    <p id="recordar">Recordarme</p>
                  </div>
                  
                </div>
                <div>
                  {loading ? (
                    <button
                      type="submit"
                      disabled={status}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white disabled:bg-btn-400  gap-2 items-center"
                    >
                      <Oval
                        visible={true}
                        height="30"
                        strokeWidth={4}
                        width="30"
                        color="#fff"
                        secondaryColor="#6e004c"
                        ariaLabel="oval-loading"
                      />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-400 hover:bg-btn-600 disabled:bg-btn-600  transition-all ease-in gap-2 items-center"
                    >
                      <FaUser />
                      Entrar a mi cuenta
                    </button>
                  )}
                </div>  
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
