import React, { useState } from 'react';
import './reservation.css';
import Navbar from '../Navbar/navbar';

const OrderForm = () => {
  const [orderSize, setOrderSize] = useState('');
  const [arrivalTime, setArrivalTime] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [otherDetails, setOtherDetails] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (!value || !/^\d+$/.test(value)) {
      setPhoneNumberError('Phone number must contain only digits.');
    } else if (value.length !== 10) {
      setPhoneNumberError('Phone number must be 10 digits long.');
    } else {
      setPhoneNumberError('');
    }
    setPhoneNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!orderSize.trim()) {
      errors.orderSize = 'Required';
    }
    if (!arrivalTime.trim()) {
      errors.arrivalTime = 'Required';
    }
    if (!arrivalDate.trim()) {
      errors.arrivalDate = 'Required';
    }
    if (!numberOfPeople.trim()) {
      errors.numberOfPeople = 'Required';
    }
    if (!email.trim()) {
      errors.email = 'Required';
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Required';
    }
    if (!otherDetails.trim()) {
      errors.otherDetails = 'Required';
    }

    if (Object.keys(errors).length > 0 || phoneNumberError) {
      setErrors(errors);
      return;
    }
    const type = 'order';
    try {
      const response = await fetch('http://localhost:4000/backend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({type, orderSize, arrivalTime,arrivalDate, numberOfPeople, otherDetails, email, phoneNumber })
      });

      if (response.ok) {
        console.log('Email sent successfully');
        window.location.reload();
        alert('Email sent successfully!');
      } else {
        console.error('Failed to send email');
        alert('Failed to send email. Please try again later.');
      }
    
      console.log('Email sent successfully');
      window.location.reload(); 
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <div className='main'>
      <Navbar />
      <div className="order-form-container">
        <form onSubmit={handleSubmit} className="order-form">
          <h1>Reservation Form</h1>
          <div className="form-row">
            <div className="form-column">
              <label className="form-label">
                <h3>Order Size</h3>
                <input type="number" name="text" className="input3" value={orderSize} onChange={(e) => setOrderSize(e.target.value)} />
              </label>{errors.orderSize && <span className="error-message">{errors.orderSize}</span>}
              <label className="form-label">
                <h3>Total People</h3>
                <input type="number" name="text" className="input3" value={numberOfPeople} onChange={(e) => setNumberOfPeople(e.target.value)} />
              </label>{errors.numberOfPeople && <span className="error-message">{errors.numberOfPeople}</span>}
            </div>
            <div className="form-column">
              <label className="form-label">
                <h3>Phone Number</h3>
                <input type="tel" name="text" className="input3" placeholder="+61" value={phoneNumber} onChange={handlePhoneNumberChange} />
              </label>{phoneNumberError && <span className="error-message">{phoneNumberError}</span>}
              <label className="form-label">
                <h3>Arrival Time</h3>
                <input type="time" name="text" className="input3" value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} />
              </label>{errors.arrivalTime && <span className="error-message">{errors.arrivalTime}</span>}
            </div>
          </div>
          <label className="form-label">
            <h3>Arrival Date</h3>
            <input type="date" name="text" className="input3" style={{marginRight: '1rem'}} value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} />
          </label>{errors.arrivalDate && <span className="error-message">{errors.arrivalDate}</span>}        
          <label className="form-label">
            <h3>Your Email</h3>
            <input type="email" name="text" className="input3" value={email} style={{marginRight: '1rem'}} onChange={(e) => setEmail(e.target.value)} autoCapitalize="off"/>            
          </label>{errors.email && <span className="error-message">{errors.email}</span>}
          <label className="form-label" style={{marginRight: '1rem'}}>
            <h3>Other Details</h3>
            <textarea value={otherDetails} onChange={(e) => setOtherDetails(e.target.value)} className="input3" style={{height: '150px', textAlign: 'left', padding: '20px', marginRight:'1rem'}}/>          
          </label>{errors.otherDetails && <span className="error-message">{errors.otherDetails}</span>}
          <br/><br/><br/><button type="submit" className="submit-button">Submit</button><br/><br/><br/><br/>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
