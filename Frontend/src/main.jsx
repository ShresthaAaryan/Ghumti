import React, { useState } from 'react';
import './App.css'; 
import SocialMediaButtons from './components/Social/social';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import Market from './components/market/market';
import Testimonials from './components/Testimonial/testimonial';
import MyComponent from './title';

const Main = () => {
    const [foodName, setFoodName] = useState('');
  
    const handleSearch = () => {
        window.location.href = `/menu?search=${foodName}`;
    };
    
    return (
      <div className="app" id='home'>
        <MyComponent/>
        <Navbar/>
        <main className="main-content">
          <div className='Main'>
            <div className='text1'>
              <h1><h4>The Best</h4><h1>Nepali Restaurant in</h1> <h1>Allawah,Sydney</h1></h1><br/>
              <p>Whether it's food cravings or quality time with friends, we're just a click away</p>
            </div>
            <div className="input-button-container">
              <input type="text" placeholder="  Enter Your Food Name..." className="input3" style={{width: '20rem'}} value={foodName} onChange={(e) => setFoodName(e.target.value)}/>
              <button className="find-food-button" onClick={handleSearch}>Search</button>  
            </div><br/><br/>
            <div className='social'>
              <SocialMediaButtons/>
            </div>
          </div>
        </main>
        <Market/><br/><br/>
        <Testimonials/>
        <Footer/>
      </div>
    );
}

export default Main;
