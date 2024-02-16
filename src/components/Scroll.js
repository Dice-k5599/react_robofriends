import React from 'react';

/* 
We could wrap components with other components
But how could we use any of the props when the wrapper doesn't have any props passed?
-> we could use another React concept called "children" to access the props wrapped component
    - props.children will let you access any component wrapped by this Scroll component
        * in this case, props.children will return the CardList component
*/
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '500px' }}>
            {props.children}
        </div>
    );
};

export default Scroll;