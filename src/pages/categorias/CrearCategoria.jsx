import { Indicador } from "@/components/shared/Indicador";

export const CrearCategoria = () => {


  return (
    <div className="p-5">

      <Indicador 
      Nombre='Categoria' 
      href='/categorias' 
      ide='/categoria/crear'
      Pantalla='Crear categoria' />
      
      <div className="flex mt-8">
        <h2 className="text-3xl font-bold">Nueva Categoria</h2>
      </div>

      <div className="">
        <form className="space-y-4 mt-8">
          <div className="flex flex-col gap-2">
            <label>Nombre</label>
            <input placeholder="Nombre de la categoria" className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200" />
          </div>
          <div className="flex flex-col gap-2">
            <label>Tipo</label>
            <input placeholder="Tipo" className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"/>
          </div>

          <button className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150">
            Crear Categoria
          </button>
        </form>
      </div>
    </div>
  );
};
