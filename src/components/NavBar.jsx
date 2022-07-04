import logo from "../logo.png";
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className="flex justify-between px-6 py-4 bg-black text-white items-center">
      <picture className="3/5">
        <Link to="/catalogo">
          <img src={logo} alt="GaviShop" width="100px" />
        </Link>
      </picture>
      <ul className="flex basis-2/5 justify-between px-8 items-center">
        <CartWidget className="" />
        <li className="">
          <Link to="/catalogo/Sudaderas" className="hover:text-[grey]">
            Sudaderas
          </Link>
        </li>
        <li className="">
          <Link to="/catalogo/Buzos" className="hover:text-[grey]">
            Buzos
          </Link>
        </li>
        <li className="">
          <Link to="/catalogo/Zapatos" className="hover:text-[grey]">
            Zapatos
          </Link>
        </li>
        <li className="">
          <Link to="/contacto" className="hover:text-[grey]">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
