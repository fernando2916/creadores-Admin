
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectCategorias = ({categoria}) => {
  
  return (
    <Select>
    <SelectTrigger className="w-auto">
      <SelectValue placeholder="Selecciona una categoria" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Categorias para Post</SelectLabel>
        {categoria.length > 0 ? (
          categoria.map((cat) => (
            <SelectItem key={cat.id} value={cat.nombre}>
              {cat.nombre}
            </SelectItem>
          ))
        ) : (
          <SelectItem disabled>No hay categorias</SelectItem>
        )}
      </SelectGroup>
    </SelectContent>
  </Select>
  );
};
