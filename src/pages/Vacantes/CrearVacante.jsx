import { useEffect } from "react";

import { Indicador } from "@/components/shared/Indicador";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { Oval } from "react-loader-spinner";
import * as Yup from "yup";
import { Formik } from "formik";
import { useVacanteStore } from "@/hooks/useVacanteStore";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const vacanteFormFields = {
  puesto: "",
  modalidad: "",
  horario: "",
  salario: "",
  postulacion: "",
  descripcion: "",
  requisitos: "",
};

export const CrearVacante = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { postVacante, message, status, loading } = useVacanteStore();

  const createSubmit = (values) => {
    dispatch(
      postVacante({
        puesto: values.puesto,
        modalidad: values.modalidad,
        horario: values.horario,
        salario: values.salario,
        postulacion: values.postulacion,
        descripcion: values.descripcion,
        requisitos: values.requisitos,
      })
    );
  };

  const createSchema = Yup.object({
    puesto: Yup.string().required("El puesto es requerido"),
    modalidad: Yup.string().required("La modalidad es requerida"),
    horario: Yup.string().required("El horario es requerido"),
    salario: Yup.string().required("El salario es requerido"),
    postulacion: Yup.string().required("La postulacion es requerida"),
    descripcion: Yup.string().required(
      "La descripción del puesto es requerida"
    ),
    requisitos: Yup.string().required("Los requisitos son requeridos"),
  });

  useEffect(() => {
    if (status === "Vacante Creada") {
      Swal.fire({
        icon: "success",
        title: message,
        background: "#120024",
        color: "#ffffff",
      });
    }
  }, [status]);

  useEffect(() => {
    if (status === "Vacante Creada") {
      navigate("/vacantes");
    }
  }, [status]);

  return (
    <div className="p-5">
      <Indicador
        Nombre="Vacantes"
        Pantalla="Crear Vacante"
        ide="/vacante/crear"
        href="/vacantes"
      />

      <div className="flex mt-8">
        <h2 className="text-3xl font-bold">Nueva Vacante de trabajo</h2>
      </div>

      <div>
        <Formik
          initialValues={vacanteFormFields}
          onSubmit={createSubmit}
          validationSchema={createSchema}
        >
          {({ values, errors, handleChange, handleSubmit }) => (
            <form className="space-y-4 mt-8" onSubmit={handleSubmit} noValidate>
              <div className="grid md:grid-cols-2 mt-8 gap-2">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Puesto
                  </label>
                  <input
                    type="text"
                    disabled={loading}
                    name="puesto"
                    value={values.puesto}
                    onChange={handleChange}
                    error={errors.puesto}
                    placeholder="Nombre del puesto"
                    className={
                      errors.puesto
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                        : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                    }
                  />
                  <p className="text-sm text-red-400 font-semibold">
                    {errors.puesto}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Modalidad
                  </label>
                  <input
                    type="text"
                    disabled={loading}
                    name="modalidad"
                    value={values.modalidad}
                    onChange={handleChange}
                    error={errors.modalidad}
                    placeholder="Nombre de la modalidad"
                    className={
                      errors.modalidad
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                        : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                    }
                  />
                  <p className="text-sm text-red-400 font-semibold">
                    {errors.modalidad}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Horario
                  </label>
                  <input
                    type="text"
                    disabled={loading}
                    name="horario"
                    value={values.horario}
                    onChange={handleChange}
                    error={errors.horario}
                    placeholder="Horario de trabajo"
                    className={
                      errors.horario
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                        : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                    }
                  />
                  <p className="text-sm text-red-400 font-semibold">
                    {errors.horario}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Salario
                  </label>
                  <input
                    type="text"
                    disabled={loading}
                    name="salario"
                    value={values.salario}
                    onChange={handleChange}
                    error={errors.salario}
                    placeholder="Salario"
                    className={
                      errors.salario
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                        : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                    }
                  />
                  <p className="text-sm text-red-400 font-semibold">
                    {errors.salario}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Postulacion
                  </label>
                  <input
                    type="date"
                    disabled={loading}
                    name="postulacion"
                    value={values.postulacion}
                    onChange={handleChange}
                    error={errors.postulacion}
                    placeholder="Último día de postulación "
                    className={
                      errors.postulacion
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                        : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                    }
                  />

                  <p className="text-sm text-red-400 font-semibold">
                    {errors.postulacion}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Descripción del puesto
                  </label>
                  <input
                    type="text"
                    disabled={loading}
                    name="descripcion"
                    value={values.descripcion}
                    onChange={handleChange}
                    error={errors.descripcion}
                    placeholder="Descripción del puesto"
                    className={
                      errors.descripcion
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                        : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                    }
                  />
                  <p className="text-sm text-red-400 font-semibold">
                    {errors.descripcion}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                    Requisitos
                  </label>
                  <input
                    type="text"
                    disabled={loading}
                    name="requisitos"
                    value={values.requisitos}
                    onChange={handleChange}
                    error={errors.requisitos}
                    placeholder="Requisitos"
                    className={
                      errors.requisitos
                        ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                        : "bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                    }
                  />
                  <p className="text-sm text-red-400 font-semibold">
                    {errors.requisitos}
                  </p>
                </div>
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
                    className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150 font-semibold"
                  >
                    Crear Vacante
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
