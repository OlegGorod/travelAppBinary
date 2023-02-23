import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import Trips from "../trips/trips";
import TripPage from "../trip-page/trip-page";
import SignIn from "../sign-in/sign-in";
import SignUp from "../sign-up/sign-up";
import BookingPage from "../booking-page/booking-page";

import './app.css'

const tripsList = require('../../helpers/trips.json');


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tripsList,
            temporary: '',
            filter: '',
            bookedTrips: [],
        }

    }

    onSearch = (data, temp) => {
        if (temp.length === 0) {
            return data;
        }
        return data.filter(item => {
            const itemLowerCase = item.title.toLowerCase();
            const tempLowerCase = temp.toLowerCase();
            return itemLowerCase.indexOf(tempLowerCase) > -1
        })
    }

    changeState = (temporary) => {
        this.setState({ temporary })
    }

    render() {
        const { tripsList, temporary, bookedTrips } = this.state;
        const searchTrip = this.onSearch(tripsList, temporary);

        return (
            <div className="app">
                <Router>
                    <Header />
                    <main className="page-container">
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <Trips
                                        data={searchTrip}
                                        changeState={this.changeState}
                                        bookedTrips={bookedTrips}
                                    />
                                }>
                            </Route>
                            <Route
                                path="/trip/:id"
                                element={<TripPage setBookedTrips={(newTrips) => this.setState({
                                    bookedTrips: [...this.state.bookedTrips, newTrips]
                                })} />}></Route>
                            <Route path="/sign-in" element={<SignIn />}></Route>
                            <Route path="/sign-up" element={<SignUp />}></Route>
                            <Route path="/bookings" element={<BookingPage />}></Route>
                        </Routes>
                        <Footer />
                    </main>
                </Router>
            </div>
        );
    }
}

export default App;