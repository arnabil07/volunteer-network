import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Head from '../Head/Head';
import SingleEvent from '../SingleEvent/SingleEvent';

const Home = () => {
const [event, setEvent] = useState([]);

useEffect(() =>{
    fetch('https://stormy-sierra-88296.herokuapp.com/events')
    .then(res => res.json())
    .then(data => setEvent(data))
}, [])

    return (
        <main>
         <Head></Head>
        <div className="container mt-5 text-center">
            <h3><strong>I GROW BY HELPING PEOPLE IN NEED.</strong></h3>
            <form class="form-inline d-flex justify-content-center mt-4">
                <input class="form-control mr-sm-2 w-25" type="search" placeholder="Search..." aria-label="Search" />
                <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          <Row>
          {
              event.map(ev => <SingleEvent event={ev}></SingleEvent>)
          }
          </Row>
        </div>

    </main>
    );
};

export default Home;