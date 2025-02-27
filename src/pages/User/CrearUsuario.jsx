import { Indicador } from "@/components/shared/Indicador";

export const CrearUsuario = () => {
  return (
    <div className="p-5">
      <Indicador
        Nombre="Usuarios"
        href="/usuarios"
        ide="/usuario/crear"
        Pantalla="Crear usuario"
      />

      <div className="flex mt-8">
        <h2 className="text-3xl font-bold">Nuevo Usuario</h2>
      </div>
    </div>
  );
};
