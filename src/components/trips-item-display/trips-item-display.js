import React, { useState } from "react";
import { useParams } from "react-router-dom";

import './trips-item-display.css'
import BookingModal from "../booking-modal/booking-modal";

const tripsList = require('../../helpers/trips.json');


const TripsItemDisplay = () => {
    const [isDisplayModal, setIsDisplayModal] = useState(false);
    const {id} = useParams();
    const project = tripsList[id];
    const { title, description, level, duration, price, image} = project;


   
    return (
        <>
          <main className="trip-page">
          <h1 className="visually-hidden">Travel App</h1>
          <div className="trip">
            <img
                data-test-id="trip-details-image"
                src={image}
                className="trip__img"
                alt="my life"
            />
            <div className="trip__content">
              <div className="trip-info">
                <h3 data-test-id="trip-details-title" className="trip-info__title">
                  {title}
                </h3>
                <div className="trip-info__content">
              <span
                  data-test-id="trip-details-duration"
                  className="trip-info__duration"
              >
                <strong>{duration}</strong> days
              </span>
                  <span data-test-id="trip-details-level" className="trip-info__level">
                {level}
              </span>
                </div>
              </div>
              <div
                  data-test-id="trip-details-description"
                  className="trip__description"
              >
                {description}
              </div>
              <div className="trip-price">
                <span>Price</span>
                <strong
                    data-test-id="trip-details-price-value"
                    className="trip-price__value"
                >
                  {price} $
                </strong>
              </div>
              <button
                  data-test-id="trip-details-button"
                  className="trip__button button"
                  onClick={() => {
                      // setIsDisplayModal(!isDisplayModal);
                      setIsDisplayModal(prevState => !prevState);
                  }}
              >
                Book a trip
              </button>
            </div>
          </div>
        </main>
            {
                isDisplayModal &&
                    <BookingModal
                        isDisplayModal={isDisplayModal}
                        setIsDisplayModal={setIsDisplayModal}
                    />
            }
        </>

    )
}

export default TripsItemDisplay