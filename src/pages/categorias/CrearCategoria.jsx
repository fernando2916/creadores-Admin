import { FaCheck } from "react-icons/fa"
import { Link } from "react-router-dom"

export const CrearCategoria = () => {
  return (
    <div className="p-5">
    <div className="flex justify-between">

      <h2 className="text-3xl font-bold">Crear Categoria</h2>

    </div>

    <div className="">
      <form className="space-y-3">
        <div className="flex flex-col">
          <label>Nombre</label>
          <input/>
        </div>
        <div className="flex flex-col">
          <label>Nombre</label>
          <input/>
        </div>
        <div className="flex flex-col">
          <label>Nombre</label>
          <input/>
        </div>
        <Link to='/categorias'>
        <button className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150">
          Crear Categoria
        </button>
        </Link>
      </form>
    </div>

  </div>
  )
}
