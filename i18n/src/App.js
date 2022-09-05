import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "./utilities/i18n";

import "./App.css";

const App = () => {
  const [amount, setAmount] = useState(0);
  const { t } = useTranslation();

  const onChangeLanguage = ({ target }) => {
    const { value } = target;
    i18n.changeLanguage(value);
    setAmount((prevState) => prevState + 1);
  };

  const changedAmountElement = amount ? (
    <h3>
      {amount > 1
        ? t("language.changedMultiple", { amount })
        : t("language.changedOnce", { amount })}
    </h3>
  ) : null;

  return (
    <div className="App">
      <h1>{t("homepage.title")}</h1>
      {changedAmountElement}
      <select
        name="language_select"
        id="language_select"
        onChange={onChangeLanguage}
      >
        <option value="en">English</option>
        <option value="he">עברית</option>
      </select>
    </div>
  );
};

export default App;
