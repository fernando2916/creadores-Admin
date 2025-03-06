import creadoresAPI from "@/api/CreadoresAPI"
import { useDispatch, useSelector } from "react-redux"

import { onCategorias, onCheckingCategoria, onCreateCategoria, clearMessage, onEditCategoria, onCategoriasId, onDeleteCategoria } from "@/store/categorias"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const useCategoriaStore = () => {
    const {categorias, loading, isData, message, status, categoria,} = useSelector( state => state.categorias)
    const dispatch = useDispatch()

    const getCategoria = async() => {
        dispatch(onCheckingCategoria())
        
        try {
            const {data} = await creadoresAPI.get('/categoria')
            dispatch(onCategorias(data))

        } catch (error) {
            console.log(error)
        }
    }

    const getByCategoriaID = createAsyncThunk( 
        'categorias/onCategoriasId',
        async(id) => {
            dispatch(onCheckingCategoria())
            try {
                const {data} = await creadoresAPI.get(`/categoria/${id}`)
                dispatch(onCategoriasId(data))
            } catch (error) {
                console.log(error)
            }
        }
    );

   const postCategoria = async({nombre, tipo}) => {
    dispatch(onCheckingCategoria())
    try {
        const {data} = await creadoresAPI.post('/categoria', {nombre, tipo});
        dispatch(onCreateCategoria(data))
        setTimeout(() => {
            dispatch(clearMessage());
          }, 1000);
    } catch (error) {
        console.log(error)
    }

   }

   const editCategoria = async({id, nombre, tipo}) => {
    dispatch(onCheckingCategoria())

    try {
        const {data} = await creadoresAPI.put(`/categoria/${id}`, {nombre, tipo})
        // console.log(data)
        dispatch(onEditCategoria(data))
        // setTimeout(() => {
        //     dispatch(clearMessage());
        //   }, 1000);

    } catch (error) {
        console.log(error)
    }
   }
   const deleteCategoria = async(id) => {
    dispatch(onCheckingCategoria())

    try {
        const {data} = await creadoresAPI.delete(`/categoria/${id}`)
        dispatch(onDeleteCategoria(data))
    } catch (error) {
        console.log(error)
    }

   }

   const getByCategoriaType = createAsyncThunk( 
    'categorias/onCategoriasID',
    async(tipo) => {
        dispatch(onCheckingCategoria())
        try {
            const {data} = await creadoresAPI.get(`/categoria/tipo/${'Post'}`)
            // console.log(data)
            dispatch(onCategoriasId(data))
        } catch (error) {
            console.log(error)
        }
    }
);



    return {
        //* Propiedades
        categorias,
        loading,
        isData,
        message,
        status,
        categoria,

        //* Métodos
        getCategoria,
        postCategoria,
        editCategoria,
        getByCategoriaID,
        getByCategoriaType,
        deleteCategoria,
    }
}