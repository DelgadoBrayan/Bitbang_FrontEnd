import React, { useState } from 'react'
import { CardUpdate } from './CardUpdate'
import { drop } from '../service/eliminarProduct'

export const CardItem = ({name, id, reload}) => {

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
    <>
  <div className="group border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border bg-gray-700 shadow-md">
    <div className="mt-4 px-5 pb-5">
        <h5 className=" tracking-tight text-white text-4xl">{name}</h5>
       <div className='text-white text-2xl flex gap-5 mt-5'>
        <button onClick={()=>setOpenModal(true)} className='bg-gray-950 p-2 rounded-lg flex gap-3 font-semibold text-yellow-500'>Actualizar </button>
        <button onClick={()=>deleteProduct()} className='bg-slate-950 p-2 rounded-lg flex gap-3 font-semibold text-red-500'>Eliminar</button>
       </div>
    </div>
    <CardUpdate isOpen={openModal} id={id} close={closeModal} reload={reload}/>
  </div>
    </>

  )
}
