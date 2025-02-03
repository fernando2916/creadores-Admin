import { VistaTabla } from "@/components/shared/VIstaTabla"
import { FaPen } from "react-icons/fa"

export const PostBlog = () => {
  return (
    
    <VistaTabla
     Titulo='Publicaiones de blog'
        Nombre='Crear Post'
        href='/blog/crear'
              Icon={<FaPen/>}
        
        children={
            <>
            <div className="">Hola post</div>
            </>
        }
    />
  )
}
