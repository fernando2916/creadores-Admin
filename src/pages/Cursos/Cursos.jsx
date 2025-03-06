import { VistaTabla } from "@/components/shared/VistaTabla"
import { FaPen } from "react-icons/fa"
import { CursosTable } from "./components/CursosTable"

export const Cursos = () => {
  return (
   
   <VistaTabla
    Titulo='Cursos'
    href='/curso/crear'
    Nombre='Crear Curso'
    Icon={<FaPen/>}
    children={
      <CursosTable/>
    }
    />
  )
}
