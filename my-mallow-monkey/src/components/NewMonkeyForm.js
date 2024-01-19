import { useState } from "react";
import classnames from "classnames";
import axios from "axios";
import Button from "./Button";

// A form for creating a new mallow monkey
function NewMonkeyForm({ user, setMonkeyName }) {
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

  // Creates a new monkey for the user
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Update input form state
    setName("");
    setIsValid(false);

    // Create new monkey
    await postNewMonkey(name);
  };

  // Function to create a new monkey in the backend
  const postNewMonkey = async (newMonkeyName) => {
    try {
      await axios.post(`http://localhost:3005/monkey/newmonkey`, {
        user: user,
        name: newMonkeyName,
      });
      setMonkeyName(newMonkeyName);
    } catch {
      console.error("Error in POST new monkey route.");
      alert("Error: failed to create a new monkey.");
      return;
    }
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
