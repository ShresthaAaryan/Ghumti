import React from 'react';
import './market.css';
import img from '../../assets/Images/store.jpg';
import img1 from '../../assets/Images/institute.jpg';
function App() {
  return (
    <div className="container1">
      <section className="hero">          
        <div className="palette">
          <h1>Ghumti SuperMarket</h1>
        </div>
        <p>Welcome to Ghumti Supermarket, your friendly neighbourhood destination for all your grocery and household needs! Conveniently located in Allawah, NSW, we offer a wide variety of high-quality products at competitive prices.</p>
      </section>
      <section className="features">
        <div className="feature">
          <div className="templates">
            <div className='text'>
              <h2>What We Offer</h2>
              <p>Extensive Product Selection: Explore our aisles filled with groceries, fresh produce, frozen foods, dairy products, personal care items, household cleaning supplies, and more. We stock a diverse range of national and international brands to cater to your specific requirements.</p>
              <p>Freshness You Can Trust: We prioritize quality and freshness. Our team carefully selects fruits, vegetables, and other perishables to ensure they reach your basket in peak condition.</p>
              <p>Competitive Prices: We're committed to offering everyday low prices on all our products. Stretch your grocery budget further by shopping at Ghumti Supermarket.</p>
              <p>Friendly and Helpful Staff: Our knowledgeable staff is always happy to assist you in finding the products you need and answer any questions you may have. We're here to make your shopping experience enjoyable and convenient.
                More Than Just Groceries</p>
              <p>At Ghumti Supermarket, we understand the importance of convenience in your busy life.  In addition to our extensive grocery selection, we offer:
                Shop Local, Shop Ghumti</p>
              <p>We're proud to be part of the Allawah community and committed to providing our neighbours with a convenient and affordable shopping experience.
                Visit Us Today!</p>
              <p>We look forward to welcoming you to Ghumti Supermarket, your one-stop shop for a happy home!</p>
            </div>
          </div>
        </div>
        <div className='templates'>
          <img src={img} className='image' alt="Template" />
        </div>
      </section>
      <section className="hero">
        <div className="palette">
          <h1>Ghumti Driving Institute</h1>
          <button className='btn'>Launching Soon</button>
        </div>
        <p>Gear up, NSW! Ghumti Driving School is putting you in the driver's seat towards a life of freedom. We're thrilled to announce our upcoming launch in New South Wales, Australia.
          At Ghumti Driving School, we're passionate about empowering our students with the knowledge, skills, and confidence to become safe and responsible drivers. Our driving instructors are highly qualified and experienced professionals, dedicated to providing a supportive and stress-free learning environment.
        </p>
      </section>
      <section className="features">
        <div className="feature">
          <div className="templates">
            <div className='text'>
              <h2>Why Choose Ghumti Driving School?</h2>
              <p>Flexible Learning: We offer a variety of driving lesson packages to suit your individual needs and schedule.</p>
              <p> Automatic and Manual Transmission: Learn to drive in a car that best suits you, whether it's an automatic or manual transmission vehicle.</p>
              <p>Knowledgeable Instructors: Our instructors are patient, friendly, and possess a wealth of experience to guide you through every step of the learning process.</p>
              <p> Multilingual Support: We cater to a diverse community and offer instruction in multiple languages.</p>
              <p>Competitive Rates: We offer high-quality driver education at affordable prices.</p>
              <p> Modern Vehicles: Our fleet consists of safe, well-maintained, and up-to-date vehicles for a comfortable learning experience.
                Get Licensed with Confidence at Ghumti Driving School</p>
              <p>Learning to drive is a significant milestone, and we're here to make it a smooth and enjoyable experience. With Ghumti Driving School, you'll gain the skils and confidence to navigate the roads of NSW safely and confidently..</p>
            </div>
          </div>
        </div>
        <div className='templates'>
          <img src={img1} className='image' alt="Template" />
        </div>
      </section>
    </div>
  );
}

export default App;
