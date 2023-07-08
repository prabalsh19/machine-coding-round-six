/* eslint-disable react/prop-types */
import "./MenuList.css";
export const MenuList = ({ menu, restaurantName }) => {
  return (
    <div className="menu-list">
      {menu.map(({ name, imgSrc, price, qty }, index) => (
        <div key={index} className="dish-card">
          <img src={imgSrc} alt="" />
          <div className="details">
            <b>{name}</b>
            <p>
              Rs. {price} for {qty}
            </p>
            <p>{restaurantName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
