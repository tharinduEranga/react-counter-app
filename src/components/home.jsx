import React, {Component} from "react/cjs/react.production.min";

class Home extends Component {
    state = {
        count: 0,
        message: 'Hello Java',
        tags: [{id: 1, name: 'Tag1'}, {id: 2, name: 'Tag2'}, {id: 3, name: 'Tag3'}, {id: 4, name: 'Tag4'}]
    };

    constructor() {
        super();
        this.buttonClick = this.buttonClick.bind(this); // this is not necessary if buttonClick is called in a lambda.
    }

    render() {
        return (
            <div>
                <span className="badge badge-primary m-2">
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary" onClick={event => this.buttonClick(event)}>Click Me!</button>
                {this.getTagsList()}
            </div>
        );
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? <h1>Zero</h1> : count;
    }

    getTagsList() {
        const tags = this.state.tags;
        return (tags && tags.length > 0) ? <ul>{tags.map(tag => <li key={tag.id}> {tag.name} </li>)}</ul> : 'No tags!';
    }

    buttonClick(event) {
        console.log(this.state);
        console.log(event);
    }
}

export default Home;
