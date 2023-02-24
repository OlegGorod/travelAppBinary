import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useState} from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import Trips from "../trips/trips";
import TripPage from "../trip-page/trip-page";
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";
import BookingPage from "../booking-page/booking-page";
import tripsListData from "../../helpers/trips.json";

import './app.css';

const App = () => {
    const [tripsList, ] = useState(tripsListData);
    const [bookedTrips, setBookedTrips] = useState([]);
    const bookTrip = (tripId, {numberOfGuests, date}) => {
        const newTrip = tripsList.find(item => item.id === tripId);
        setBookedTrips(prev => [...prev, {...newTrip, numberOfGuests, date}]);
    };
    const cancelBooking = (tripId) => {
        const newTripsList = bookedTrips.filter(item => item.id !== tripId);
        setBookedTrips(newTripsList);
    };
    return (
        <div className="app">
            <Router>
                <Header/>
                <main className="page-container">
                    <Routes>
                        <Route path="/" element={ <Trips tripsList={tripsList} /> } />
                        <Route
                            path="/trip/:id"
                            element={
                                <TripPage
                                    tripsList={tripsList}
                                    bookTrip={bookTrip}
                                    bookedTrips={bookedTrips}
                                />
                            }
                        />
                        <Route path="/sign-in" element={<SignIn/>} />
                        <Route path="/sign-up" element={<SignUp/>} />
                        <Route
                            path="/bookings"
                            element={
                                <BookingPage
                                    bookedTrips={bookedTrips}
                                    cancelBooking={cancelBooking}
                                />
                            }
                        />
                    </Routes>
                    <Footer/>
                </main>
            </Router>
        </div>
    );
}

export default App;