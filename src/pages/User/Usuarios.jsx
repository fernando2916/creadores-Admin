import { VistaTabla } from "@/components/shared/VistaTabla"
import { User } from "lucide-react"
import { FaPen } from "react-icons/fa"
import { UserTable } from "./components/UserTable"

export const Usuarios = () => {
  return (
    <VistaTabla 
         Titulo='Usuarios' 
         href='/usuario/crear' 
         Nombre='Crear Usuario'
         Icon={<FaPen/>}
       children={
       <UserTable/>
      }
       />
  )
}
