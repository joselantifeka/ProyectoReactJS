
function NavBar(){
    return(
        <nav className="flex justify-between p-6 bg-black text-white">
            <picture className="basis-3/4">
                <img src="" alt="imagen de mi tienda" />
            </picture>
            <ul className="flex basis-1/4 justify-between px-8">
                <li className="">
                    <a href="" className="">Tienda</a>
                </li>
                <li className="">
                    <a href="" className="">Contacto</a>
                </li>
                <li className="group relative ">
                    <a href="" className="">Mas</a>
                    <ul className="absolute bg-black group-hover:block py-4 transition ease-in-out opacity-0 group-hover:opacity-100 delay-150 rounded-md">
                        <li className="py-2">
                            <a href="" className="">Buzos</a>
                        </li>
                        <li className="py-2">
                            <a href="" className="">Sudaderas</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;