import React from 'react';

const SingleItem = (props) => {
    const { item, handleDelete } = props;
    return (
        
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6 m-2 p-2">
                        <img className="img w-50" src="https://i.ibb.co/nkdkJfF/extra-Volunteer.png" alt="event-img" />
                    </div>
                    <div className="col-md-6 m-2 p-2">
                        <h4>{item.name}</h4>
                        <h6>{(new Date(item.date).toDateString('dd/MM/yyyy'))}</h6>
                        <button onClick={() => handleDelete(`${item._id}`)} className="btn btn-danger">Cancel</button>
                    </div>
                </div>
            </div>
     
    );
};

export default SingleItem;