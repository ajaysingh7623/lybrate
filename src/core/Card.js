import React, { useState, useEffect } from 'react';





const Card = ({product}) => {

    return (
        <div className="card ">
        <div className="card-header card-header-1 ">{product.email}</div>
        <div className="card-body">  <div className="product-img">
            <img src={product.avatar} alt="product.first_name" className="mb-3"
            style={{ maxHeight: "100%", maxWidth: "100%" }}/>
            </div>
        
        
        <p className="card-p black-10"> {product.first_name}</p>
          <p className="card-p black-10">{product.last_name}</p>
         </div>
         </div>
        
          
    );
  

};

export default Card;


