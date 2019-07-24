import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api from '../../../Services/api';

export default class FilmPage extends Component {
  static propTypes = {
    currentMovieID: PropTypes.string.isRequired,
  };

  state = {
    Title: '',
    Plot: '',
    Awards: '',
    imdbRating: '',
    imdbVotes: '',
    Actors: '',
    Country: '',
    Genre: '',
    Runtime: '',
  };

  // ​componentDidMount() {
  //   const { currentMovieID } = this.props;
  //   console.log('cuurentMovieID=', currentMovieID);
  //   console.log('api=', api);
  //   api.getMovie(currentMovieID).then(data => {
  //     console.log('data=', data);
  //   });
  // }
  componentDidMount() {
    const { currentMovieID } = this.props;
    console.log('cuurentMovieID=', currentMovieID);
  }

  render() {
    const { currentMovieID } = this.props;
    return (
      <div>
        <p>Movie page</p>
        <p>{currentMovieID}</p>
        <div className="container">
          <div className="card-page">
            <div className="image-wrapper">
              <img
                className="card-image"
                src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTcxMzIzNTk5OV5BMl5BanBnXkFtZTgwMjUwMDA5NzE@._V1_SX300.jpg"
              />
            </div>
            <div className="card-info">
              <h2 className="cardPage-title">
                Polam Pol<span className="card-year">2016</span>
              </h2>
              <p className="desc">
                Two struggling actors get a chance to work on a movie project.
              </p>
              <ul className="card-info__list">
                <li className="info-key">
                  Awards: <span className="key-value">Нет данных.</span>
                </li>
                <li className="info-key">
                  Rating: <span className="key-value">6.7/10</span>
                </li>
                <li className="info-key">
                  <span className="key-value">
                    <span className="votes">59 votes</span>
                  </span>
                </li>
                <li className="info-key">
                  Actors:{' '}
                  <span className="key-value">
                    Jinal Belani, Prem Gadhavi, Jayesh More, Ojas Rawal
                  </span>
                </li>
                <li className="info-key">
                  Country: <span className="key-value">India</span>
                </li>
                <li className="info-key">
                  Genre: <span className="key-value">Comedy</span>
                </li>
                <li className="info-key">
                  Runtime: <span className="key-value">145 min</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <button className="button" type="button">
          Add to favorites
        </button>
      </div>
    );
  }
}

/*
Actors: "Iron Maiden, Vinny Appice, Pat Cash, Bruce Dickinson"
​
Awards: "N/A"
​
BoxOffice: "N/A"
​
Country: "UK, Canada"
​
DVD: "N/A"
​
Director: "Sam Dunn, Scot McFadyen"
​
Genre: "Documentary, Music"
​
Language: "English"
​
Metascore: "N/A"
​
Plot: "A chronological account of the heavy metal band Iron Maiden's 2008 world tour through India, Australia, Japan, USA, Canada, Mexico and South America in a jet piloted by the band's front man, Bruce Dickinson. Features interviews with the musicians, their road crew and fans."
​
Poster: "https://m.media-amazon.com/images/M/MV5BMTMyNzQyNTUwNV5BMl5BanBnXkFtZTcwOTg0ODQ2Mg@@._V1_SX300.jpg"
​
Production: "N/A"
​
Rated: "N/A"
​
Ratings: (1) […]
​​
0: Object { Source: "Internet Movie Database", Value: "8.4/10" }
​​
length: 1
​​
<prototype>: Array []
​
Released: "21 Apr 2009"
​
Response: "True"
​
Runtime: "112 min"
​
Title: "Iron Maiden: Flight 666"
​
Type: "movie"
​
Website: "N/A"
​
Writer: "Sam Dunn, Scot McFadyen"
​
Year: "2009"
​
imdbID: "tt1361558"
​
imdbRating: "8.4"
​
imdbVotes: "4,936"

*/
