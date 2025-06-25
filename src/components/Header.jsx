import { useContext } from "react";
import { ProjectContext } from "../store/context";
import { ACTION_TYPE } from "../store/reducer";

export default function Header() {
  const { state, dispatch } = useContext(ProjectContext);

  const onShowCart = () => {
    dispatch({ type: ACTION_TYPE.cart });
  }
  
  return (
    <header className="Header_header__HXQOm">
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="Header_logo__UsziS" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 6.5C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zM4.285 9.567a.5.5 0 0 0-.183.683A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75.5.5 0 0 0-.683-.183zm5.152-3.31a.5.5 0 0 0-.874.486c.33.595.958 1.007 1.687 1.007.73 0 1.356-.412 1.687-1.007a.5.5 0 0 0-.874-.486.934.934 0 0 1-.813.493.934.934 0 0 1-.813-.493z"></path>
      </svg>
      <div className="Header_text__4jGdp">
        <h1 className="Header_title__x3ga3">DoorWink</h1>
        <p className="Header_subtitle__4RLMY">Home Delivery Service</p>
      </div>
      <button className="HeaderCartButton_button__XCt9Y" onClick={onShowCart}>
        <span className="HeaderCartButton_icon__T1Onk">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </span>
        <span className="HeaderCartButton_badge__X8Gfi">{state.cartList.map(({count}) => count).reduce((acc, curr) => acc + curr, 0)}</span>
      </button>
    </header>
  );
}