import React, {Component} from "react/cjs/react.production.min";

class Home extends Component {
    state = {
        count: 0,
        message: 'Hello Java'
    };

    render() {
        return (
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Click Me!</button>
            </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }
}

export default Home;
