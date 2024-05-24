import React, { useState, useEffect } from 'react';
import './testimonial.css';

function RatingReview({ rating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          className='star'
          style={{
            cursor: 'pointer',
            color: rating >= star ? 'gold' : 'gray',
            fontSize: '35px',
          }}
          key={star}
        >
          ★
        </span>
      ))}
    </div>
  );
}

const testimonialsData = [
  {
      "id": "1",
      "name": "Aarzeen Kharel",
      "quote": "Amazing food with outstanding service",
      "from": "Google Reviews",
      "star": "5"
  },
  {
      "id": "2",
      "name": "John Rock",
      "quote": "One of the Best restaurants for original Nepali taste. I tried the food of many Nepalese restaurants in Sydney this is the best for Nepali food. I  highly recommend it!",
      "from": "Google Reviews",
      "star": "5"
  },
  {
      "id": "3",
      "name": "Dibas Karki",
      "quote": "Fantastic Nepalese cuisine! The flavors were authentic and the presentation was impressive. The staff was welcoming and attentive, ensuring a delightful dining experience. Don't miss the momos, Chowmin, sukuti,  khaja set and Thali set A must-visit for anyone craving delicious Nepalese food in a cozy atmosphere. Highly recommended!",
      "from": "Google Reviews",
      "star": "5"
  },
  {
      "id": "4",
      "name": "Emiley Yuen",
      "quote": "We had the delicious Jhol momos and Chatpatte was also surprisingly tasty with the right combination of textures and flavours - the raw peas added a fresh kick. The staff were also super friendly, We really enjoyed everything and will be back for sure. Thank you!",
      "from": "Google Reviews",
      "star": "5"
  },
  {
      "id": "5",
      "name": "Nischa Sharma",
      "quote": "It was worth the penny.",
      "from": "Resturant Review",
      "star": "4.5"
  },
  {
      "id": "6",
      "name": "Tomasz Tomaszewski",
      "quote": "Very tasty food.",
      "from": "Google Reviews",
      "star": "4"
  },
  {
      "id": "7",
      "name": "Pradeep Khanal",
      "quote": "Best Nepalese cousin 👍 friendly staffs. Fresh and quality is 100%✔",
      "from": "Google Reviews",
      "star": "5"
  },
  {
      "id": "8",
      "name": "John Akis",
      "quote": "I only needed rice to finish a meal I was making for my partner and I so it was a quick and simple stop off. But sometimes it says alot about the place how ur treated. ",
      "from": "Google Reviews",
      "star": "4"
  },
  {
      "id": "9",
      "name": "Adam Stein",
      "quote": "Very delicious and good price. We had a Momo Platter to try a few things. Restaurant is cute with its wall murals.",
      "from": "Google Reviews",
      "star": "5"
  },
  {
      "id": "10",
      "name": "Aavas Kunwar",
      "quote": "Had been there with friends, had a good experience of authentic Nepalese food",
      "from": "Google Reviews",
      "star": "3"
  },
  {
      "id": "11",
      "name": "Qiuhui Yao",
      "quote": "Really delicious momo, this is the place to go for momos",
      "from": "Google Reviews",
      "star": "5"
  },
  {
      "id": "12",
      "name": "Sharmila Rai",
      "quote": "Absolutely best foods. We, people of 7 went there for dinner on monday and all of them really appreciated the taste of food, amazing. Very authentic and cashier Dai, such a sweet and welcoming nature. Thankyou for your service. I definitely recommend this place",
      "from": "Google Reviews",
      "star": "5"
  }
]


const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonialsData.length);
  };

  return (
    <div className="testimonials-container">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials">
        <button className="nav-button left" onClick={handlePrev}>❮</button>
        {testimonialsData.slice(currentIndex, currentIndex + 3).map((testimonial) => (
          <div key={testimonial.id} className="testimonial">
            <p className="quote">{testimonial.quote}</p>
            <p className="name">{testimonial.name}</p>
            <p className="role">{testimonial.from}</p>
            <RatingReview rating={testimonial.star} />
          </div>
        ))}
        <button className="nav-button right" onClick={handleNext}>❯</button>
      </div>
    </div>
  );
};

export default Testimonials;
