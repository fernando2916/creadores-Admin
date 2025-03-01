// import { Navbar } from "../components/navegacion/Navbar"
import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navegacion/Navbar"
import ScrollToTop from 'react-scroll-to-top'
import { FaAngleUp } from "react-icons/fa"
import { Navb } from "@/components/navegacion/Navb"

export const Dashboard = () => {
  return (
    <>
     <Navb>
      <ScrollToTop 
        smooth
        component={<FaAngleUp/>}
          className="!rounded-full !bg-btn-400 !text-xl !font-semibold !p-3 !right-7 !bottom-7 !shadow-none !z-50 !shadow-transparent !flex items-center" 
          />
        <Outlet />
    </Navb>   
    </>
  )
}
