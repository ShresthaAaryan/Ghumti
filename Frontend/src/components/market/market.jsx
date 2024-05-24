import React from 'react';
import './market.css';
import supermarket from '../../assets/Images/store.jpg';
import store from '../../assets/Images/store1.jpg';
import school from '../../assets/Images/institute.jpg';

function CompetitionCard({ image, title, description }) {
  return (
    <div className="competition-card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Competition() {
  return (
    <div className="competition-container">
      <CompetitionCard
        image={supermarket}
        title="Ghumti SuperMarket"
        description="Welcome to Ghumti Supermarket, your friendly neighbourhood destination for all your grocery and household needs! Conveniently located in Allawah, NSW, we offer a wide variety of high-quality products at competitive prices."
      />
      <CompetitionCard
        image={school}
        title="Ghumti Driving Institute"
        description="Gear up, NSW! Ghumti Driving School is putting you in the driver's seat towards a life of freedom. We're thrilled to announce our upcoming launch in New South Wales, Australia. At Ghumti Driving School, we're passionate about empowering our students with the knowledge, skills, and confidence to become safe and responsible drivers."
      />
    </div>
  );
}

export default Competition;
