import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import {Toaster} from "react-hot-toast"

const RooutLayout = () => {
  return (
    <div>
       <Toaster/>
        <Navbar/>
         <Outlet/>
       
    </div>
  )
}

export default RooutLayout