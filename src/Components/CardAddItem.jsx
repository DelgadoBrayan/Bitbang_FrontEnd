import axios from 'axios'
import React, { useState } from 'react'
import Swal from 'sweetalert2'

export const CardAddItem = ({ isOpen, close, reload }) => {
    const [name, setName] = useState()
    const [number, setNumber] = useState()
    const [gmail, setEmail] = useState()
    const createProduct = async () => {
        try {
            const response = await axios.post('https://bitbang-backend.onrender.com/api/contacts', {
                name, number, gmail
            })

            if (response.data.msg) {
                Swal.fire({
                    title: response.data.msg,
                    icon: "success"
                });

                reload()
                setTimeout(()=>{
                    close()
                },700)
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-gray-700 border border-gray-100/30 rounded-lg shadow-slate-500 shadow-md p-6 w-full max-w-lg mx-4 sm:mx-8">
              <button
                onClick={close}
                className="absolute top-2 right-2 text-white text-xl font-bold"
              >
                &times;
              </button>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg">
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder=""
                  onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="number" className="text-lg mt-5">
                  Número
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder=""
                  onChange={(e) => setNumber(e.target.value)}
                />
                <label htmlFor="email" className="text-lg mt-5">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                onClick={() => createProduct()}
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 mt-5 rounded-lg text-xl font-bold px-5 py-2.5 w-full"
              >
                Agregar
              </button>
            </div>
          </div>
        )}
      </>
    )
}
