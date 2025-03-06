import { useUserStore } from "@/hooks/useUserStore";
import { Link } from "react-router-dom";

import { FaPenSquare, FaTrash } from "react-icons/fa";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import dayjs from "dayjs";
import localizedFormat from 'dayjs/plugin/localizedFormat'
import { Badge } from "@/components/ui/badge";


export const columns = [
    {
        header: "Id",
        accessorKey: "id",
    },
    {
        header: "Nombre",
        accessorKey: "name",
    },
    {
        header: "Apellido",
        accessorKey: "last_name",
    },
    {
        header: "Rol",
        accessorKey: "rol",
    },
    {
        header: "Correo",
        accessorKey: "email",
    },
    {
        header: "N° de Identificación",
        accessorKey: "verification_id",
    },
    {
        header: "Codigo de Verificación",
        accessorKey: "verification_code",
    },
    {
        header: "Exp de Código",
        accessorKey: "verification_code_expires_at",
        cell: ({ row }) => {
            const user = row.original;
            dayjs.extend(localizedFormat)
            const Actualizacion = dayjs(user.verification_code_expires_at).format("L LT");
            return <>{Actualizacion}</>;
          },
    },
    {
        header: "Verificado",
        accessorKey: "is_verified",
        cell: ({ row }) => {
          const user = row.original;
          const variant =
            {
              pendiente: "pendiente",
              verificado: "verificado",

            }[user.is_verified] ?? "default";
    
          return (
            <Badge variant={variant} capitalize>
              {user.is_verified}
            </Badge>
          );
        },
    },
    {
        header: "Fecha verificado",
        accessorKey: "email_verified_at",
        cell: ({ row }) => {
              const user = row.original;
            dayjs.extend(localizedFormat)
              const Actualizacion = dayjs(user.email_verified_at).format("L LT");
              return <>{Actualizacion}</>;
            },
    },
    {
        header: "Creación",
        accessorKey: "updated_at",
        cell: ({ row }) => {
              const user = row.original;
              dayjs.extend(localizedFormat)

              const Actualizacion = dayjs(user.updated_at).format("L LT");
              return <>{Actualizacion}</>;
            },
    },
    {
        header: "Acciones",
        accessorKey: "acciones",
        cell: ({ row }) => {
              const { getUsers } = useUserStore();
              const user = row.original;
        
              const handleDeleteCategoria = async (id) => {
                const result = await Swal.fire({
                  title: "¿Estás seguro?",
                  text: "¡No podrás revertir esto!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Sí, eliminar",
                  cancelButtonText: "Cancelar",
                  background: "#120024",
                  color: "#ffffff",
                });
        
                if (result.isConfirmed) {
                  try {
                    await deleteCategoria(id);
                    Swal.fire({
                      title: "Categoria Eliminada",
                      background: "#120024",
                      color: "#ffffff",
                      icon: "success",
                    });
        
                    await getCategoria();
                  } catch (error) {
                    console.log(error);
                    Swal.fire(
                      "Error",
                      "Hubo un probelma al eliminar la categoría",
                      "error"
                    );
                  }
                }
              };
              return (
                <div className="flex justify-center items-center gap-3">
                  <Link to={`/editar-usuario/${user.id}`}>
                    <FaPenSquare className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
                  </Link>
                  <button onClick={() => handleDeleteCategoria(user.id)}>
                    <FaTrash className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
                  </button>
                </div>
              );
            },
    },
]

