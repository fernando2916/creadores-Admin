import { createSlice } from "@reduxjs/toolkit";

export const vacantesSlice = createSlice({
  name: "vacantes",
  initialState: {
    status: "checking",
    vacantes: {},
    vacante: {},
    loading: false,
    isData: false,
    message: null,
    ErrorMessage: null,
  },
  reducers: {
    onCheckVacante: (state) => {
      state.vacantes = {};
      state.loading = true;
    },

    onVacantes: (state, { payload }) => {
      state.vacantes = payload.data;
      state.loading = false;
      state.isData = true;
    },

    onVacanteId: (state, { payload }) => {
      state.vacante = payload.data;
      state.loading = false;
      state.isData = true;
    },

    onCreateVacante: (state, { payload }) => {
      state.message = payload.message;
      state.status = "Vacante Creada";
      state.loading = false;
    },

    onEditVacante: (state, { payload }) => {
      state.message = payload.message;
      state.status = "Vacante Actualizada";
      state.loading = false;
    },

    onDeleteVacante: (state, { payload }) => {
      state.message = payload.message;
      state.status = "Vacante ELiminada";
      state.loading = false;
    },

    clearMessageVacante: (state) => {
      state.message = null;
      state.status = "checking";
      state.vacante = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onCheckVacante,
  onVacantes,
  onVacanteId,
  onCreateVacante,
  onEditVacante,
  onDeleteVacante,
  clearMessageVacante
} = vacantesSlice.actions;
