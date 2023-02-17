import React from 'react'
import {Route,Routes,BrowserRouter,NavLink, Navigate} from "react-router-dom"
import { Contact } from '../components/Contact'
import { Curriculum } from '../components/Curriculum'
import { FooterPage } from '../components/layout/FooterPage'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Portfolio } from '../components/Portfolio'
import { Principal } from '../components/Principal'
import { Project } from '../components/Project'
import { Services } from '../components/Services'

export const MyRoutes = () => {
  return (
    <BrowserRouter>
    
    {/* navbar */}

    <HeaderNav/>


    {/* content */}

    <section className='content'>
      <Routes>
          <Route path='/' element={<Navigate to= '/inicio'/>}> </Route>
          <Route path='/inicio' element={<Principal/>}> </Route>
          <Route path='/portafolio' element={<Portfolio/>}> </Route>
          <Route path='/curriculum' element={<Curriculum/>}> </Route>
          <Route path='/services' element={<Services/>}> </Route>  
          <Route path='/contacto' element={<Contact/>}> </Route> 
          <Route path='/proyecto/:id/:nombre' element={<Project/>}> </Route> 
          <Route path='*' element={
            <div>
              <h1>Error 404</h1>
            </div>
          }> </Route> 
           
      </Routes>

    </section>

   
    
    {/* footer */}

    <FooterPage/>
    </BrowserRouter>
  )
}
