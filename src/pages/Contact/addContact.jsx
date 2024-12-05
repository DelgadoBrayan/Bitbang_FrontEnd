import React, { useState } from 'react'
import { CardItem } from '../../Components/CardItem'
import { CardAddItem } from '../../Components/CardAddItem'

export const AddContact = () => {
  const [modalAddContact, setModalAddContact] = useState(false)

  const closeModalAddContact =()=>{
    setModalAddContact(false)
  }
  return (
    <article className='bg-gradient-to-r from-slate-950 to-slate-900 dark:bg-gray-900 h-screen text-white'>

   <section className=' flex flex-col items-center'>
    <h1 className='text-5xl drop-shadow-lg mt-10'>Lista de contactos</h1>
    <form class="w-96 mt-10">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
   </section>

   <div className=''>

<button onClick={()=> setModalAddContact(true)} className='text-xl border-white border mt-5 mb-5 text-blue-600 py-5 px-2 rounded-lg font-bold'>Agregar Contacto</button>

     <CardItem name={'test funcinal'} number={3124323} email={'test@gmail.com'} id={1} />
</div>
<CardAddItem isOpen={modalAddContact} close={closeModalAddContact}/>
</article>
    )
}
