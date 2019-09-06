import React from 'react';

class CartComponent extends React.Component {

    componentWillUnmount() {
        alert('component will unmount cart');
    }

    render() {
        return (
            <div>This is cart component</div>
        )
    }
}

export default CartComponent;
