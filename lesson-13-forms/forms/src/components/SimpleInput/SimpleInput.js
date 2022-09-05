import React, { useState } from "react";

const SimpleInput = (props) => {
  const form = [
    {
      id: "name",
      label: "Your name",
      type: "text",
      value: "",
      isTouched: false,
      isValid: false,
      error: "Name must not be empty.",
    },
    {
      id: "email",
      label: "Your email",
      type: "email",
      value: "",
      isTouched: false,
      isValid: false,
      error: 'Email must include "@".',
    },
  ];

  const [formState, setFormState] = useState(form);

  const isFormValid = formState.every((i) => i.isValid);

  const validateInput = (value, name, type) => {
    let isValid = Boolean(value);

    if (type === "email") {
      isValid = value.includes("@");
    }

    return isValid;
  };

  const onInputChange = ({ target }) => {
    const { value, name, type } = target;
    const trimmedValue = value.trim();

    setFormState((prevState) => {
      const updatedState = [...prevState];
      const inputIndex = updatedState.findIndex((i) => i.id === name);
      updatedState[inputIndex].value = trimmedValue;

      updatedState[inputIndex].isValid = validateInput(
        trimmedValue,
        name,
        type
      );

      return updatedState;
    });
  };

  const onInputBlur = ({ target }) => {
    const { name } = target;

    setFormState((prevState) => {
      const updatedState = [...prevState];
      const inputIndex = updatedState.findIndex((i) => i.id === name);
      updatedState[inputIndex].isTouched = true;

      return updatedState;
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    setFormState((prevState) => {
      const updatedState = prevState.map((i) => {
        return {
          ...i,
          isTouched: true,
        };
      });

      return updatedState;
    });

    if (!isFormValid) {
      return;
    }

    console.log(formState);

    setFormState(form);
  };

  const inputElements = formState.map((i) => {
    const shouldDisplayInputError = i.isTouched && !i.isValid;

    return (
      <div
        key={i.id}
        className={`form-control ${shouldDisplayInputError && "invalid"}`}
      >
        <label htmlFor={i.id}>{i.label}</label>
        <input
          type={i.type}
          id={i.id}
          name={i.id}
          value={i.value}
          onChange={onInputChange}
          onBlur={onInputBlur}
        />
        {shouldDisplayInputError && (
          <span className="error-text">{i.error}</span>
        )}
      </div>
    );
  });

  return (
    <form onSubmit={onFormSubmit}>
      {inputElements}
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
