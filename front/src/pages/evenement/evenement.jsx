import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Evenement = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8001/api/evenements?page=1');
                setEvents(response.data['hydra:member']); // Assure-toi que c'est le bon chemin pour accéder aux événements
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="container mt-5">
            <h1 className="mb-3">Événements à venir</h1>
            <div className="row">
                {events.map(event => (
                    <div key={event.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{event.title}</h5>
                                <p className="card-text">{event.description}</p>
                                <p className="card-text"><small>Date: {new Date(event.date).toLocaleDateString()}</small></p>
                                <a href="#" className="btn btn-primary">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Evenement;
