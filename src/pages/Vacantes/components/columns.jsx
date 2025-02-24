import { useVacanteStore } from "@/hooks/useVacanteStore";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

import dayjs from "dayjs";


export const columns = [
  {
    header: "ID",
    accessorKey: "id",
    enableHiding: false,
  },
  {
    header: "Puesto",
    accessorKey: "puesto",
  },
  {
    header: "Modalidad",
    accessorKey: "modalidad",
  },
  {
    header: "Horario",
    accessorKey: "horario",
  },
  {
    header: "Salario",
    accessorKey: "salario",
  },
  {
    header: "Postulación",
    cell: ({ row }) => {
      const vacante = row.original;
      const fecha = dayjs(vacante.postulacion).format("DD-MMM-YY");

      return <>{fecha}</>;
    },
  },
  {
    header: "Descripción",
    accessorKey: "descripcion",
  },
  {
    header: "Requisitos",
    accessorKey: "requisitos",
  },
  {
    header: "Identificador",
    accessorKey: "identificador",
  },
  {
    header: "Acciones",
    accessorKey: "acciones",
    cell: ({ row }) => {
      const { deleteVacante, getVacante } = useVacanteStore();
            const vacante = row.original;
      
            const handleDeleteVacante = async (id) => {
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
                  await deleteVacante(id);
                  Swal.fire({
                    title: "Vacante Eliminada",
                    background: "#120024",
                    color: "#ffffff",
                    icon: "success",
                  });
      
                  await getVacante();
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
        <div className="flex items-center justify-center gap-3">
          <Link to={`/editar-vacante/${vacante.id}`}>
            <FaPenSquare className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
          </Link>
          <button onClick={() => handleDeleteVacante(vacante.id)}>
            <FaTrash className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
          </button>
        </div>
      );
    },
  },
];
