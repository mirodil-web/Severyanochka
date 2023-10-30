import React, { useState } from 'react'
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
import Aksiya from './components/Aksiya';
import Novinki from './components/Novinki';
import Pokupki from './pages/Pokupki';
import Kontakt from './pages/Kontakt';
import { acsiyadata } from './store/data';
import Carddata from './components/Carddata';
import Cdetail from './pages/Cdetail';
import Katalogresults from './components/Katalogresults';
import Carddatanovinki from './pages/Carddatanovinki';
import Cardranshedata from './pages/Cardranshedata';
import Vseaksi from './pages/Vseaksi';




const App = () => {

  const [cardLike, setCardLike] = useState([])
  const [like, setLike] = useState(false)

  const [korzina, setKorzina] = useState([])


  const addLike = (i) => {
    const found = cardLike.find((e) => e.id === i);
    if (!found) {
      const productToAdd = acsiyadata.find((e) => e.id === i);
      setCardLike([...cardLike, {...productToAdd}]);
    }

  };

  const addKorzina = (i) => {
    const found = korzina.find((e) => e.id === i);
    if (!found) {
      const productToAdd = acsiyadata.find((e) => e.id === i);
      setKorzina([...korzina, { ...productToAdd }])
    }
    else (
      alert('BU oldin tanlab olingan')
    )

  };

  const removeLike = (i) => {
    const updatedShop = cardLike.filter((e) => e.id !== i);
    setCardLike(updatedShop);

  };


  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout cardLike={cardLike} korzina={korzina} />}>
        <Route index element={<Home addLike={addLike} addKorzina={addKorzina} cardLike={cardLike} removeLike={removeLike} />} />
        <Route path='izbrozenoe' element={<Izbrozeniya cardLike={cardLike} />} />
        <Route path='katalog' element={<Katalog />} />
        <Route path='vakansi' element={<Vakansi />} />
        <Route path='about' element={<About />} />
        <Route path='korzina' element={<Korzina korzina={korzina} />} />
        <Route path='novinki' element={<Novinki />} />
        <Route path='pokupki' element={<Pokupki />} />
        <Route path='kontakt' element={<Kontakt />} />
        <Route path='carddata/:id' element={<Carddata />} />
        <Route path='cdetail/:id' element={<Cdetail />} />
        <Route path='novinkidata/:id' element={<Carddatanovinki />} />
        <Route path='katalogresults/:id' element={<Katalogresults />} />
        <Route path='ranshedata/:id' element={<Cardranshedata />} />
        <Route path='vseaksi' element={<Vseaksi />} />
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