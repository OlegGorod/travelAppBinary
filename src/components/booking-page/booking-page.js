import './booking-page.css'

const BookingPage = () => {
    return (
        <main class="bookings-page">
      <h1 class="visually-hidden">Travel App</h1>
      <ul class="bookings__list">
        <li data-test-id="booking" class="booking">
          <h3 data-test-id="booking-title" class="booking__title">Iceland</h3>
          <span data-test-id="booking-guests" class="booking__guests">
            2 guests
          </span>
          <span data-test-id="booking-date" class="booking__date">
            2024-07-13
          </span>
          <span data-test-id="booking-total" class="booking__total">
            14000 $
          </span>
          <button
            data-test-id="booking-cancel"
            class="booking__cancel"
            title="Cancel booking"
          >
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
        <li data-test-id="booking" class="booking">
          <h3 data-test-id="booking-title" class="booking__title">Iceland</h3>
          <span data-test-id="booking-guests" class="booking__guests">
            2 guests
          </span>
          <span data-test-id="booking-date" class="booking__date">
            2024-09-30
          </span>
          <span data-test-id="booking-total" class="booking__total">
            14000 $
          </span>
          <button
            data-test-id="booking-cancel"
            class="booking__cancel"
            title="Cancel booking"
          >
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
        <li data-test-id="booking" class="booking">
          <h3 data-test-id="booking-title" class="booking__title">Iceland</h3>
          <span data-test-id="booking-guests" class="booking__guests">
            2 guests
          </span>
          <span data-test-id="booking-date" class="booking__date">
            2024-10-11
          </span>
          <span data-test-id="booking-total" class="booking__total">
            14000 $
          </span>
          <button
            data-test-id="booking-cancel"
            class="booking__cancel"
            title="Cancel booking"
          >
            <span class="visually-hidden">Cancel booking</span>
            ×
          </button>
        </li>
      </ul>
    </main>
    )
}

export default BookingPage