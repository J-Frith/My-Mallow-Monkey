import { useState } from "react";
import classnames from "classnames";
import Button from "./Button";

// A form for creating a new mallow monkey
function NewMonkeyForm() {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validNameRegex = /^[A-Za-z]+$/;

  // Validates and updates the entered name
  const handleChange = (event) => {
    setName(event.target.value);
    if (event.target.value === "" || !validNameRegex.test(event.target.value)) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("You named your monkey:", name); // FIXME: API call
    setName("");
    setIsValid(false);
  };

  // Changes input box font color if the name is invalid
  const nameInputClasses = classnames("border ml-2 mt-2", {
    "text-red-500": !isValid,
    "text-black": isValid,
  });

  return (
    <div className="border-2 p-5 mt-5">
      <h1 className="text-xl">Name your new mallow monkey! 🐵</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          value={name}
          onChange={handleChange}
          className={nameInputClasses}
        />
        <Button
          primary
          disabled={!isValid}
          className="mt-2 disabled:opacity-50"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default NewMonkeyForm;
