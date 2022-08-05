import logo from "../logo.png";
import CartWidget from "./Cart/CartWidget";
import { Link } from "react-router-dom";
import OrderWidget from "./Order/OrderWidget";
import useCartContext from "../store/CartContext";
import { useState } from "react";
import { useEffect } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function NavBar() {
  const { orderId, width } = useCartContext();
  const [seeSection, setSeeSection] = useState(false) 

  
  const handleMenu = () =>{
    seeSection ? setSeeSection(false) : setSeeSection(true);
  }
  
  if (width > 900) {
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
              <a href="https://www.linkedin.com/in/jose-david-gallego-avila-840b7b230/" target='_blank' className="hover:text-[grey]">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        {orderId && (
          <Link to={`/ordern/${orderId}`}>
            <OrderWidget />
          </Link>
        )}
      </>
    );
  } else {
    return (
      <>
        <nav className="flex justify-between px-6 py-4 bg-black text-white items-center relative">
          <picture className="3/5 flex items-center gap-[30px]">
            <Link to="/catalogo">
              <img src={logo} alt="GaviShop" width="100px" />
            </Link>
          </picture>
          <CartWidget className="" />
          {seeSection && <div className="absolute bg-black rounded-b-lg h-[200px] w-[180px] bottom-[-200px] right-[0px] flex flex-col justify-around items-center z-10">
            <a className="border-t-[1.8px] border-white w-[90px] text-center hover:border-black">
              <Link to="/catalogo/Sudaderas" className="hover:text-[grey]">
                Sudaderas
              </Link>
            </a>
            <a className="border-t-[1.8px] border-white w-[90px] text-center hover:border-black">
              <Link to="/catalogo/Buzos" className="hover:text-[grey]">
                Buzos
              </Link>
            </a>
            <a className="border-t-[1.8px] border-white w-[90px] text-center hover:border-black">
              <Link to="/catalogo/Zapatos" className="hover:text-[grey]">
                Zapatos
              </Link>
            </a>
            <a className="border-t-[1.8px] border-white w-[90px] text-center hover:border-black " href="https://www.linkedin.com/in/jose-david-gallego-avila-840b7b230/" target='_blank'>
                Contacto
            </a>
          </div>}
          {seeSection ? <XIcon className="h-[25px] w-[25px]  hover:text-[red] hover:cursor-pointer"
          onClick={handleMenu} />
          : <MenuIcon className="h-[25px] w-[25px]  hover:text-[red] hover:cursor-pointer"
          onClick={handleMenu} />}
        </nav>
        {orderId && (
          <Link to={`/ordern/${orderId}`}>
            <OrderWidget />
          </Link>
        )}
      </>
    );
  }
}

export default NavBar;
