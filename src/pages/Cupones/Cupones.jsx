import { VistaTabla } from "@/components/shared/VistaTabla"
import { FaPen } from "react-icons/fa"
import { CuponesTable } from "./components/CuponesTable"

export const Cupones = () => {
  return (
    <VistaTabla 
      Icon={<FaPen/>}
      Titulo='Cupones'
      href='/cupon/crear'
      Nombre='Crear Cupon'
      children={
        <CuponesTable />
      }
    />
  )
}
