import { VistaTabla } from "@/components/shared/VistaTabla"
import { FaPen } from "react-icons/fa"

export const Usuarios = () => {
  return (
    <VistaTabla 
         Titulo='Usuarios' 
         href='/usuario/crear' 
         Nombre='Crear Usuario'
         Icon={<FaPen/>}
       children={
        <>
        Usuarios
        </>
      }
       />
  )
}
