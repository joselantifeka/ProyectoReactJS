import React from 'react'
import { ExclamationCircleIcon } from "@heroicons/react/outline";


function PaymodalCheckError({ setModalOn }) {
    const handleOKClick = () =>{
        setModalOn(false)
    }
  return (
    <>
        <div className='w-[30rem] flex flex-col items-center'>
            <ExclamationCircleIcon className='h-[60px] '/>
            <h2 className='mb-[20px]'>¡Ocurrio un error!</h2>
            <p className='font-normal'>Vuelve a intentar lo mas tarde</p>
            <button
            onClick={handleOKClick}
            className=" rounded px-4 py-2 text-white bg-red-800 mt-[40px]"
          >
            Aceptar
          </button>
        </div>
    </>
  )
}

export default PaymodalCheckError