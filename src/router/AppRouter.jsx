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

export const AppRouter = () => {
  // const status = 'not-Authenticated';
  const status = "Authenticated";
  return (
    <Routes>
      {status === "Authenticated" ? (
        <Route element={<Dashboard />}>
          <Route index path="/" element={<DashboardHome />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="categoria/crear" element={<CrearCategoria />} />
          <Route path="categoria/editar" element={<EditCategoria />} />
          <Route path="/blog" element={<PostBlog />} />
          <Route path="blog/crear" element={<CrearPost />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="producto/crear" element={<CrearProducto />} />
        </Route>
      ) : (
        <Route index path="/*" element={<Ingresar />} />
      )}
    </Routes>
  );
};
