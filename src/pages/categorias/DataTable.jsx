import {useReactTable, getCoreRowModel, flexRender} from '@tanstack/react-table'

import {  Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table'
import { columns } from './columns'
import { FaTrash, FaPenSquare  } from 'react-icons/fa'
import { Link } from 'react-router-dom'



export const DataTable = () => {
  return (
    <div>
        <Table className='bg-nav-800 rounded-md'>
            <TableCaption>Tabla de Categorias</TableCaption>
            <TableHeader>
            <TableRow>
                <TableHead>Id</TableHead>
                <TableHead>Nombre</TableHead>
                <TableHead>Fecha de creación</TableHead>
                <TableHead>Acciones</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody>
                {columns.map((categoria) => (
                    <TableRow key={categoria.accessorKey}>
                        <TableCell>{categoria.id}</TableCell>
                        <TableCell>{categoria.nombre}</TableCell>
                        <TableCell>{categoria.creacion}</TableCell>
                        <TableCell>
                            <div className="flex items-center gap-5">
                                <Link to='/categoria/editar'>
                                <FaPenSquare className='text-lg bg-btn-600 p-1 md:p-3 items-center rounded-md box-content'/>
                                </Link>
                                <FaTrash className='text-lg bg-btn-600 p-1 md:p-3 items-center rounded-md box-content'/>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  )
}
