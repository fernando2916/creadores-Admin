import { useEffect, useState } from "react";

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { useVacanteStore } from "@/hooks/useVacanteStore";
import { useSelector } from "react-redux";
import { columns } from "./columns";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaAngleDown, FaFilter } from "react-icons/fa";
import { TableCell, TableRow, Table, TableHead, TableHeader, TableBody } from "@/components/ui/table";

export const TablaVacantes = () => {
  const { getVacante } = useVacanteStore();

  const { vacantes } = useSelector((state) => state.vacantes) || [];
  const [columnFilters, setColumnFilters] = useState([])
  const [columnVisibility, setColumnVisibility] = useState({})

  useEffect(() => {
    getVacante();
  }, []);

  const table = useReactTable({
    data: vacantes,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      columnVisibility
    }
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-3 py-4">
        <input 
        type="text" 
        placeholder="Filtrar puesto..."
        value={(table.getColumn('puesto')?.getFilterValue()) ?? ''} 
        onChange={(event) =>
          table.getColumn('puesto')?.setFilterValue(event.target.value)
        }
        className="max-w-sm outline-none border-2 border-link-100 rounded-md p-2 bg-transparent"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 justify-end border-2 border-link-100 rounded-md p-2 outline-none">
              <FaFilter className="text-2xl md:text-lg" />
              <span>
                <FaAngleDown/>
              </span> 
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent aling='end'>
            {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => {
              return (
                <DropdownMenuCheckboxItem 
                key={column.id} 
                className='capitalize' 
                checked={column.getIsVisible()}
                onCheckedChange={(value) =>
                  column.toggleVisibility(!!value)
                }
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              )
            })
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md">

      <Table className="bg-nav-800 rounded-md ">
        <TableHeader className="bg-nav-700 rounded-t-md text-start">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead className="p-3 font-semibold" key={header.id}>
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
                  <TableCell className="p-3 mx-5 text-sm text-center" key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="p-5 flex w-full justify-center">Cargando datos...</TableCell>
            </TableRow>
          )}          
        </TableBody>
      </Table>
      </div>

    </div>
  );
};
