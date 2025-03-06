import { useCategoriaStore } from "@/hooks/useCategoriaStore";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import dayjs from "dayjs";
import { Badge } from "@/components/ui/badge";

export const columns = [
  {
    header: "Id",
    accessorKey: "id",
  },
  {
    header: "Nombre",
    accessorKey: "nombre",
  },
  {
    header: "Tipo",
    accessorKey: "tipo",
    cell: ({ row }) => {
      const categoria = row.original;
      const variant =
        {
          Post: "post",
          Producto: "product",
          Curso: "curso",
          Recurso: "recurso",
        }[categoria.tipo] ?? "default";

      return (
        <Badge variant={variant} capitalize>
          {categoria.tipo}
        </Badge>
      );
    },
  },
  {
    header: "Creado",
    cell: ({ row }) => {
      const categoria = row.original;
      const Actualizacion = dayjs(categoria.updated_at).format("DD-MMM-YY");
      return <>{Actualizacion}</>;
    },
  },
  {
    header: "Acciones",
    accessorKey: "acciones",
    cell: ({ row }) => {
      const { deleteCategoria, getCategoria } = useCategoriaStore();
      const categoria = row.original;

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
          <Link to={`/editar-categoria/${categoria.id}`}>
            <FaPenSquare className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
          </Link>
          <button onClick={() => handleDeleteCategoria(categoria.id)}>
            <FaTrash className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
          </button>
        </div>
      );
    },
  },
];
