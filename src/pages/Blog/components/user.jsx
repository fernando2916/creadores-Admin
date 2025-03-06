
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


export const SelectUser = ({users}) => {

  
  return (
    <Select>
    <SelectTrigger className="w-auto">
      <SelectValue placeholder="Selecciona un autor" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Autores para Post</SelectLabel>
        {users.length > 0 ? (
          users.map((user) => (
            <SelectItem key={user.name} value={user.name}>
              {user.name} {user.last_name}
            </SelectItem>
          ))
        ) : (
          <SelectItem disabled>No hay usuarios</SelectItem>
        )}
      </SelectGroup>
    </SelectContent>
  </Select>
  );
};
