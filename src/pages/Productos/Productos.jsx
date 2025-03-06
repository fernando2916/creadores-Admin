import { VistaTabla } from "@/components/shared/VIstaTabla"
import { FaPen } from "react-icons/fa"
import { ProductosTable } from "./components/ProductosTable"

export const Productos = () => {
  return (
    <VistaTabla
    Titulo='Productos'
    Nombre='Crear Producto'
    href='/producto/crear'
    Icon={<FaPen/>}
    
    children={
        <ProductosTable/>
    }
    />
  )
}
