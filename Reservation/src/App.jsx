import React, { useState } from 'react';
import './deta.css';
import './styles.css';
import './head.css';
import shootingStars from './shootingStars.gif'; // Make sure to import the image

const Reservation = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleReserveClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 4000);
    };

    const handleBookAgain = () => {
        setIsSubmitted(false);
    };

    return (
      <div id="whole">

      
        <div className="main" id="main">
            {!isSubmitted && !isLoading && (
                <>
                    <div className="head">
                        <h1>RESERVATION</h1>
                    </div>
                    <div className="details">
                        <form>
                            <div className="name">
                                <label>Name</label>
                                <input type="text" maxLength="30" spellCheck="false" placeholder="Name" required />
                            </div>
                            <div className="number">
                                <label>Number</label>
                                <input type="tel" maxLength="12" placeholder="Phone Number" required />
                            </div>
                            <div className="people">
                                <label>Number of People</label>
                                <select name="peopleNumber" required>
                                    <option value="" disabled selected hidden>
                                        Number of People
                                    </option>
                                    <option value="1-Person">1 Person</option>
                                    <option value="2-Person">2 People</option>
                                    <option value="3-Person">3 People</option>
                                    <option value="4-Person">4 People</option>
                                    <option value="5-Person">5 People</option>
                                    <option value="6-Person">6 People</option>
                                    <option value="7-Person">7 People</option>
                                    <option value="8-Person">8+ People</option>
                                </select>
                            </div>
                            <div className="date-select">
                                <label>Date</label>
                                <input placeholder="Date" type="text" onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} required />
                            </div>
                            <div className="time">
                                <label>Time</label>
                                <select name="times" required>
                                    <option value="" disabled selected hidden>Time</option>
                                    <option value="7:00 AM">7:00 AM</option>
                                    <option value="7:30 AM">7:30 AM</option>
                                    <option value="8:00 AM">8:00 AM</option>
                                    <option value="8:30 AM">8:30 AM</option>
                                    <option value="9:00 AM">9:00 AM</option>
                                    <option value="10:00 AM">10:00 AM</option>
                                    <option value="10:30 AM">10:30 AM</option>
                                    <option value="11:00 AM">11:00 AM</option>
                                    <option value="11:30 AM">11:30 AM</option>
                                    <option value="12:00 PM">12:00 PM</option>
                                    <option value="12:30 PM">12:30 PM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="1:30 PM">1:30 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="2:30 PM">2:30 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="3:30 PM">3:30 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="4:30 PM">4:30 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="5:30 PM">5:30 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="6:30 PM">6:30 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="7:30 PM">7:30 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="8:30 PM">8:30 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                </select>
                            </div>
                            <div className="btn">
                                <button id="reserve-btn" type="button" onClick={handleReserveClick}>
                                    <strong>FIND A TABLE</strong>
                                    <div id="container-stars">
                                        <div id="stars"></div>
                                    </div>
                                    <div id="glow">
                                        <div className="circle"></div>
                                        <div className="circle"></div>
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
            {isLoading && (
                <>
                    <img id="shootstar" src={shootingStars} alt="Loading..." />
                    <h2>Finding the best seat for you!</h2>
                </>
            )}
            {isSubmitted && (
                <>
                    <header>Thank you!</header>
                    <h2>Your reservation has been confirmed by us!</h2>
                    <button id="reserve-btn2" type="button" onClick={handleBookAgain}>
                        <strong>Book Again?</strong>
                        <div id="container-stars">
                            <div id="stars"></div>
                        </div>
                        <div id="glow">
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                    </button>
                </>
            )}
        </div>
        <div className="extra">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="https://policies.google.com/privacy">Privacy Policy</a> and{' '}
                <a href="https://policies.google.com/terms">Terms of Service</a> apply.
            </div>
        </div>
    );
};

export default Reservation;