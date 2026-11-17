import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import About from './pages/About.tsx';

import Signup from './pages/Signup.tsx';
import Services from './pages/Services.tsx';
import Login from './pages/Login.tsx';
import RooutLayout from './pages/RooutLayout.tsx';
import Userlayout from './pages/users/Userlayout.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Routes>
   <Route path="/" element={<RooutLayout/>}>
    <Route index element={<App/>}/>
    <Route path='/about' element={<About/>}/>
     <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
       <Route path='/service' element={<Services/>}/>
       <Route path='/dashboard' element={<Userlayout/>}/>
   </Route>
   
    </Routes>
    </BrowserRouter>
)
