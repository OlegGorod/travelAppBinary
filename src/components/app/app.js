import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from "react";

import Footer from "../footer/footer";
import Header from "../header/header";
import Trips from "../trips/trips";
import TripsItemDisplay from "../trips-item-display/trips-item-display";

import './app.css'


class App extends Component {

    render() {
        return (
            <div className="app">
                <Router>
                    <main className='page-container'>
                        <Header />
                        <Routes>
                            <Route exact path="/" element={<Trips />} />
                            <Route exact path="/trip-page/:id" element={<TripsItemDisplay />} />
                        </Routes>
                        <Footer />
                    </main>
                </Router>
            </div>
        );
    }
}

export default App;