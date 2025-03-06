
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";

export const columns = [
    {
        header: 'Id',
        accessorKey: 'id',
    },
    {
        header: 'Titulo',
        accessorKey: 'titulo',
    },
    {
        header: 'Imagen',
        accessorKey: 'imagen_url',
    },
    {
        header: 'Descipción',
        accessorKey: 'descripción_corta',
    },
    {
        header: 'Contenido',
        accessorKey: 'contenido',
    },
    {
        header: 'Categoria',
        accessorKey: 'categorias_id',
    },
    {
        header: 'Slug',
        accessorKey: 'slug',
    },
    {
        header: 'Tipo de articulo',
        accessorKey: 'tipo',
    },
    {
        header: 'Tiempo de lectura',
        accessorKey: 'tiempo_de_lectura',
    },
    {
        header: 'Autor',
        accessorKey: 'user_id',
    },
    {
        header: 'Estado',
        accessorKey: 'estado',
    },
    {
        header: 'Creación',
        accessorKey: 'updated_at',
    },
    {
        header: 'Acciones',
        accessorKey: 'acciones',
        cell: ({ row }) => {
              const blog = row.original;
        
            //   const handleDeleteCategoria = async (id) => {
            //     const result = await Swal.fire({
            //       title: "¿Estás seguro?",
            //       text: "¡No podrás revertir esto!",
            //       icon: "warning",
            //       showCancelButton: true,
            //       confirmButtonColor: "#3085d6",
            //       cancelButtonColor: "#d33",
            //       confirmButtonText: "Sí, eliminar",
            //       cancelButtonText: "Cancelar",
            //       background: "#120024",
            //       color: "#ffffff",
            //     });
        
            //     if (result.isConfirmed) {
            //       try {
            //         await deleteCategoria(id);
            //         Swal.fire({
            //           title: "Categoria Eliminada",
            //           background: "#120024",
            //           color: "#ffffff",
            //           icon: "success",
            //         });
        
            //         await getCategoria();
            //       } catch (error) {
            //         console.log(error);
            //         Swal.fire(
            //           "Error",
            //           "Hubo un probelma al eliminar la categoría",
            //           "error"
            //         );
            //       }
            //     }
            //   };
              return (
                <div className="flex justify-center items-center gap-3">
                  <Link to={'#'}>
                    <FaPenSquare className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
                  </Link>
                  <button >
                    <FaTrash className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
                  </button>
                </div>
              );
            },
    },
]
