import logo from "../logo.png";
import CartWidget from "./Cart/CartWidget";
import {Link} from "react-router-dom";
import OrderWidget from "./Order/OrderWidget";
import useCartContext from "../store/CartContext";


function NavBar() {
  const { orderId } = useCartContext();
  return (
    <>
    <nav className="flex justify-between px-6 py-4 bg-black text-white items-center">
      <picture className="3/5 flex items-center gap-[30px]">
        <Link to="/catalogo">
          <img src={logo} alt="GaviShop" width="100px" />
        </Link>
      <CartWidget className="" />
      </picture>
      <ul className="flex basis-2/5 justify-between px-8 items-center">
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
    {orderId && <Link to={`/ordern/${orderId}`}><OrderWidget /></Link>}
    </>
  );
}

export default NavBar;
