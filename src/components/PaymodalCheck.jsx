import React from 'react'
import { BadgeCheckIcon } from "@heroicons/react/outline";
import useCartContext from "../store/CartContext";
import { Link } from 'react-router-dom';


function PaymodalCheck({ setModalOn }) {
    const { orderId, clear} = useCartContext()
    const handleOKClick = () =>{
        setModalOn(false)
        clear()
    }
  return (
    <>
        <div className='w-[30rem] flex flex-col items-center'>
            <BadgeCheckIcon className='h-[60px] '/>
            <h2 className='mb-[20px]'>¡Orden generada con Exito!</h2>
            <p className='font-normal'>En las proximas horas recibiras un mail sobre la informacion de tu orden y el estado de tu orden</p>
            <p className='mt-[20px] w-full flex justify-between'>Numero de orden: <span className='font-normal'>{orderId}</span></p>
            <Link to='/catalogo'
            onClick={handleOKClick}
            className=" rounded px-4 py-2 text-white bg-green-800 mt-[40px]"
          >
            Aceptar
          </Link>
        </div>
    </>
  )
}

export default PaymodalCheck