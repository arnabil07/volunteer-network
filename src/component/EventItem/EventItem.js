import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Head from '../Head/Head';
import './EventItem.css'
import SingleItem from './SingleItem';

const EventItem = () => {
    const [eventData, setEventData] = useState([])
    const { loggedInUser } = useContext(UserContext)
    const [isDeleted, setIsDeleted] = useState(false);


    useEffect(() => {
        fetch(`https://stormy-sierra-88296.herokuapp.com/data?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setEventData(data);
                setIsDeleted(false);
            })
    }, [loggedInUser.email,isDeleted])

    const handleDelete = (id) => {
        fetch(`https://stormy-sierra-88296.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then((result => {
                if (result) {
                    setIsDeleted(true);
                }
            }));
    }

    return (
        <div className="container">
        <Head></Head>
            {
                loggedInUser.email ?
                    <div className="row text-center">
                        
                        {
                            eventData.map(data => <SingleItem item={data} handleDelete={handleDelete}></SingleItem>)
                        }
                    </div>
                    :
                    <h1>Not Found</h1>
            }
        </div>
    )
};

export default EventItem;