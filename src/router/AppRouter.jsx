import { Categorias } from "@/pages/categorias/Categorias";
import { Ingresar } from "@/components/auth/Ingresar";
import { Dashboard } from "@/layouts/Dashboard";
import { DashboardHome } from "@/pages/Home/DashboardHome";
import { Route, Routes } from "react-router-dom";
import { EditCategoria } from "@/pages/categorias/EditCategoria";
import { CrearCategoria } from "@/pages/categorias/CrearCategoria";
import { PostBlog } from "@/pages/Blog/PostBlog";
import { CrearPost } from "@/pages/Blog/CrearPost";
import { Productos } from "@/pages/Productos/Productos";
import { CrearProducto } from "@/pages/Productos/CrearProducto";
import { EditarProducto } from "@/pages/Productos/EditarProducto";
import { EditarPost } from "@/pages/Blog/EditarPost";
import { Cupones } from "@/pages/Cupones/Cupones";
import { CrearCupon } from "@/pages/Cupones/CrearCupon";
import { EditarCupon } from "@/pages/Cupones/EditarCupon";
import { Cursos } from "@/pages/Cursos/Cursos";
import { CrearCurso } from "@/pages/Cursos/CrearCurso";
import { EditarCurso } from "@/pages/Cursos/EditarCurso";
import { Vacantes } from "@/pages/Vacantes/Vacantes";
import { CrearVacante } from "@/pages/Vacantes/CrearVacante";
import { EditarVacante } from "@/pages/Vacantes/EditarVacante";
import { Usuarios } from "@/pages/User/Usuarios";

export const AppRouter = () => {
  // const status = 'not-Authenticated';

  const status = "Authenticated";
  return (
    <Routes>
      {status === "Authenticated" ? (
        <Route element={<Dashboard />}>
          <Route index path="/" element={<DashboardHome />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="categorias" element={<Categorias />} />
          <Route path="categoria/crear" element={<CrearCategoria />} />
          <Route path="editar-categoria/:id" element={<EditCategoria />} />
          <Route path="/blog" element={<PostBlog />} />
          <Route path="blog/crear" element={<CrearPost />} />
          <Route path="editar-post/:id" element={<EditarPost />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="producto/crear" element={<CrearProducto />} />
          <Route path="editar-producto/:id" element={<EditarProducto />} />
          <Route path="cupones" element={<Cupones />} />
          <Route path="cupon/crear" element={<CrearCupon />} />
          <Route path="editar-cupon/:id" element={<EditarCupon />} />
          <Route path="cursos" element={<Cursos />} />
          <Route path="curso/crear" element={<CrearCurso />} />
          <Route path="editar-curso/:id" element={<EditarCurso />} />
          <Route path="vacantes" element={<Vacantes />} />
          <Route path="vacante/crear" element={<CrearVacante />} />
          <Route path="editar-vacante/:id" element={<EditarVacante />} />
        </Route>
      ) : (
        <Route index path="/*" element={<Ingresar />} />
      )}
    </Routes>
  );
};
