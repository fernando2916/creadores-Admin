import { FaPenSquare, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";



export const columns = [
    {
      header: "ID",
      accessorKey: "id",
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
      accessorKey: "postulacion",
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
        const vacantes = row.original
        return (
          <div className="flex items-center gap-3">
                    <Link to={`/editar-vacante/${vacantes.id}`}>
                      <FaPenSquare className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
                    </Link>
                    <button>
                      <FaTrash className="text-sm bg-btn-400 hover:bg-btn-600 p-1 md:p-2 items-center rounded-md box-content" />
                    </button>
                  </div>
        )
      }

    },
  ];