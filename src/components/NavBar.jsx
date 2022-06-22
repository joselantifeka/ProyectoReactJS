import logo from "../logo.png";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="flex justify-between px-6 py-4 bg-black text-white items-center">
      <picture className="3/5">
        <img src={logo} alt="GaviShop" width="100px" />
      </picture>
      <ul className="flex basis-2/5 justify-between px-8 items-center">
        <CartWidget className="" />
        <li className="">
          <a href="" className="">
            Tienda
          </a>
        </li>
        <li className="">
          <a href="" className="">
            Contact
          </a>
        </li>
        <li className="group relative ">
          <a href="" className="">
            Mas
          </a>
          <ul className="absolute bg-black group-hover:block py-4 transition ease-in-out opacity-0 group-hover:opacity-100 delay-150 rounded-md ">
            <li className="py-2">
              <a href="" className="">
                Buzos
              </a>
            </li>
            <li className="py-2">
              <a href="" className="">
                Sudaderas
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
