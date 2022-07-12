import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../Contexts/CardContexts";
import "./cart.css";

const Cart = () => {
  const { myCart, total, addToCart, setTotal } = useContext(CartContext);
  const [isPaid, setPaid] = useState(false);
  const navigate = useNavigate();

  //   const total = myCart.reduce((sum, item) => sum + +item.price, 0);
  //   console.log(total);

  const handleClickPay = () => {
    addToCart([]);
    setPaid(true);
    setTotal(0);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="cart-container">
        <div className="cart-header">CHECKOUT </div>
        {myCart.length === 0 ? (
          isPaid ? (
            <div className="cart-thanks">Thanks for your purchase 💖</div>
          ) : (
            <div className="cart-not-buy">
              🤔You haven't chosen any dogs yet🤔
            </div>
          )
        ) : (
          <div className="cart-items">
            {myCart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.imageUrl} alt={item.name} className="item-img" />
                {item.name} : {item.price}$
              </div>
            ))}
            <div className="cart-total">Total: {total}$</div>
          </div>
        )}

        {myCart.length === 0 ? (
          <></>
        ) : (
          <div className="cart-payment" onClick={handleClickPay}>
            <button>PAY</button>
          </div>
        )}
        <div className="cart-back-home" onClick={handleHome}>
          <button>RETURN HOME</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
