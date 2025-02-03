import { FaPen } from "react-icons/fa"
import { DataTable } from "./DataTable"
import { Link } from "react-router-dom"
import { VistaTabla } from "@/components/shared/VistaTabla"

export const Categorias = () => {
  return (
    <VistaTabla 
      Titulo='Categorias' 
      href='/categoria/crear' 
      Nombre='Crear Categoria'
      Icon={<FaPen/>}
    children={<DataTable/>}
    />
  )
}
