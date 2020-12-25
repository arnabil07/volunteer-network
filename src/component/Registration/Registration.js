import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Registration.css';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';


const Registration = () => {
    const {eventId} = useParams();
    const [event, setEvent] = useState({});

    useEffect( () => {
        fetch('https://stormy-sierra-88296.herokuapp.com/events/'+ eventId)
        .then(res => res.json())
        .then(data => setEvent(data))
    }, [eventId])
    
    const history = useHistory()
    const { register, handleSubmit, watch, errors } = useForm();
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)
    const onSubmit = data => {
        fetch('https://stormy-sierra-88296.herokuapp.com/register-event',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => {
            history.push('/eventItem')
        })
        console.log('submit', data)
    };
    const eventDetails = {...loggedInUser,  }
  


    return (
     <div>
         <div className="text-center">
             <img className="img-responsive w-25" src={logo} alt=""/>
         </div>
         <div  className="register-form">
         <form onSubmit={handleSubmit(onSubmit)}>
            <h4> Register as a Volunteer</h4>
            
            <input name="name" type="text" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Full Name" />
            {errors.name && <span className="error">Name is required</span>}

            <input name="email" type="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Username or Email" />
            {errors.email && <span className="error">Email is required</span>}

            <input name="date" type="date" ref={register({ required: true })} placeholder="Date" />
            {errors.date && <span className="error">Date is required</span>}

            <input name="desiceiption"  ref={register({ required: true})}  placeholder="Desicription" />
            {errors.desiceiption && <span className="error">Desiceiption is required</span>}

            <input name="event" defaultValue={event.title} ref={register({ required: true })} placeholder="Organize books at the library" />
            {errors.library && <span className="error">Library is required</span>}
      
     <button type="submit">Registration</button>
    </form>
         </div>
     </div>
    );
    // return (
    //     <div>

    //         {/* <form className="mt-3">
    //              <h4 className="ml-3 text-left mt-2" > Register as a Volunteer</h4>
    //              <input name="fullName" className="form-control m-3" required type="text" placeholder="Full Name" />
    //              <input name="email" className="form-control m-3" required type="email" placeholder="Username or Email" />
    //              <input name="date" className="form-control m-3" required type="date" placeholder="Date" />
    //              <input name="description" className="form-control m-3" required type="text" placeholder="Description" />
    //              <input name="eventName" className="form-control m-3" required type="text" placeholder="Organize books at the library." />
    //              <button type="submit" className="btn btn-primary form-control ml-3 m-3 btn-width" >Registration</button>
    //         </form> */}
    //     </div>
    // );
    
};

export default Registration;