import React from 'react';

class ItemComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.match.params.id);
    }

    componentWillUnmount() {
        localStorage.clear();
    }

    render() {
        return (
            <div>This is Item component</div>
        )
    }
}

export default ItemComponent;
