import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaTrash, FaPenSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCategoriaStore } from "@/hooks/useCategoriaStore";
import { useEffect } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
// import { useDispatch } from "react-redux";

export const DataTable = () => {
  const { categorias, isData, getCategoria, loading, deleteCategoria } =
    useCategoriaStore();

  useEffect(() => {
    getCategoria();
  }, []);

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
        console.log(error)
        Swal.fire('Error', 'Hubo un probelma al eliminar la categoría', 'error')
      }
      
    }
  };

  return (
    <div>
      <Table className="bg-nav-800 rounded-md">
        <TableCaption>Tabla de Categorias</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Fecha de creación</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell>
                <div className="p-3 animate-pulse bg-nav-700 w-full rounded-md"></div>
              </TableCell>
              <TableCell>
                <div className="p-3 animate-pulse bg-nav-700 w-full rounded-md"></div>
              </TableCell>
              <TableCell>
                <div className="p-3 animate-pulse bg-nav-700 w-full rounded-md"></div>
              </TableCell>
              <TableCell>
                <div className="p-3 animate-pulse bg-nav-700 w-full rounded-md"></div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-5">
                  <div className="p-3 animate-pulse bg-nav-600 rounded-md"></div>
                  <div className="p-3 animate-pulse bg-nav-600 rounded-md"></div>
                </div>
              </TableCell>
            </TableRow>
          ) : (
            Array.isArray(categorias) &&
            categorias.map((categoria) => (
              <TableRow key={categoria.id}>
                <TableCell>{categoria.id}</TableCell>
                <TableCell>{categoria.nombre}</TableCell>
                <TableCell>{categoria.tipo}</TableCell>
                <TableCell>{categoria.created_at}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-5">
                    <Link to={`/editar-categoria/${categoria.id}`}>
                      <FaPenSquare className="text-lg bg-btn-400 hover:bg-btn-600 p-1 md:p-3 items-center rounded-md box-content" />
                    </Link>
                    <button onClick={() => handleDeleteCategoria(categoria.id)}>
                      <FaTrash className="text-lg bg-btn-400 hover:bg-btn-600 p-1 md:p-3 items-center rounded-md box-content" />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
