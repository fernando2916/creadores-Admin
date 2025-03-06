
import { HStack, Icon } from "@chakra-ui/react";

import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card"

import { FaPercent, FaDollarSign } from "react-icons/fa";

import { Indicador } from "@/components/shared/Indicador";

const items = [
  { value: "porcentaje", title: "Porcentaje", icon: <FaPercent /> },
  { value: "monto", title: "Monto Fijo", icon: <FaDollarSign /> },
]

export const CrearCupon = () => {
  return (
    <>
      <Indicador
        Nombre="Cupones"
        href="/cupones"
        ide="/cupon/crear"
        Pantalla="Crear Cupón"
      />

      <div className="flex mt-8">
        <h2 className="text-3xl font-bold">Cupones</h2>
      </div>

      <div>
        <form className="space-y-4 mt-8">
          <div className="grid md:grid-cols-2 gap-2">
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-base">Titulo del cúpon</label>
              <input type="text" placeholder="Ejemplo: PROMOMRZ-2024 " className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-base">Descuento</label>
              <input type="number" placeholder="200" className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"/>
            </div>
          </div>
          <div className="">
            <RadioCardRoot orientation='horizontal' align={'center'} justify='center' defaultValue='porcentaje'>
              <RadioCardLabel className='font-semibold text-base'>Tipo de descuento</RadioCardLabel>
              <HStack spacing={4} align='center' >
              {items.map((item) => (

                <RadioCardItem 
                className=' border-2 mx-2 mt-2 border-link-100 rounded-md' 
                label={item.title} 
                value={item.value} 
                indicator={false}
                colorPalette=''
                icon={
                  <Icon>
                  {item.icon}
                  </Icon>
                }
                key={item.value}
                />
              ))}
              </HStack>
            </RadioCardRoot>
          </div>
          <button className="w-full bg-btn-400 hover:bg-btn-600 p-2 rounded-md transition-colors duration-150">
            Crear cupon
          </button>

        </form>
      </div>
    </>
  );
};
