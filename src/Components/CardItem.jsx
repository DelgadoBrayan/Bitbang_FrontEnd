import React, { useState } from 'react'
import { CardUpdate } from './CardUpdate'
import { drop } from '../service/eliminarProduct'

export const CardItem = ({contact, id, reload}) => {

   const [openModal, setOpenModal] = useState(false)

   const closeModal =()=>{
    setOpenModal(false)
   }

   const deleteProduct = async ()=>{
    //function to delete the product located in the services
    await drop(id)
    //function to refresh the cards and see the changes
     reload()
   }
   
  return (
    <div className="group border-gray-100/30 flex w-full max-w-lg flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md md:max-w-md lg:max-w-lg">
    <div className="mt-4 px-5 pb-5">
        <h5 className="tracking-tight text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-5">
            Nombre: {contact.name}
        </h5>
        <h5 className="tracking-tight text-white text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3">
            Número: {contact.number}
        </h5>
        <h5 className="tracking-tight text-gray-400 text-base sm:text-lg md:text-xl lg:text-2xl">
            Email: {contact.gmail}
        </h5>
        <div className="text-white text-sm sm:text-base md:text-lg flex flex-col gap-3 mt-5 md:flex-row">
            <button
                onClick={() => setOpenModal(true)}
                className="bg-gray-950 p-2 rounded-lg flex gap-3 font-semibold text-yellow-500 hover:bg-gray-800 transition duration-200"
            >
                Actualizar
            </button>
            <button
                onClick={() => deleteProduct()}
                className="bg-slate-950 p-2 rounded-lg flex gap-3 font-semibold text-red-500 hover:bg-slate-800 transition duration-200"
            >
                Eliminar
            </button>
        </div>
    </div>
    <CardUpdate
        isOpen={openModal}
        contact={contact}
        id={id}
        close={closeModal}
        reload={reload}
    />
</div>


  )
}
