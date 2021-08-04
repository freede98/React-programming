import React from 'react';
import './index.css';
//import Footer from './components/Footer';
//import MainContent from './components/MainContent';
//import Navbar from './components/Navbar';
//import Joke from './components/Joke'
//import Product from './components/Product'
//import productsData from './components/productsData'

/*
    Import any componenets as shown above
*/

import MemePage from "./components/MemePage"

function MyPage(){
    /*return (
      <div>
        <Navbar />
        <MainContent/>
        <p>Clock is {hours}:{minutes} </p>
        <Checkbox />
        <Footer/>
      </div>
    )*/
      /*const productComponents = productsData.map(data => //{
        //return(
          //<Product ID={data.id} Name={data.name} Price={data.price}/>
          <Product key={data.id} product = {data} />
        //)
      //}
      )
      return(
        <div>
          {productComponents}
        </div>
      )*/
  return(
    <MemePage />
  )
}

export default MyPage;
