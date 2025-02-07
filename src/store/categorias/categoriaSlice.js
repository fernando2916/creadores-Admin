import { createSlice } from '@reduxjs/toolkit';

export const categoriaSlice = createSlice({
  name: 'categoria',
  initialState: {
    status: 'checking',
    categorias: {},
    categoria: {},
    loading: false,
    isData: false,
    message: null,
    ErrorMessage: null,
  },
  reducers: {
    onCheckingCategoria: (state) => {
        state.categorias = {};
        state.loading = true;
    },
    onCategorias: (state, {payload}) => {
        state.categorias = payload.data;
        state.loading = false;
        state.isData = true;

    },
    onCategoriasId: (state, {payload}) => {
        state.categoria = payload.data;
        state.loading = false;
        state.isData = true;

    },
    onCreateCategoria: (state, {payload}) => {
      state.message = payload.message;
      state.status = 'Categoria Creada'
      state.loading = false
    },
    onEditCategoria: (state, {payload}) => {
      state.message = payload.message;
      state.status = 'Categoria Actualizada'
      state.loading = false
    },
    onDeleteCategoria: (state, {payload}) => {
      state.message = payload.message;
      state.status = 'Categoria Eliminada'
      state.loading = false
    },
    clearMessage: (state) => {
      state.message = null;
      state.status = 'checking';
      state.categoria = {}
    }

  },
});

// Action creators are generated for each case reducer function
export const { onCheckingCategoria, onCategorias, onCreateCategoria, clearMessage, onEditCategoria, onCategoriasId, onDeleteCategoria } = categoriaSlice.actions;