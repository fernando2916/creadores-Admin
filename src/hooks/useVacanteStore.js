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

export const useVacanteStore = () => {

  const { vacantes, vacante, isData, message, status, loading } = useSelector((state) => state.vacantes);
  const dispatch = useDispatch();

  const getVacante = async() => {
    dispatch(onCheckVacante())

    try {
        const {data} = await creadoresAPI.get('/vacante') 
        dispatch( onVacantes(data))
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
  };
};
