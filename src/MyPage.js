import React from 'react';
import './index.css';
//import Checkbox from './components/Checkbox';
//import Footer from './components/Footer';
//import MainContent from './components/MainContent';
//import Navbar from './components/Navbar';
//import Joke from './components/Joke'
//import Product from './components/Product'
//import productsData from './components/productsData'
//import LoggedIn from './components/LoggedIn'
//import MouseOver from './components/MouseOver';
//import Count from './components/Count';
//import Conditional from './components/Conditional';
//import LogInPractice from './components/LogInPractice'
//import TodoList from './components/TodoList';
//import Fetch from './components/Fetch'
//import TravelForm from './components/TravelForm'
import MemePage from "./components/MemePage"

function MyPage(){
    /*const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()*/
    /*return (
      <div>
        <Navbar />
        <MainContent/>
        <p>Clock is {hours}:{minutes} </p>
        <Checkbox />
        <Footer/>
      </div>
    )*/
     /* return(
        <div>
        <Joke 
          question="Why did the chicken cross the road?"
          answer="She had to find the egg!"
        />
        <Joke 
          question="What's up with airplane food?"
          answer="They want you to jump off the plane to save fuel!"
        />
        <Joke 
          //question="Why did the chicken cross the road?"
          answer="Kleptomaniacs amiright?"
        />
        <Joke 
          question="Why did the chicken cross the road?"
          answer="She had to find the egg!"
        />
        <Joke 
          question="Why did the chicken cross the road?"
          answer="She had to find the egg!"
        />
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

  /*var myInfo = React.createElement('h1', null, 'My Name',
  React.createElement('p', null, 'blurb'),
  React.createElement('ul', null, 
    React.createElement('li', null, 'Iceland'),
    React.createElement('li', null, 'Peru'),
    React.createElement('li', null, 'Antarctica'))
  );
  /*var element = React.createElement('h1', { className: 'greeting' }, 'Hello, world!',
  React.createElement('ul', null, 
    React.createElement('li', null, '1'),
    React.createElement('li', null, '12'),
    React.createElement('li', null, '123'))
  ;
  /*var myInfo = React.createElement('h1', null, 'My Name');
  React.createElement('p', null, 'blurb',
    React.createElement('ul', null, 
      React.createElement('li', null, 'Iceland'),
      React.createElement('li', null, 'Peru'),
      React.createElement('li', null, 'Antarctica')
    )
  );*/
// ReactDOM.render(
//   /*<React.StrictMode>
//     <App />
//   </React.StrictMode>,*/
//   <MyPage />,
//   //<MemePage />,
//   //MyInfo(),
//   //myInfo,
//   document.getElementById('root'));