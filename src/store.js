import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './store/auth'
import { categoriaSlice } from './store/categorias'

export const store = configureStore({
    reducer: {
        categorias: categoriaSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    })
})
