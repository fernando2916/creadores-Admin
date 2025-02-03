import {FaHome, FaUsers, FaUserCog, FaShieldAlt, FaPrint, FaVideo, FaTags, FaBox, FaBook, FaTshirt, FaChartBar, FaPen, FaCamera, FaLaptopCode, FaBoxOpen, FaBuilding} from 'react-icons/fa'

export const navigation = [
    { name: 'Inicio', href: '/', icon: FaHome, current: true },
    { name: 'Usuarios', href: '#', icon: FaUsers, current: false },
    { name: 'Roles', href: '#', icon: FaUserCog, current: false },
    { name: 'Permisos', href: '#', icon: FaShieldAlt, current: false },
    { name: 'Categorias blog', href: '/categorias', icon: FaBox, current: false },
    { name: 'Categorias Productos', href: '#', icon: FaBox, current: false },
    { name: 'Categorias Cursos', href: '#', icon: FaBox, current: false },
    { name: 'Blog', href: '/blog', icon: FaBook, current: false },
    { name: 'Productos', href: '/productos', icon: FaTshirt, current: false },
    { name: 'Cupones', href: '#', icon: FaTags, current: false },
    { name: 'Cursos', href: '#', icon: FaVideo, current: false },
    { name: 'Oferta laboral', href: '#', icon: FaBuilding, current: false },
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