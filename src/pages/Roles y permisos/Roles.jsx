import { VistaTabla } from "@/components/shared/VistaTabla"
import { FaPen } from "react-icons/fa"

export const Roles = () => {
  return (
    <VistaTabla 
    Nombre={'Crear Rol'}
    href={'/roles/crear'}
    Titulo={'Roles'}
    Icon={<FaPen/>}
    children={
        <div>
            <h1>Roles</h1>
        </div>
    } 
    />
  )
}
