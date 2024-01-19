import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Button from "../components/Button";
import Modal from "../components/Modal";

// Page for the user to interact with their monkey
function MyMonkeyPage({
  user,
  setUser,
  foodCounts,
  setFoodCounts,
  hunger,
  setHunger,
}) {
  const foodTypes = ["Banana", "Grape", "Watermelon"];

  const [showModal, setShowModal] = useState(!user);

  // Handler for food type button to adjust appropriate food counter and hunger level
  const handleFoodClick = (foodName) => {
    if (hunger + 5 <= 100 && foodCounts[foodName] > 0) {
      setFoodCounts((prevCounts) => {
        const newCounts = { ...prevCounts };
        newCounts[foodName] -= 1;
        return newCounts;
      });

      setHunger((prevHunger) => {
        return prevHunger + 5;
      });
    }
  };

  // Maps each food type to a button
  const renderedButtons = foodTypes.map((name, index) => (
    <div key={index} className="flex flex-row gap-2 items-center">
      <Button onClick={() => handleFoodClick(name)} secondary>
        {name}
      </Button>
      <p>{foodCounts[name]}</p>
    </div>
  ));

  // Handler for Google login success
  const handleLoginSuccess = async (credentialResponse) => {
    const decodedResponse = jwtDecode(credentialResponse.credential);
    setUser(decodedResponse.email);
    alert(`Successfully logged in as: ${decodedResponse.email}`);
    setShowModal(false);
  };

  // Handler for Google login error
  const handleLoginError = () => {
    alert("ERROR: Google login failed. Refresh the page to try again.");
    setUser(null);
  };

  // Custom modal window that displays a Google login button
  const modal = (
    <Modal>
      <div className="flex flex-col gap-5 items-center h-full">
        <h1 className="font-bold">Log in with Google</h1>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />
      </div>
    </Modal>
  );

  return (
    <div className="flex flex-col items-center">
      {showModal && modal}
      <p>FIXME: {user} is to be used in future with backend calls!</p>
      <div className="flex items-center justify-center mt-5">
        <img
          src={`${process.env.PUBLIC_URL}/images/mallow-monkey.png`}
          alt="Mallow Monkey"
          className="size-1/3"
        />
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="flex flex-col gap-5 border p-5 ml-5">
            {renderedButtons}
          </div>
          <div className="bg-gray-500 p-5 font-bold text-white w-32 text-center">
            {hunger}/100
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyMonkeyPage;
