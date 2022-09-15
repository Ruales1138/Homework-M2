import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, cleanDetail } from "../../actions/index";

import "./Movie.css";

const Movie = (props) => {
  const movieId = props.match.params.id;
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movieDetail);

  useEffect(() => {
    dispatch(getMovieDetail(movieId));

    return function () {
      dispatch(cleanDetail());
    };
  }, [dispatch, movieId]);

  return movieDetail["Title"] ? (
    <div className="movie-detail">
      <h4>{movieDetail.Title}</h4>
      <p>{movieDetail.Year}</p>
      <img src={movieDetail.Poster} alt="icon"></img>
      <p>{movieDetail.Plot}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Movie;