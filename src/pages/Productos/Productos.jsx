import { VistaTabla } from "@/components/shared/VIstaTabla"
import { FaPen } from "react-icons/fa"

export const Productos = () => {
  return (
    <VistaTabla
    Titulo='Productos'
    Nombre='Crear Producto'
    href='/producto/crear'
    Icon={<FaPen/>}
    
    children={
        <>
        <h2>Productos</h2>
        </>
    }
    />
  )
}
