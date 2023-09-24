import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
import RootLayout from './layout/RootLayout'
import Izbrozeniya from './pages/Izbrazenaya'
import Katalog from './pages/Katalog'
import Home from './pages/Home'
import Vakansi from './pages/Vakansi';
import About from './pages/About';
import Korzina from './pages/Korzina';
import Aksiya from './pages/PageAcksiya';
import Novinki from './pages/Novinki';
import Pokupki from './pages/Pokupki';
import Kontakt from './pages/Kontakt';



const App = () => {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home/>} />
        <Route path='izbrozenoe' element={<Izbrozeniya />} />
        <Route path='katalog' element={<Katalog />} />
        <Route path='vakansi' element={<Vakansi />} />
        <Route path='about' element={<About />} />
        <Route path='korzina' element={<Korzina />} />
        <Route path='aksiya' element={<Aksiya />} />
        <Route path='novinki' element={<Novinki />} />
        <Route path='pokupki' element={<Pokupki />} />
        <Route path='kontakt' element={<Kontakt />} />

      </Route>
    )
  )


  return (
    <div className='font-Rubik'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App