import React, {Component} from "react/cjs/react.production.min";
import {getMovies} from "../services/fakeMovieService";

class Movie extends Component {

    state = {
        movies: []
    }

    constructor(props) {
        super(props);
        this.state.movies = getMovies();
    }

    renderTableData() {
        return this.state.movies.map((movie, index) => {
            return (
                <tr key={movie._id}>
                    <td>{movie._id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td align={"center"}>{movie.numberInStock}</td>
                    <td align={"center"}>{movie.dailyRentalRate}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        return <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Number In Stock</th>
            <th>Daily Rental Rate</th>
        </tr>
    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 id='title' style={{textAlign: 'center'}}>Movies Dynamic Table</h1>
                </div>
                <table id='movies' className="table table-hover">
                    <thead>
                    {this.renderTableHeader()}
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Movie;