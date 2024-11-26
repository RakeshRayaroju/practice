import React, {useState} from 'react'
import Collection from '../components/Collection'
import Banner from '../components/Banner'

import Footer from '../components/Footer'
import Header from '../components/Header'

import {Gents,Ladies} from '../data'
import WomencCollection from '../components/WomencCollection'

const MainPage = () => {
  const [gentsFashion]=useState(Gents)
  const [ladiesFashion]=useState(Ladies)


  return (
    <div>
        <Header/>
        
        <Banner/>
        <Collection gentsFashion={gentsFashion}/>
        <WomencCollection LadiesFashion={ladiesFashion}/>
        <Footer/>
    </div>
  )
}

export default MainPage