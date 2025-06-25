import { useContext } from "react";
import doorWinkMenuList from "../store/doorWinkMenuList";
import { ProjectContext } from "../store/context";
import { ACTION_TYPE } from "../store/reducer";

function MenuItem({ menu }) {
  const { state, dispatch } = useContext(ProjectContext);
  const { cartList } = state;
  const { name, price, comment, thumbnail } = menu;

  const onSelect = () => {
    const newCartList = [...cartList];
    const enteredItem = newCartList.find(((item) => item.name === name));

    if (enteredItem) enteredItem.count += 1;
    else {
      menu.count += 1;
      newCartList.push(menu);
    }

    dispatch({
      type: ACTION_TYPE.select,
      cartList: newCartList
    });
  }

  return (
    <li className="MealItem_item__oCeCW">
      <img src={thumbnail} alt={name}></img>
      <div className="MealItem_meal__df5TJ">
        <h3 className="MealItem_name__6qVan">{name}</h3>
        <p className="MealItem_desc__GC7WY">{comment}</p>
        <span className="MealItem_price__L4q5n">${price}</span>
      </div>
      <button className="MealItem_button__3QRWH" onClick={onSelect}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
      </button>
    </li>
  );
}

export default function Menu() {
  const list = [...doorWinkMenuList];
  return (
    <>
      <h2 className="Meals_title__LBLrC">Menu</h2>
      <ul>
        {list.map((menu) => <MenuItem key={menu.index} menu={menu} />)}
      </ul>
    </>
  );
}