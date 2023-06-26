import React from 'react'
import MainImages from '../components/main-imgs/MainImages'
import Offers from '../components/offers/Offers'
import Comps2 from '../components/comps2/Comps2'
import Footer from '../common/footer/Footer'

const MainPage = () => {

  
  return (
    <div className='header'>
      <MainImages/>
      <Offers/>
      <Comps2/>
      <Footer/>
     
    </div>
  )
}

export default MainPage
