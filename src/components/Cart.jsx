import { useContext } from "react";
import { ProjectContext } from "../store/context";
import { ACTION_TYPE } from "../store/reducer";

function CartItem({ menu }) {
  const { state, dispatch } = useContext(ProjectContext);
  const { cartList } = state;
  const { name, price, count } = menu;

  const onIncreaseCount = () => {
    const enteredItem = cartList.find((item) => item.name === name);
    enteredItem.count += 1;
    dispatch({ type: ACTION_TYPE.decrease, cartList });
  };
  const onDecreaseCount = () => {
    const enteredItem = cartList.find((item) => item.name === name);
    enteredItem.count -= 1;

    if (enteredItem.count === 0) {
      dispatch({
        type: ACTION_TYPE.decrease,
        cartList: cartList.filter((item) => item.name !== name)
      });
      return;
    }

    dispatch({ type: ACTION_TYPE.decrease, cartList });
  };

  return (
    <li className="CartItem_cart-item__dtdCk">
      <img src={menu.thumbnail} alt={name}></img>
      <div className="CartItem_meal__Ddieg">
        <h3 className="CartItem_name__ODJQY">{name}</h3>
        <span className="CartItem_price__pP54w">${price}</span>
        <span className="CartItem_amount__b0-du">×{count}</span>
      </div>
      <div className="CartItem_actions__JbqCw">
        <button onClick={onDecreaseCount}>−</button>
        <button onClick={onIncreaseCount}>+</button>
      </div>
    </li>
  );
}

function CartList() {
  const { state, dispatch } = useContext(ProjectContext);
  const { cartList } = state;

  const totalPrice = cartList.map(({price, count}) => price * count).reduce((acc, curr) => Number((acc + curr).toFixed(2)), 0);

  const onCheckut = () => {
    dispatch({ type: ACTION_TYPE.checkout });
  };

  return (
    <>
      {cartList.length === 0 ? <p className="Cart_fallback__o2PH2">There are no items in your cart.</p> : <>
        <ul>
          {cartList.map((menu, index) => <CartItem key={index} menu={menu} />)}
        </ul>
        <div className="Cart_bill__iLZDu">
          <div className="Cart_total__F-EkC">
            <span>Total Amount</span><span>${totalPrice}</span>
          </div>
          <button className="Cart_button__UnOO1" onClick={onCheckut}>Checkout</button>
        </div>
      </>}
    </>
  )
}

function Checkout() {
  return (
    <>
      <canvas width="1498" height="767" style={{zIndex: 2, position: "absolute", pointerEvents: "none", inset: '0px'}}></canvas>
      <div className="Cart_order__zYBHQ">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="Cart_icon__jWt7o" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 7c0-1.1-.9-2-2-2h-3v2h3v2.65L13.52 14H10V9H6c-2.21 0-4 1.79-4 4v3h2c0 1.66 1.34 3 3 3s3-1.34 3-3h4.48L19 10.35V7zM7 17c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"></path><path d="M5 6h5v2H5zM19 13c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
        <p className="Cart_message__qcAT3">Successfully sent the order!</p>
      </div>
    </>
  );
}

function Header() {
  const { dispatch } = useContext(ProjectContext);

  const onPrev = () => {
    dispatch({ type: ACTION_TYPE.main });
  }

  return (
    <header className="Cart_header__2VRzl">
      <button className="Cart_prev__cWSdX" onClick={onPrev}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" strokeWidth="2" points="7 2 17 12 7 22" transform="matrix(-1 0 0 1 24 0)"></polyline></svg>
      </button>
      <h2 className="Cart_title__caJvL">My<br /> Cart List</h2>
    </header>
  );
}

export default function Cart() {
  const { state } = useContext(ProjectContext);

  return (
    <section className="Cart_container__o3z+L">
      <Header />
      {state.checkouted ? <Checkout /> : <CartList />}
    </section>
  );
}