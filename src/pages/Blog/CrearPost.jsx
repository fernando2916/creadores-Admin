import { Indicador } from "@/components/shared/Indicador";

import { useCategoriaStore } from "@/hooks/useCategoriaStore";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { SelectCategorias } from "./components/categorias";
import { SelectUser } from "./components/user";
import { useUserStore } from "@/hooks/useUserStore";
import { useQuill } from "react-quilljs";

import 'quill/dist/quill.snow.css'
import toolbar from "./components/toolbar";

export const CrearPost = () => {
  const dispatch = useDispatch();


  const { getByCategoriaType, categoria } = useCategoriaStore();
  const { users, getUsers } = useUserStore();
  const {quill, quillRef} = useQuill({
    modules: {
      toolbar,
    }
  })

  const [file, setFile] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles[0]);
  }, []);

  useEffect(() => {
    dispatch(getByCategoriaType());
    getUsers();
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      accept: {
        "image/png": [],
        "image/jpg": [],
      },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target[0].value);

    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    formData.append("upload_preset", "prueba");
    formData.append("api_key", "993224785149782");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dswqswjxe/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    console.log(data);
  };

  return (
    <div className="p-5">
      <Indicador
        Nombre="Blog"
        href="/blog"
        ide="/blog/crear"
        Pantalla="Crear Post"
      />

      <div className="flex mt-8">
        <h2 className="text-3xl font-bold">Nueva Publicación</h2>
      </div>

      <div className="">
        <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
          {/* <div className="grid md:grid-cols-2 gap-2"> */}
            <div className="flex flex-col gap-2">
              <label>Titulo</label>
              <input
                type="text"
                placeholder="Titulo de la publicación"
                className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label>Imagen principal</label>
              <div
                {...getRootProps()}
                className=" border-2 border-dashed border-link-100 p-5"
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p className="text-sm">Suelta los archivos aquí...</p>
                ) : (
                  <p className="text-sm">
                    Arrastre y suelte algunos archivos aquí o haga clic para
                    seleccionar archivos
                  </p>
                )}
              </div>
              {acceptedFiles[0] && (
                <img
                  src={URL.createObjectURL(acceptedFiles[0])}
                  alt=""
                  className="w-1/3"
                />
              )}
            </div>
          {/* </div> */}
          {/* <div className="grid md:grid-cols-2 gap-2"> */}
            <div className="flex flex-col gap-2">
              <label>Descripción corta</label>
              <input
                placeholder="Descripción corta"
                className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Contenido</label>
              <div className='border-none'>
                <div ref={quillRef} className=""/>               
              </div>
            </div>
          {/* </div> */}
          {/* <div className="grid md:grid-cols-2 gap-2 "> */}
            <div className="flex flex-col gap-2 mt-24">
              <label>Slug</label>
              <input
                placeholder="Slug"
                disabled
                className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              />
            </div>

            <div className="flex flex-col gap-2 md:mt-24">
              <label>Categorias</label>
              <SelectCategorias categoria={categoria} />
            </div>
          {/* </div> */}
          {/* <div className="grid md:grid-cols-2 gap-2"> */}
            <div className="flex flex-col gap-2">
              <label>Tipo de articulo</label>
              <input
                placeholder="Tipo de articulo"
                className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Tiempo de lectura</label>
              <input
                placeholder="Tiempo de lectura"
                className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              />
            </div>
          {/* </div> */}
          {/* <div className="grid md:grid-cols-2 gap-2"> */}
            <div className="flex flex-col gap-2">
              <label>Autor</label>
              <SelectUser users={users} />
            </div>
            <div className="flex flex-col gap-2">
              <label>Estado</label>
              <input
                placeholder="Nombre de la categoria"
                className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
              />
            </div>
          {/* </div> */}
          <button className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150">
            Crear Publicación
          </button>
        </form>
      </div>
    </div>
  );
};
