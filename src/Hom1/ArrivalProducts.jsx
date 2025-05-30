import React, { useState } from "react";
import Card from "./cards";

import img1 from "../assets/imgs/product-img10.png"
import img2 from "../assets/imgs/product-img11.png"
import img3 from "../assets/imgs/product-img9.png"
import img4 from "../assets/imgs/product-img4.png"
import img5 from "../assets/imgs/product-img4.png"
import img6 from "../assets/imgs/product-img4.png"
import img7 from "../assets/imgs/product-img4.png"
import img8 from "../assets/imgs/product-img4.png"
const CardList = () => {
  const [filter, setFilter] = useState("all");

  const cardData = [
    { id: 1, img: img1, category: "cat1" },
    { id: 2, img: img2, category: "cat1" },
    { id: 3, img: img3, category: "cat1" },
    { id: 4, img: img4, category: "cat1" },
    { id: 5, img:img5,   category: "cat1" },
    { id: 6, img: img6, category: "cat2" },
    { id: 7, img: img7, category: "cat2" },
    { id: 8, img: img8, category: "cat2" },
    
  ];

  const filteredCards =
    filter === "all"
      ? cardData
      : cardData.filter((card) => card.category === filter);

  return (
    <>
    <div className="container d-flex justify-content-center fw-bold ">
        <h1>New Arrival Products</h1>
       </div>
    <div className="container mb-5 cont-bg ">
        <div className="row">
      <div className=" filterButtons mb-4 d-flex justify-content-center gap-2">
        <button
          className="btn btn-primary me-2"
          onClick={() => setFilter("all")}
        >
          All Item
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => setFilter("cat1")}
        >
          WordPress
        </button>
        <button
          className="btn btn-primary me-2"
          onClick={() => setFilter("cat1")}
        >
         Php
        </button>
        <button
          className="btn btn-primary"
          onClick={() => setFilter("cat1")}
        >
          Site Template
        </button>
         <button
          className="btn btn-primary"
          onClick={() => setFilter("all")}
        >
          Blogging
        </button>
         <button
          className="btn btn-primary"
          onClick={() => setFilter("cat1")}
        >
          Marketing
        </button>

          <button
          className="btn btn-primary"
          onClick={() => setFilter("all")}
        >
          Plugins
        </button>
      </div>
</div>

        <div className="row g-4 ">
        {filteredCards.map((card) => (
          <div key={card.id}  className="col-md-3 col-lg-3">
            <Card img={card.img}   />
          </div>
          
        ))}
      </div>
    </div>
</>
  );
};

export default CardList;