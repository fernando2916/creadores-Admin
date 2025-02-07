import { Indicador } from "@/components/shared/Indicador";
import { useCategoriaStore } from "@/hooks/useCategoriaStore";
import { clearMessage } from "@/store/categorias";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { Oval } from "react-loader-spinner";

export const EditCategoria = () => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  const dispatch = useDispatch();
  const { loading, message, status, categoria } = useSelector(
    (state) => state.categorias
  );

  const { getByCategoriaID, editCategoria } = useCategoriaStore();

  useEffect(() => {
    return () => {
      dispatch(clearMessage());
    };
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(getByCategoriaID(id));
    }
  }, [id, dispatch]);

  const categoriaFormFields = {
    nombre: categoria?.nombre || "",
    tipo: categoria?.tipo || "",
  };

  const createEditSchema = Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
    tipo: Yup.string().required("El tipo de categoria es obligatorio"),
  });

  const EditCategoriaSubmit = (values) => {
    dispatch(
      editCategoria({
        id,
        nombre: values.nombre,
        tipo: values.tipo,
      })
    );
  };

  useEffect(() => {
    if (status === "Categoria Actualizada") {
      Swal.fire({
        icon: "success",
        title: message,
        background: "#120024",
        color: "#ffffff",
      });
    }
  }, [status]);

  useEffect(() => {
    if (status === "Categoria Actualizada") {
      navigate('/categorias')
    }
  }, [status]);

  return (
    <div className="p-5">
      <Indicador
        Nombre="Categoria"
        href="/categorias"
        ide={`/editar-categoria/${categoria.id}`}
        Pantalla="Editar categoria"
      />

      <div className="flex mt-8">
        <h2 className="text-3xl font-bold">Actualizar Categoria</h2>
      </div>

      <div className="">
        <Formik
          initialValues={categoriaFormFields}
          onSubmit={EditCategoriaSubmit}
          validationSchema={createEditSchema}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form className="space-y-4 mt-8" noValidate onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                  Nombre
                </label>
                <input
                  disabled={loading}
                  type="text"
                  name="nombre"
                  defaultValue={categoria.nombre}
                  // value={values.nombre}
                  onChange={handleChange}
                  error={errors.nombre}
                  placeholder="Nombre de la categoria"
                  className={
                    errors.nombre
                      ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                      : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                  }
                />
                <p className="text-sm text-red-400 font-semibold">
                  {errors.nombre}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                  Tipo
                </label>
                <input
                  disabled={loading}
                  type="text"
                  name="tipo"
                  // value={values.tipo}
                  defaultValue={categoria.tipo}
                  onChange={handleChange}
                  error={errors.tipo}
                  placeholder="Post, Producto, Curso, Recurso"                    
                  className={
                    errors.tipo
                      ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 w-full"
                      : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                  }
                />
                <p className="text-sm text-red-400 font-semibold">
                  {errors.tipo}
                </p>
              </div>

              <div>
                {loading ? (
                  <button
                    disabled={status}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-600 gap-2 items-center"
                  >
                    <Oval
                    visible={true}
                    height="30"
                    strokeWidth={4}
                    width="30"
                    color="#fff"
                    secondaryColor="#6e004c"
                    ariaLabel="oval-loading"
                  />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150 font-bold"
                  >
                    Actualizar Categoria
                  </button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
