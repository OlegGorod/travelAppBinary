import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Component } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import TripsFilter from "../trips-filter/trips-filter";
import Trips from "../trips/trips";
import TripsItemDisplay from "../trips-item-display/trips-item-display";

import './app.css'


class App extends Component {

    render() {
        return (
            <div className="app">
                <Router>
                    <Header />
                    <main>

                        <TripsFilter />
                        <Trips />
                        <Routes>
                            <Route path="/trip-page/:id" element={<TripsItemDisplay />}></Route>
                        </Routes>
                    </main>
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;