import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './store/auth'
import { categoriaSlice } from './store/categorias'
import { vacantesSlice } from './store/vacantes'

export const store = configureStore({
    reducer: {
        categorias: categoriaSlice.reducer,
        vacantes: vacantesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})
