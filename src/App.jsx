import { BrowserRouter, useRoutes } from "react-router-dom"
import { AddContact } from "./pages/Contact/addContact"
import { Login } from "./pages/Login/Login"
import { Register } from "./pages/Login/Regiater"


function App() {
  
  const AppRouter=()=>{
    const router = useRoutes([
      {path:'/', element:<Login/>},
      {path:'/register', element:<Register/>},
      {path:'/contact', element:<AddContact/> }
    ])
    return router
  }
  return (
   <BrowserRouter>
   <AppRouter/>
   </BrowserRouter>
  )
}

export default App
