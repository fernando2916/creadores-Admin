import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectCategorias = ({ categoria }) => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const handleCategoriaChange = (value) => {
    const selectedCategoria = categoria.find((cat) => cat.id === value);
    setCategoriaSeleccionada(selectedCategoria);
  }; 
  return (
    <>
      <Select onValueChange={handleCategoriaChange}>
        <SelectTrigger className="w-auto">
          <SelectValue placeholder="Selecciona una categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categorias para Post</SelectLabel>
            {categoria.length > 0 ? (
              categoria.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.nombre}
                </SelectItem>
              ))
            ) : (
              <SelectItem disabled>No hay categorias</SelectItem>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
