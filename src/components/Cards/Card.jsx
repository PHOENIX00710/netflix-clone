import React from "react";
import "./Card.scss";

const IndividualMovieCard = ({ image, alternate = "card-image" }) => {
  return <img src={image} alt={alternate} />;
};

const cards = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwEmDf23gjSBQJqZpNN63vBq9kXgzj2yF-w&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwEmDf23gjSBQJqZpNN63vBq9kXgzj2yF-w&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwEmDf23gjSBQJqZpNN63vBq9kXgzj2yF-w&usqp=CAU",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwEmDf23gjSBQJqZpNN63vBq9kXgzj2yF-w&usqp=CAU",
  },
];

const Card = () => {
  return (
    <div className="genre-container">
      <h2>Top Movies</h2>
      <div className="cards">
        {
            cards.map((item)=>{
                <IndividualMovieCard image={item.image} />
            })
        }
      </div>
    </div>
  );
};

export default Card;
