import { VistaTabla } from "@/components/shared/VistaTabla"
import { FaPen } from "react-icons/fa"

export const Cupones = () => {
  return (
    <VistaTabla 
      Icon={<FaPen/>}
      Titulo='Cupones'
      href='/cupon/crear'
      Nombre='Crear Cupon'
      children={
        <>
        <div className="p-2">
        <h2>Cupones</h2>
        </div>
        </>
      }
    />
  )
}
