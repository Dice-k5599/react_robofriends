import React from 'react';

const Card = ({ name, email, id, number, picture }) => {
    return (
        <div className='tc bg-purple ba b--yellow bw3 dib br3 pa1 ma2 grow bw2 shadow-5'>
            {/* <img alt='robots' src={`https://robohash.org/${id}?200x200`}/> */}
            <img alt='robots' src={picture} className="bg-white ma2 br3"/>
            <div className='white'>
                <h2>{name}</h2>
                <h2>#{number}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;