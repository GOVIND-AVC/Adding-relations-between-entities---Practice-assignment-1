import React from "react";

import { useState,useEffect } from "react";

const DestinationCard=({ name, location, description, price, imageUrl})=>{

    return(
        <div>
            <img src={imageUrl} alt="" />
            <h2 className="destination-name">{name}</h2>
            <p className="destination-location">{location}</p>
            <p className="destination-description">{description}</p>
            <p className="destination-price">{price}</p>
        </div>
    )
    
}

export default  DestinationCard;