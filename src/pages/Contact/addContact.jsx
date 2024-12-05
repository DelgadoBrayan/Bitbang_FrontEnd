import React, { useState, useEffect } from 'react'
import { CardItem } from '../../Components/CardItem'
import { CardAddItem } from '../../Components/CardAddItem'
import Cookies from 'js-cookie'
import axios from 'axios'

export const AddContact = () => {
  const [modalAddContact, setModalAddContact] = useState(false)
  const [contacts, setContacts] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([]) 
  const [searchTerm, setSearchTerm] = useState('') 
  const [reload, setReload] = useState()
  const token = Cookies.get('token')

  const closeModalAddContact = () => {
    setModalAddContact(false)
  }

  useEffect(() => {
    const getContact = async () => {
      try {
        const response = await axios.get('https://bitbang-backend.onrender.com/api/contacts', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setContacts(response.data)
        setFilteredContacts(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getContact()
  }, [reload])

  const useReload = () => {
    setReload(!reload)
  }
  const handleSearchContact = (e) => {
    const term = e.target.value.trim(); // Remueve espacios extra
    setSearchTerm(term);
  
    if (term.length >= 3) {
      const filtered = contacts.filter((contact) => {
        const name = contact.name?.toLowerCase() || ""; // Asegúrate de que `name` sea una cadena
        const number = String(contact.number || ""); // Convierte `number` a cadena si no lo es
        return name.includes(term.toLowerCase()) || number.includes(term);
      });
      setFilteredContacts(filtered);
    } else {
      setFilteredContacts(contacts); // Si el término es menor a 3 caracteres, muestra todos
    }
  };
  

  return (
    <article className="bg-gradient-to-r from-slate-950 to-slate-900 dark:bg-gray-900 min-h-screen text-white">
      <section className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl drop-shadow-lg mt-10 text-center">
          Lista de contactos
        </h1>
        <form className="w-full max-w-md mt-10">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={searchTerm}
              onChange={handleSearchContact} 
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar contactos..."
            />
          </div>
        </form>
      </section>

      <div className="px-4 md:px-8 lg:px-16">
        <button
          onClick={() => setModalAddContact(true)}
          className="text-base sm:text-lg md:text-xl border-white border mt-5 mb-5 px-4 py-2 rounded-lg font-bold text-blue-600 bg-white hover:bg-gray-100"
        >
          Agregar Contacto
        </button>
        <div className="flex justify-center flex-wrap gap-6">
          {filteredContacts.length > 0 ? (
            filteredContacts.map((contact) => (
              <CardItem key={contact._id} contact={contact} id={contact._id} reload={useReload} />
            ))
          ) : (
            <h1 className="text-2xl sm:text-3xl md:text-4xl drop-shadow-lg">No hay contactos agregados</h1>
          )}
        </div>
      </div>
      <CardAddItem isOpen={modalAddContact} close={closeModalAddContact} reload={useReload} />
    </article>
  )
}
