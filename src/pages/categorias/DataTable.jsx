import { useEffect } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useCategoriaStore } from "@/hooks/useCategoriaStore";
import { columns } from "./columns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const DataTable = () => {
  const { categorias, getCategoria, loading } = useCategoriaStore();

  useEffect(() => {
    getCategoria();
  }, []);

  const table = useReactTable({
    data: categorias,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="w-full">
      <Table className="bg-nav-800 p-5 rounded-m w-full">
        <TableHeader className="bg-nav-700 rounded-t-md text-start ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead className="p-3 font-semibold text-center" key={header.id}>
                  {header.column.columnDef.header}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel()?.rows?.length > 0 ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    className="p-3 mx-5 text-sm text-center"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
