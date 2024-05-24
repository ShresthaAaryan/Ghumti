import React, { useState } from 'react';
import './App.css'; 
import SocialMediaButtons from './components/Social/social';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/Footer';
import Market from './components/market/market';
import Testimonials from './components/Testimonial/testimonial';

const Main = () => {
    const [foodName, setFoodName] = useState('');
    const handleSearch = () => {
        window.location.href = `/menu?search=${foodName.toLowerCase()}`;
    };
    
    return (
      <div className="app" id='home'>
        <title>Ghumti Kitchen | Authentic Nepalese and Indian Cuisine in Allawah, Sydney</title>
        <meta name="keywords" content="Indian restaurant Allawah, Nepalese restaurant Allawah, Nepalese and Indian food Allawah, Best Nepalese restaurant Sydney, Best Indian restaurant Sydney, Momos Allawah, Panipuri Allawah, Ghumti Kitchen Allawah, Ghumti menu, Ghumti delivery, Nepalese takeaway Allawah, Indian takeaway Allawah, Lunch specials Ghumti Kitchen, Dinner specials Ghumti Kitchen, Authentic Nepalese cuisine near Allawah, Vegetarian Indian restaurant Allawah, Vegan Indian restaurant Allawah, Best place for momos in Sydney, Dine-in Indian food Allawah, Takeaway Indian food Allawah, Late-night Nepalese food Sydney, Nepalese dinner near me, Indian dinner near me, Spicy Indian food Allawah, Butter chicken Allawah, Saag paneer Allawah, Chicken tikka masala Allawah, Lamb rogan josh Allawah, Vegetarian momo Allawah, Chicken momo Allawah, Best momo filling, Nepalese dumplings Allawah, Indian street food Allawah, Pani puri flavours, Best Indian sweets Allawah, Gulab jamun Allawah, Jalebi Allawah, Indian catering Allawah, Nepalese catering Allawah, Family-friendly Indian restaurant Allawah, Romantic Nepalese restaurant Allawah, Indian takeaway near me, Nepalese takeaway near me, Affordable Indian restaurant Allawah, Budget-friendly Nepalese restaurant Allawah, Healthy Indian food Allawah, Gluten-free Indian options Allawah, Vegan Nepalese dishes Allawah, Best Indian lunch special Allawah, Best Nepalese lunch special Allawah, Sunday lunch Indian Allawah, Sunday lunch Nepalese Allawah, Indian restaurant delivery Allawah, Nepalese restaurant delivery Allawah, Indian delivery near me, Nepalese delivery near me, Indian restaurant open late Allawah, Nepalese restaurant open late Allawah, Best Indian restaurant Allawah reviews, Best Nepalese restaurant Allawah reviews, Ghumti Kitchen reviews, Nepalese food near Sydney Airport, Indian food near Sydney Airport, Things to do in Allawah, Restaurants in Allawah NSW, Best restaurants near me, Best Asian food Allawah, Best ethnic food Allawah, Authentic Nepalese experience Sydney, Best butter chicken Sydney, Best saag paneer Sydney, Best chicken tikka masala Sydney, Best lamb rogan josh Sydney, Best vegetarian momo Sydney, Best chicken momo Sydney, Best Indian street food Sydney, Best pani puri Sydney, Best Indian sweets Sydney, Best gulab jamun Sydney, Best jalebi Sydney, Indian food near Central Station Sydney, Nepalese food near Central Station Sydney, Indian restaurants Darling Harbour, Nepalese restaurants Darling Harbour, Things to do near Darling Harbour, Best food near Darling Harbour, Best restaurants in Sydney, Nepalese restaurants Sydney CBD, Indian restaurants Sydney CBD, Best food in Sydney CBD, Best lunch options Sydney CBD, Best dinner options Sydney CBD, Indian dinner buffet Sydney, Nepalese dinner buffet Sydney, Best all you can eat Indian Sydney, Best all you can eat Nepalese Sydney, Nepalese cultural experience Sydney, Best Nepalese restaurants in Australia"></meta>
        <div className='main-div'>
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
        </div>
        <Market/>
        <Testimonials/>
        <Footer/>
      </div>
    );
}

export default Main;
