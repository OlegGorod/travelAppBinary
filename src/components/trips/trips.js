import React from 'react';
import {Fragment} from 'react';
import TripsFilter from '../trips-filter/trips-filter';
import TripsItem from '../trips-item/trips-item';

import './trips.css'

const Trips = (props) => {
    const {data} = props
    return (
        <Fragment>
            <TripsFilter changeState={props.changeState}/>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {data.map((item, idx) => {
                        return (
                            <TripsItem
                                title={item.title}
                                descr={item.description}
                                level={item.level}
                                days={item.duration}
                                price={item.price}
                                image={item.image}
                                key={item.id}
                                id={idx}/>
                        )
                    })}
                </ul>
            </section>
        </Fragment>
    )
}

export default Trips