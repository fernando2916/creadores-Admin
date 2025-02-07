import { Indicador } from "@/components/shared/Indicador";

export const CrearVacante = () => {
  return (
    <div className="p-5">
      <Indicador
        Nombre="Vacantes"
        Pantalla="Crear Vacante"
        ide="/vacante/crear"
        href="/vacantes"
      />

      <div className="flex mt-8">
        <h2 className="text-3xl font-bold">Nueva Vacante de trabajo</h2>
      </div>

      <div className="">
        <form className="space-y-4 mt-8">
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              Puesto
            </label>
            <input
              type="text"
              name="puesto"
              placeholder="Nombre del Puesto"
              className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
            {/* <p className="text-sm text-red-400 font-semibold">
              {errors.nombre}
            </p> */}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              Modalidad
            </label>
            <input
              type="text"
              name="puesto"
              placeholder="Modalidad"
              className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
            {/* <p className="text-sm text-red-400 font-semibold">
              {errors.nombre}
            </p> */}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              Horario
            </label>
            <input
              type="text"
              name="puesto"
              placeholder="Horario"
              className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
            {/* <p className="text-sm text-red-400 font-semibold">
              {errors.nombre}
            </p> */}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              Salario
            </label>
            <input
              type="text"
              name="puesto"
              placeholder="Salario"
              className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
            {/* <p className="text-sm text-red-400 font-semibold">
              {errors.nombre}
            </p> */}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              Postulacion
            </label>
            <input
              type="text"
              name="puesto"
              placeholder="Postulacion"
              className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
            {/* <p className="text-sm text-red-400 font-semibold">
              {errors.nombre}
            </p> */}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              Descripción del puesto 
            </label>
            <input
              type="text"
              name="puesto"
              placeholder="Descripción"
              className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
            {/* <p className="text-sm text-red-400 font-semibold">
              {errors.nombre}
            </p> */}
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
              Requisitos
            </label>
            <input
              type="text"
              name="puesto"
              placeholder="Requisitos"
              className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
            {/* <p className="text-sm text-red-400 font-semibold">
              {errors.nombre}
            </p> */}
          </div>
          <button
                    type="submit"
                    // disabled={loading}
                    className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150 font-semibold"
                  >
                    Crear Vacante
                  </button>
        </form>
      </div>
    </div>
  );
};
