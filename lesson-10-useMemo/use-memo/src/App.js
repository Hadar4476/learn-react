import React, { useCallback, useMemo, useState } from "react";

import Button from "./components/Button/Button";
import Items from "./components/Items/Items";

import "./App.css";

const App = () => {
  console.log("App RUNNING");

  const [itemsListTitle, setItemsListTitle] = useState("My list");

  const items = useMemo(() => {
    return [5, 3, 1, 10, 9];
  }, []);

  const onChangeItemsListTitleHandler = useCallback(() => {
    setItemsListTitle("New title");
  }, []);

  return (
    <div className="App">
      <Items title={itemsListTitle} items={items} />
      <Button
        text="Change items list title"
        emitClick={onChangeItemsListTitleHandler}
      />
    </div>
  );
};

export default App;
