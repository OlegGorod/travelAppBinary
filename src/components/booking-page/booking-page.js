import './booking-page.css'

const BookingPage = ({bookedTrips, cancelBooking}) => {
    return (
        <main className="bookings-page">
            <h1 className="visually-hidden">Travel App</h1>
            <ul className="bookings__list">
                {
                    bookedTrips.length ?
                        bookedTrips.map(trip => {
                            return <li data-test-id="booking" className="booking" key={trip.id}>
                                <h3 data-test-id="booking-title" className="booking__title">Iceland</h3>
                                <span data-test-id="booking-guests" className="booking__guests">
                                    {trip.numberOfGuests} guests
                                  </span>
                                <span data-test-id="booking-date" className="booking__date">
                                    {trip.date}
                                </span>
                                <span data-test-id="booking-total" className="booking__total">
                                    {trip.price * trip.numberOfGuests} $
                                  </span>
                                <button
                                    data-test-id="booking-cancel"
                                    className="booking__cancel"
                                    title="Cancel booking"
                                    onClick={() => cancelBooking(trip.id)}
                                >
                                    <span className="visually-hidden">Cancel booking</span>
                                    ×
                                </button>
                            </li>
                        }) :
                        <div>there are no booked trips yet</div>
                }
            </ul>
        </main>
    )
}

export default BookingPage