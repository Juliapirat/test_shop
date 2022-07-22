import React from "react";
import Item from "./Item.js";

export default function ItemList(props) {
  return (
    <>
      <ul className="ui-list">
        {props.items.map((item, index) => (
          <li className="ui-item-list" key={index}>
            <Item info={item} />
            <button className="item-button" onClick={props.OnDeleteItem}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
