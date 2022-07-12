import { useContext, useState } from "react";
import "./dogs.css";
import { CartContext } from "../../Contexts/CardContexts";

const DogsCard = (props) => {
  const [isAdded, setAdded] = useState(false);
  const { addToCart, setTotal } = useContext(CartContext);

  const { name, imageUrl, desc, breed, price } = props;
  const handleClick = () => {
    setAdded(true);
    const newItems = {
      name,
      price,
      imageUrl,
    };
    addToCart((prev) => [...prev, newItems]);
    setTotal((total) => (total += price * 1));
  };

  const handleRemoveDisable = () => {
    setAdded(false);
  }

  return (
    <>
      <section className="dogs">
        <div className="dogs-info">
          <p>{name}</p>
          <p>{breed}</p>
        </div>
        <div className="dogs-img-container">
          <img src={imageUrl} alt={`Picture of: ${name}`} className="dog-img" />
        </div>
        <div className="dogs-desc">{desc}</div>
        <div className="dogs-price">{price}$</div>
        {isAdded ? (
          <button className="dogs-btn-disabled" onClick={handleRemoveDisable}>
            ADDED
          </button>
        ) : (
          <button className="dogs-btn" onClick={handleClick}>
            ADD TO CART
          </button>
        )}
      </section>
    </>
  );
};

export default DogsCard;
