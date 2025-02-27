import { FaEye, FaShoppingBag, FaShoppingCart, FaUsers } from "react-icons/fa"
import { CardData } from "@/components/shared/CardData"

export const DashboardHome = () => {
  return (
    <div className="p-4">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    <CardData title='Total de Vistas' rate='0.44%' total='3,435' levelUp>
          <div className="bg-btn-600 p-2 rounded-full justify-center flex items-center">
          <FaEye className="text-sm lg:text-2xl box-content"/>
          </div>
      </CardData>
      <CardData title='Total de Compras' rate='0.43%' total='$3, 435.00 MXN' levelUp>
          <div className="bg-btn-600 p-2 rounded-full justify-center flex items-center">
          <FaShoppingCart className=" text-sm lg:text-2xl box-content"/>
          </div>
      </CardData>
      <CardData title='Total de Productos' rate='0.43%' total='350' levelUp>
          <div className="bg-btn-600 p-2 rounded-full justify-center flex items-center">
          <FaShoppingBag className="text-sm lg:text-2xl box-content"/>
          </div>
      </CardData>
        <CardData title='Total de Usuarios' rate='0.43%' total='500' levelUp>
          <div className="bg-btn-600 p-2 rounded-full justify-center flex items-center">
          <FaUsers className="text-sm lg:text-2xl box-content"/>
          </div>
      </CardData>
    </div>
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Ventas</h2>
      <div className="bg-nav-800 p-4 rounded-lg shadow">
        {/* Aquí iría el gráfico de actividad */}
        <div className="h-48 bg-nav-800 flex items-center justify-center">
          Gráfico de Actividad
        </div>
      </div>
    </div>
  </div>
  )
}
