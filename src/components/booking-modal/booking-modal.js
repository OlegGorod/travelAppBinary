import React from "react"
import { Fragment } from "react"


import './booking-modal.css'

const BookingModal = () => {
    return (
        <Fragment>

            <div class="modal">
                <div data-test-id="book-trip-popup" class="book-trip-popup">
                    <button
                        data-test-id="book-trip-popup-close"
                        class="book-trip-popup__close"
                    >
                        ×
                    </button>
                    <form class="book-trip-popup__form" autocomplete="off">
                        <div class="trip-info">
                            <h3 data-test-id="book-trip-popup-title" class="trip-info__title">
                                Iceland
                            </h3>
                            <div class="trip-info__content">
                                <span
                                    data-test-id="book-trip-popup-duration"
                                    class="trip-info__duration"
                                >
                                    <strong>15</strong> days
                                </span>
                                <span
                                    data-test-id="book-trip-popup-level"
                                    class="trip-info__level"
                                >
                                    easy
                                </span>
                            </div>
                        </div>
                        <label class="input">
                            <span class="input__heading">Date</span>
                            <input
                                data-test-id="book-trip-popup-date"
                                name="date"
                                type="date"
                                required
                            />
                        </label>
                        <label class="input">
                            <span class="input__heading">Number of guests</span>
                            <input
                                data-test-id="book-trip-popup-guests"
                                name="guests"
                                type="number"
                                min="1"
                                max="10"
                                value="1"
                                required
                            />
                        </label>
                        <span class="book-trip-popup__total">
                            Total:
                            <output
                                data-test-id="book-trip-popup-total-value"
                                class="book-trip-popup__total-value"
                            >
                                4000$
                            </output>
                        </span>
                        <button
                            data-test-id="book-trip-popup-submit"
                            class="button"
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