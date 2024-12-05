import React, { useState } from 'react'
import { update } from '../service/updateProduct'

export const CardUpdate = ({isOpen,id, close, reload}) => {
    const [nameProduct, setNameProduct] = useState()
    const updateProduct = async()=>{
        try {
            // function to update the product located in the services
          await update(id, nameProduct) 
          //function to refresh the letters and see the update
           reload()
          //function close modal
           close()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    {isOpen &&
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="relative  bg-gray-700 border border-gray-100/30 rounded-lg shadow-slate-500 shadow-md p-6 w-max">
        <button
            onClick={close}
            className="absolute top-2 right-2 text-white text-xl font-bold"
            >
            &times;
        </button>
        <h1 className='text-white text-xl mb-5 font-semibold drop-shadow-lg'>Actualiza el nombre del Producto</h1>
        <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="producto"
            type="text"
            onChange={(e) => setNameProduct(e.target.value)}
            />
        <button onClick={() => updateProduct()} type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 mt-5 rounded-lg text-xl font-bold px-5 py-2.5 text-center me-2 ">Agregar</button>
    </div>
</div>
}
            </>
  )
}
