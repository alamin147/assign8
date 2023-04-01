import React, { useEffect, useState } from "react";
import Single from "./Single";
import Cart from "../cart/Cart";




const Card = (props) => {
  const [informations, setInformation] = useState([]);
  


  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setInformation(data));
  }, []);


  const [cart, setCard] = useState([]);
  const addToCart = (props) => {
    const newCart = [...cart, props];
    setCard(newCart); 
  };



 
console.log("info",informations)
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            {informations.map((information) => {
              return (
                <><Single
                key={information.id}
                info={information}
                addToCart={addToCart}
              ></Single>
              </>
              );
            })}
          </div>
          <div className="col-4">
            <div className="">
              <p className="mt-5 mb-4">Spent Time on read:{props.totalTime}</p>
            </div>
            <div>
              <p>Bookmarked Blogs: {cart.length}</p>
              <Cart cart={cart}></Cart>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Card;
