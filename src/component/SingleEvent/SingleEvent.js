import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleEvent.css';

const SingleEvent = (props) => {
    const event = props.event;
    return (
        <Card style={{ width: '15rem', margin: '10px' }}>
            <Card.Img variant="top" src={event.img} />
            <Card.Body>
                <Button variant="warning"><Link to={`/registration/${event._id}`}>{event.title}</Link></Button>
            </Card.Body>
        </Card>
    );
};

export default SingleEvent;