import React from 'react';

class ItemsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    
    navigate = () => {
        this.props.history.push(`/item/${this.state.input}`); //todo: change it to dynamic value
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.input}/>
                <button onClick={this.navigate}>go to Item</button>
            </div>
        )
    }
}

export default ItemsComponent;
