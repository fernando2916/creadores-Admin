import { FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export const Indicador = ({ide, Pantalla, href, Nombre}) => {
    const { pathname } = useLocation();
    const path = ide
    return (
        <div className="flex gap-1 items-center">
        <Link to={href}>{Nombre}</Link>
        {pathname === path ? (
          <>
            <FaAngleRight />

            <span className="text-link-100">{Pantalla}</span>
          </>
        ) : (
          ""
        )}
      </div>
  )
}
