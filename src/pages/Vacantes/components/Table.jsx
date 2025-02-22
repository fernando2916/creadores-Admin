import { useEffect, useMemo } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

import { useVacanteStore } from "@/hooks/useVacanteStore";
import { useSelector } from "react-redux";
import { columns } from "./columns";

export const Table = () => {
  const { getVacante } = useVacanteStore();

  const { vacantes } = useSelector((state) => state.vacantes) || [];

  useEffect(() => {
    getVacante();
  }, []);

  const table = useReactTable({
    data: vacantes,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="bg-nav-800 p-5 rounded-md overscroll-x-auto w-full">
        <thead className="bg-nav-700 rounded-t-md w-full">
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
                  <td className="p-3 text-sm" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-5 flex w-full justify-center">Cargando datos...</td>
            </tr>
          )}          
        </tbody>
      </table>
    </div>
  );
};
