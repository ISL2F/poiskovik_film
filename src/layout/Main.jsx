import React from "react";
import { Preloader } from "../components/Preloader";

import { Movielist } from "../components/Movielist";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    category: "",
    loading: true,
  };
  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=avengers`).then(
      (response) =>
        response
          .json()
          .then((data) =>
            this.setState({ movies: data.Search, loading: false })
          )
    );
  }
  categoryChanger = (e) => {
    this.setState({ category: e.target.id });
  };
  searchMovies = (str) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&${this.state.category}`
    ).then((response) =>
      response
        .json()
        .then((data) => this.setState({ movies: data.Search, loading: false }))
    );
  };
  render() {
    const { movies, loading } = this.state;
    return (
      <div className=" content _container">
        <Search searchMovies={this.searchMovies} />
        <form className="radioForm" action="#">
          <p onClick={this.categoryChanger}>
            <label>
              <input id="" name="group1" type="radio" defaultChecked />
              <span>all</span>
            </label>
          </p>
          <p onClick={this.categoryChanger}>
            <label>
              <input id="type=movie" name="group1" type="radio" />
              <span>Movies only</span>
            </label>
          </p>
          <p onClick={this.categoryChanger}>
            <label>
              <input id="type=series" name="group1" type="radio" />
              <span>Series only</span>
            </label>
          </p>
        </form>

        {loading ? <Preloader /> : <Movielist movies={movies} />}
      </div>
    );
  }
}

export { Main };
