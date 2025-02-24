import creadoresAPI from "@/api/CreadoresAPI";
import { useDispatch, useSelector } from "react-redux";

import {
  onCheckVacante,
  onVacantes,
  onVacanteId,
  onCreateVacante,
  onEditVacante,
  onDeleteVacante,
  clearMessageVacante,
} from "@/store/vacantes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const useVacanteStore = () => {
  const { vacantes, vacante, isData, message, status, loading } = useSelector(
    (state) => state.vacantes
  );
  const dispatch = useDispatch();

  const getVacante = async () => {
    dispatch(onCheckVacante());

    try {
      const { data } = await creadoresAPI.get("/vacante");
      dispatch(onVacantes(data));
    } catch (error) {
      console.log(error);
    }
  };

  const getByVacanteId = createAsyncThunk("vacante/onVacanteId", async (id) => {
    dispatch(onCheckVacante());

    try {
      const { data } = await creadoresAPI.get(`/vacante/${id}`);
      dispatch(onVacanteId(data));
    } catch (error) {
      console.log(error);
    }
  });

  const postVacante = async ({
    puesto,
    modalidad,
    horario,
    salario,
    postulacion,
    descripcion,
    requisitos,
  }) => {
    dispatch(onCheckVacante());

    try {
      const { data } = await creadoresAPI.post("/vacante", {
        puesto,
        modalidad,
        horario,
        salario,
        postulacion,
        descripcion,
        requisitos,
      });

      dispatch(onCreateVacante(data));

      setTimeout(() => {
        dispatch(clearMessageVacante());
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const editVacante = async ({
    id,
    puesto,
    modalidad,
    horario,
    salario,
    postulacion,
    descripcion,
    requisitos,
  }) => {
    dispatch(onCheckVacante());

    try {
      const { data } = await creadoresAPI.put(`/vacante/${id}`, {
        puesto,
        modalidad,
        horario,
        salario,
        postulacion,
        descripcion,
        requisitos,
      });
      dispatch(onEditVacante(data))
      setTimeout(() => {
          dispatch(clearMessageVacante());
        }, 1000)
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVacante = async(id) => {
    dispatch(onCheckVacante())

    try {
      const {data} = await creadoresAPI.delete(`/vacante/${id}`)
      dispatch(onDeleteVacante(data))
    } catch (error) {
      console.log(error)
    }
  }

  return {
    //* Propiedades
    vacantes,
    vacante,
    isData,
    message,
    status,
    loading,

    //*Métodos
    getVacante,
    getByVacanteId,
    postVacante,
    editVacante,
    deleteVacante
  };
};
