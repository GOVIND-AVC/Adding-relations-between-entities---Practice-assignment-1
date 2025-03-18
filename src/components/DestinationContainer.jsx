import React from "react";

import { useState,useEffect } from "react";
import DestinationCard from "./DestinationCard";


const Destinationcontainer=()=>{
    const destinations = [
        {
          id: 1,
          name: "Bali",
          location: "Indonesia",
          description: "A tropical paradise with beautiful beaches and vibrant culture.",
          price: "$1000",
          imageUrl: "https://via.placeholder.com/150"
        },
        {
          id: 2,
          name: "Paris",
          location: "France",
          description: "The city of lights, full of art, history, and amazing food.",
          price: "$1200",
          imageUrl: "https://via.placeholder.com/150"
        },
        {
          id: 3,
          name: "Tokyo",
          location: "Japan",
          description: "A modern metropolis with ancient traditions and amazing technology.",
          price: "$1500",
          imageUrl: "https://via.placeholder.com/150"
        },
        // Add more destinations as needed
      ];



      return(
        <div>
            <h1>DESTINATIONS</h1>
            <div>
                {destinations.map((destination)=>{
                    <DestinationCard
                    key={destination.id}
                    name={destination.name}
                    location={destination.location}
                    price={destination.price}
                    imageUrl={destination.image}
                    />
                })}
            </div>
        </div>
      )

}

export default Destinationcontainer;