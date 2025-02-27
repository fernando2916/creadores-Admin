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
              <TablaVacantes/>              
            </>
          }
        />
    </>
  )
}
