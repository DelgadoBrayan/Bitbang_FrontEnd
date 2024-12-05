
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

export const Login = () => {
   const navigate = useNavigate()
   const {
    register, 
    handleSubmit,
    formState:{errors}}= useForm()

    
  return (
    <section class="bg-gradient-to-r from-slate-950 to-slate-900 dark:bg-gray-900 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div class="w-full rounded-lg shadow-white dark:border-white border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 ">
              <h1 class="text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Inicia Sesion 
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" >
                  <div>
                      <label for="email" class=" block mb-2 text-xl font-medium text-gray-900 dark:text-white"> email</label>
                        <input {...register('email', {required:true})} type="email" name='email' id='email' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com" required="" />
                        {errors.email && <span className='text-red-500 text-lg'>Email es requerido</span>}
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input {...register('password', {required:true})} type="password" name='password' id='password' placeholder='••••••••' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        {errors.password && <span className='text-red-500 text-lg'>contraseña es requerida</span>}
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                          
                                <input  id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-gray-400">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full border-2 bg-primary-600 hover:bg-primary-700 text-gray-800 bg-gradient-to-r from-indigo-500 to-blue-500 focus:ring-4 text-xl focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                    <Link to={'/contact'}>
                  Sign in
                  </Link></button>
                  <p class="text-sm font-light text-black   dark:text-gray-400">
                      No tienes cuenta?
                      <Link className="text-primary-600 font-bold hover:underline dark:text-primary-500" to={'/register'}> Registrate ahora</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}
