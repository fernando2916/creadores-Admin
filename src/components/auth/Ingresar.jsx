import { Link } from "react-router-dom";
import Logo from "../../assets/emprende horizontal blanco.png";
import { FaUser, FaLockOpen, FaLock } from "react-icons/fa";
import { useState } from "react";



export const Ingresar = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mt-5">
      <img className="mx-auto h-12 w-auto " src={Logo} alt="compañia" />
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md p-2">
        <div className={` bg-nav-900 py-8 px-4 rounded-xl sm:px-10`}>
        <h2 className="text-center p-3 mb-5 text-3xl font-bold">
            Administrador
          </h2>
        <form className="pt-3 space-y-5">
        <div className=" flex flex-col space-y-2">
              <label className="font-medium text-lg">Correo Electrónico</label>
              <input
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              />
            </div>
            <div className=" flex flex-col space-y-2">
              <label className="font-medium text-lg">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa una contraseña"
                  className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                />
                <button
                  className="absolute right-3 top-3 text-xl outline-none"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center mt-5">
              <div className=" flex items-center gap-1">
                <input type="checkbox" className="w-4 h-4" />
                <p>Recordarme</p>
              </div>
              <Link
                to="/restablecer-contraseña"
                className="text-sm text-link-100"
              >
                ¿Olvidaste tu Contraseña?
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-center"
              >
                <FaUser />
                Entrar a mi cuenta
              </button>
            </div>
        </form>
        </div>
      </div>
    </div>
  )
}
