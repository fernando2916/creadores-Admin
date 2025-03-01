import {FaHome, FaUsers, FaUserCog, FaShieldAlt, FaPrint, FaVideo, FaTags, FaBox, FaBook, FaTshirt, FaChartBar, FaPen, FaCamera, FaLaptopCode, FaBoxOpen, FaBuilding} from 'react-icons/fa'

export const navigation = [
    { name: 'Inicio', href: '/', icon: FaHome, current: true },
    { name: 'Usuarios', href: '/usuarios', icon: FaUsers, current: false },
    { name: 'Roles', href: '#', icon: FaUserCog, current: false },
    { name: 'Permisos', href: '#', icon: FaShieldAlt, current: false },
    { name: 'Categorias ', href: '/categorias', icon: FaBox, current: false },
    { name: 'Blog', href: '/blog', icon: FaBook, current: false },
    { name: 'Productos', href: '/productos', icon: FaTshirt, current: false },
    { name: 'Cupones', href: '/cupones', icon: FaTags, current: false },
    { name: 'Cursos', href: '/cursos', icon: FaVideo, current: false },
    { name: 'Oferta laboral', href: '/vacantes', icon: FaBuilding, current: false },
    { name: 'Fotografía', href: '#', icon: FaCamera, current: false },
    { name: 'Diseño Gráfico', href: '#', icon: FaPen, current: false },
    { name: 'Diseño Web', href: '#', icon: FaLaptopCode, current: false },
    { name: 'Paquetes', href: '#', icon: FaBoxOpen, current: false },
    { name: 'Impresion', href: '#', icon: FaPrint, current: false },
    { name: 'Reportes', href: '#', icon: FaChartBar, current: false },
  ]
export const userNavigation = [
    { name: 'Mi perfil', href: '#' },
    { name: 'Mis datos', href: '#' },
    { name: 'Salir', href: '/' },
  ]

  export const data = {
    users: [
      { name: 'Usuarios', href: '/usuarios', icon: FaUsers, current: false },
      { name: 'Roles', href: '/roles', icon: FaUserCog, current: false },
      { name: 'Permisos', href: '/permisos', icon: FaShieldAlt, current: false },  
    ],

    catalog: [
      { name: 'Categorias ', href: '/categorias', icon: FaBox, current: false },
      { name: 'Cupones', href: '/cupones', icon: FaTags, current: false },
      { name: 'Oferta laboral', href: '/vacantes', icon: FaBuilding, current: false },
    ],
    
    venta: [
      { name: 'Blog', href: '/blog', icon: FaBook, current: false },
      { name: 'Productos', href: '/productos', icon: FaTshirt, current: false },
      { name: 'Cursos', href: '/cursos', icon: FaVideo, current: false },
    ],

    services: [
      { name: 'Fotografía', href: '/fotografia', icon: FaCamera, current: false },
      { name: 'Diseño Gráfico', href: '/diseño-grafico', icon: FaPen, current: false },
      { name: 'Diseño Web', href: '/diseño-web', icon: FaLaptopCode, current: false },
      { name: 'Paquetes', href: '/paquetes', icon: FaBoxOpen, current: false },
      { name: 'Impresion', href: '/impresion', icon: FaPrint, current: false },
    ],

  }