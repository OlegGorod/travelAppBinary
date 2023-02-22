import React from "react"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";


const TripsItem = (props) => {
    const navigate = useNavigate();
    const { title, descr, level, days, price, image, id} = props
       
    return (
        <Fragment>
            <li data-test-id="trip-card" className="trip-card" onClick={() => {navigate('/trip-page/' + id)}}>
                <img
                    data-test-id="trip-card-image"
                    src={image}
                    alt="iceland"
                />
                <div className="trip-card__content">
                    <div className="trip-info">
                        <h3 data-test-id="trip-card-title" className="trip-info__title">
                            {title}
                        </h3>
                        <div className="trip-info__content">
                            <span
                                data-test-id="trip-card-duration"
                                className="trip-info__duration"
                            >
                                <strong>{days}</strong> days
                            </span>
                            <span data-test-id="trip-card-level" className="trip-info__level">
                                {level}
                            </span>
                        </div>
                    </div>
                    <div className="trip-price">
                        <span>Price</span>
                        <strong
                            data-test-id="trip-card-price-value"
                            className="trip-price__value"
                        >
                            {price} $
                        </strong>
                    </div>
                </div>
                <a data-test-id="trip-card-link" href="./trip.html" className="button">
                    Discover a trip
                </a>
            </li>
        </Fragment>
    )
}

export default TripsItem