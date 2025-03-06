import { VistaTabla } from "@/components/shared/VIstaTabla"
import { FaPen } from "react-icons/fa"
import { TableBlog } from "./components/TableBlog"

export const PostBlog = () => {
  return (
    
    <VistaTabla
     Titulo='Blog'
        Nombre='Crear Post'
        href='/blog/crear'
              Icon={<FaPen/>}
        
        children={
            <TableBlog/>
        }
    />
  )
}
