import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    // change this false to true to test ErrorBoundary feature
    //  - it's like a try catch block but in react
    if (false) {
        throw new Error('Noooooo');
    }
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        picture={robots[i].picture}
                        name={robots[i].name} 
                        number={robots[i].number}
                        email={robots[i].email}
                        />
                    );
             })
            }
        </div>
    );
}

export default CardList;