import { useEffect } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useCategoriaStore } from "@/hooks/useCategoriaStore";
import { columns } from "./columns";

export const DataTable = () => {
  const { categorias, getCategoria, loading } =
    useCategoriaStore();

  useEffect(() => {
    getCategoria();
  }, []);

  const table = useReactTable({
    data: categorias,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="bg-nav-800 p-5 rounded-m w-full">
        <thead className="bg-nav-700 rounded-t-md text-start ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className="p-3 font-semibold" key={header.id}>
                  {header.column.columnDef.header}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel()?.rows?.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className="p-3 mx-5 text-sm text-center" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td>cargando datos...</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
