import { FaPen } from "react-icons/fa"
import { Link } from "react-router-dom"

export const VistaTabla = ({children, Titulo, href, Nombre, Icon}) => {
  return (
    <div className="p-5">
      <div className="flex justify-between m-3">

        <h2 className="text-2xl md:text-3xl font-bold">{Titulo}</h2>
        <Link to={href}>
        <button className="flex justify-center items-center gap-2 bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150">
          {Icon}
          {Nombre}
        </button>
        </Link>
      </div>

        {children}
    </div>
  )
}
