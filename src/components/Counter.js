import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 1 }

   this.increment = this.increment.bind(this)
   this.decrement = this.decrement.bind(this)
}

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }})
    };

    decrement() {
        this.setState({ count: this.state.count -1})
    };

    render() {
        return (
        <div><h6>aantal: </h6>
            <button className="buttonsPlusMin" onClick={this.increment}>+</button>
            <button className="buttonsPlusMin" onClick={this.decrement}>-</button>
            {this.state.count}
        </div>
        )};
}


export default Counter