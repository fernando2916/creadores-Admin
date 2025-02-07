import { VistaTabla } from "@/components/shared/VistaTabla"
import { FaPen } from "react-icons/fa"

export const Vacantes = () => {
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
              <h2>Vacantes</h2>
            </div>
            </>
          }
        />
    </>
  )
}
