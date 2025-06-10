import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Recommandation from './components/Recommandation'
import Shop from './components/Shop'
import Cards from './components/Cards'
import Footer from './components/Footer'
 

function App() {
  

  return (
     <div className='m-5'>
     <Nav />
     <Hero/>
     <Collection/>
     <Recommandation/>
     <Shop/>
     <Cards/>
     <Footer/>
     </div>
  )
}

export default App
