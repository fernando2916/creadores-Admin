import { VistaTabla } from "@/components/shared/VistaTabla"
import { useVacanteStore } from "@/hooks/useVacanteStore"
import { useEffect } from "react"
import { FaPen } from "react-icons/fa"
import { TablaVacantes} from "./components/Table"

export const Vacantes = () => {
  const { getVacante } = useVacanteStore()
  
  useEffect(() => {
    getVacante()
  }, [])
  


  return (
    <>
        <VistaTabla
          Nombre='Crear Vacante'
          Titulo='Vacantes'
          Icon={<FaPen/>}
          href='/vacante/crear'
          children={
            <>
            <div className="p-3">
              <TablaVacantes/>

              {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="bg-nav-700 p-5">
                  <div className="">
                    <h2 className="text-lg font-semibold">Puesto</h2>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-semibold">Modalidad</h2>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-semibold">Horario</h2>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-semibold">Salario</h2>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-semibold">Postulacion</h2>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-semibold">Descripción del puesto</h2>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-semibold">Requisitos</h2>
                  </div>
                </div>
               
              </div> */}
            </div>
            </>
          }
        />
    </>
  )
}
