import { FaPen } from "react-icons/fa"
import { DataTable } from "./DataTable"
import { VistaTabla } from "@/components/shared/VistaTabla"

export const Categorias = () => {

  return (
    <VistaTabla 
      Titulo='Categorias' 
      href='/categoria/crear' 
      Nombre='Crear Categoria'
      Icon={<FaPen/>}
    children={
    <DataTable />}
    />
  )
}
