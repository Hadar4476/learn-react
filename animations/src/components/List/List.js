import React, { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./List.css";

const intialItems = [
  {
    id: "i1",
    value: 1,
  },
  {
    id: "i2",
    value: 2,
  },
  {
    id: "i3",
    value: 3,
  },
];

const List = () => {
  const [items, setItems] = useState(intialItems);

  const onAddItem = () => {
    setItems((prevState) => {
      const id = new Date().valueOf().toString();
      const newItem = {
        id,
        value: prevState.length + 1,
      };

      return [...prevState, newItem];
    });
  };

  const onRemoveItem = (itemId) => {
    setItems((prevState) => {
      const updatedState = [...prevState];

      return updatedState.filter((i) => i.id !== itemId);
    });
  };

  const listItemElements = items.map((i) => (
    <CSSTransition
      key={i.id}
      timeout={300}
      classNames="fade"
      children={() => (
        <li className="ListItem" onClick={() => onRemoveItem(i.id)}>
          {i.value}
        </li>
      )}
    />
  ));

  return (
    <div>
      <button className="Button" onClick={onAddItem}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup
        component="ul"
        className="List"
        children={listItemElements}
      />
    </div>
  );
};

export default List;
