import React, { useEffect, useState } from "react";
import "./Card.scss";
import axios from "axios";

const IndividualMovieCard = ({ image, alternate = "card-image" }) => {
  console.log(image);
  return <img className="indi-cards" src={image} alt={alternate} />;
};

const Row = ({ title, arr }) => (
  <>
    <h2>{title}</h2>
    <div className="cards">
      {arr.map((movie) => (
        <IndividualMovieCard
          key={movie.id}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      ))}
    </div>
  </>
);

const Card = () => {
  const api_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMGY5N2I2MmUxMWZmNTgzYTE4MzEwNGEyOTIwN2Q4OCIsInN1YiI6IjY1OTAwZDNmZTAwNGE2NmQ2MzE3MTdiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vvgwGzdP8ehQEXBOtcVjzkjfhDn7oa8yCN_UqjEciiE";

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/`,
    params: {
      language: "en-US",
      page: 1,
      api_key,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${api_key}`,
    },
  };

  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    const fetchMovies = async (category) => {
      try {
        const response = await axios.request({
          ...options,
          url: `${options.url}${category}`,
        });

        switch (category) {
          case "popular":
            setPopular(response.data.results);
            break;
          case "top_rated":
            setTopRated(response.data.results);
            break;
          case "now_playing":
            setNowPlaying(response.data.results);
            break;
          case "upcoming":
            setUpcoming(response.data.results);
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(`Error fetching ${category} movies:`, error);
      }
    };

    fetchMovies("popular");
    fetchMovies("top_rated");
    fetchMovies("now_playing");
    fetchMovies("upcoming");
  }, []);

  return (
    <div className="genre-container">
      <Row title={"Popular"} arr={popular} />
      <Row title={"Top Rated"} arr={topRated} />
      <Row title={"Now Playing"} arr={nowPlaying} />
      <Row title={"Upcoming"} arr={upcoming} />
    </div>
  );
};

export default Card;

