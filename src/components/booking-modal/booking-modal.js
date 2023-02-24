import React, {useState, Fragment} from "react";
import {useNavigate} from "react-router-dom";

import './booking-modal.css';

const BookingModal = ({setIsDisplayModal, cardModal, bookTrip}) => {
    const navigate = useNavigate();
    const {duration, level, price, title, id} = cardModal
    const [numberOfGuests, setGuests] = useState('1');
    const [date, setDate] = useState('');


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (date && numberOfGuests) {
            bookTrip(id, {numberOfGuests, date});
            navigate("/bookings");
        }
    }

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return tomorrow.toISOString().slice(0, 10)
    }

    const handleGuests = (event) => {
        const inputRegex = /^[1-9]$|^10$/;
        const inputValue = event.target.value;
        if (inputValue === '' || inputRegex.test(inputValue)) {
            return setGuests(inputValue);
        }
    }

    return (
        <Fragment>

            <div className="modal">
                <div data-test-id="book-trip-popup" className="book-trip-popup">
                    <button
                        data-test-id="book-trip-popup-close"
                        className="book-trip-popup__close"
                        onClick={() => {
                            setIsDisplayModal(false);
                        }}
                    >
                        ×
                    </button>
                    <form
                        className="book-trip-popup__form"
                        autoComplete="off"
                        onSubmit={handleFormSubmit}>
                        <div className="trip-info">
                            <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
                                {title}
                            </h3>
                            <div className="trip-info__content">
                                <span
                                    data-test-id="book-trip-popup-duration"
                                    className="trip-info__duration"
                                >
                                    <strong>{duration}</strong> days
                                </span>
                                <span
                                    data-test-id="book-trip-popup-level"
                                    className="trip-info__level"
                                >
                                    {level}
                                </span>
                            </div>
                        </div>
                        <label className="input">
                            <span className="input__heading">Date</span>
                            <input
                                data-test-id="book-trip-popup-date"
                                name="date"
                                type="date"
                                value={date}
                                required
                                onChange={handleDateChange}
                                min={handleDate()}
                            />
                        </label>
                        <label className="input">
                            <span className="input__heading">Number of guests</span>
                            <input
                                data-test-id="book-trip-popup-guests"
                                name="guests"
                                type="number"
                                min="1"
                                max="10"
                                value={numberOfGuests}
                                onChange={handleGuests}
                                required
                            />
                        </label>
                        <span className="book-trip-popup__total">
                            Total:
                            <output
                                data-test-id="book-trip-popup-total-value"
                                className="book-trip-popup__total-value"
                            >
                                {price * numberOfGuests}$
                            </output>
                        </span>
                        <button
                            data-test-id="book-trip-popup-submit"
                            className="button"
                            type="submit"
                        >
                            Book a trip
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}

export default BookingModal