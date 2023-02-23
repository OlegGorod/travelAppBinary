import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import Trips from "../trips/trips";
import TripsItemDisplay from "../trips-item-display/trips-item-display";
import BookingModal from "../booking-modal/booking-modal";
import SignIn from "../sign-in/sign-in";

import './app.css'

const tripsList = require('../../helpers/trips.json');


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tripsList,
            temporary: '',
            filter: ''
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
        const { tripsList, temporary } = this.state;
        const searchTrip = this.onSearch(tripsList, temporary);

        return (
            <div className="app">
                <Router>
                    <main>
                        <Header />

                        <Routes>
                            <Route
                                path="/"
                                element={<Trips data={searchTrip}
                                changeState={this.changeState} />}>
                            </Route>
                            <Route path="/trip/:id" element={<TripsItemDisplay />}></Route>
                            <Route element={<BookingModal />}></Route>
                            <Route path="/sign-in" element={<SignIn />}></Route>
                        </Routes>
                        <Footer />
                    </main>
                </Router>
            </div>
        );
    }
}

export default App;