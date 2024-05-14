import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function EvenementCard({ data }) {
    const [event, setevent] = useState(null);
    const [dates, setDates] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/evenements/${data}`);
                setevent(response.data);
                setLoading(false);
                const dates = response.data.dates;
                console.log("debut",response.data.dates,"fin")

                const datePromises = dates.map(date => axios.get(`http://127.0.0.1:8000${date}`));
                const dateResponses = await Promise.all(datePromises);
                const newDates = dateResponses.map(response => response.data);
                setDates(newDates);

            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    console.log(dates)
    return (
        <div>
            { event &&
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{event.nom}</h5>
                        <p className="card-text">{event.description}</p>
                        { dates &&
                            <p className="card-text">
                                {dates.map(date => (
                                    <div>{date.date}</div>
                                ))}
                            </p>
                        }
                        <a href="#" className="btn btn-primary">En savoir plus</a>
                    </div>
                </div>
            }
        </div>
    );
}