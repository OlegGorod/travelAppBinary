import React, {useEffect, useState} from 'react';
import {Fragment} from 'react';
import TripsFilter from '../trips-filter/trips-filter';
import TripsItem from '../trips-item/trips-item';

import './trips.css'
import tripsListData from "../../helpers/trips.json";

const Trips = ({tripsList}) => {
    const [tripsFiltered, setTripsFiltered] = useState(tripsListData);
    const [filterValue, setFilterValue] = useState('');
    const onSearch = (data, temp) => {
        setTripsFiltered(tripsListData.filter(item => {
            return item.title.toLowerCase().includes(temp.toLowerCase());
        }))
    };

    const changeState = (temporary) => {
        setFilterValue(temporary)
    };

    useEffect(() => {
        onSearch(tripsList, filterValue);
    }, [filterValue, tripsList]);
    return (
        <Fragment>
            <TripsFilter changeState={changeState}/>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {tripsFiltered.map((item, idx) => {
                        return (
                            <TripsItem
                                title={item.title}
                                descr={item.description}
                                level={item.level}
                                days={item.duration}
                                price={item.price}
                                image={item.image}
                                key={item.id}
                                id={item.id}/>
                        )
                    })}
                </ul>
            </section>
        </Fragment>
    )
}

export default Trips