import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Modal from "../components/Modal";
import MonkeyPanel from "../components/MonkeyPanel";
import NewMonkeyForm from "../components/NewMonkeyForm";

// Page for the user to interact with their monkey
function MyMonkeyPage({
  user,
  setUser,
  monkeyName,
  setMonkeyName,
  foodCounts,
  setFoodCounts,
  hunger,
  setHunger,
}) {
  // Handler for Google login success
  const handleLoginSuccess = async (credentialResponse) => {
    const decodedResponse = jwtDecode(credentialResponse.credential);
    setUser(decodedResponse.email);
    alert(`Successfully logged in as: ${decodedResponse.email}`);
    await getUserData(user);
  };

  // Handler for Google login error
  const handleLoginError = () => {
    alert("ERROR: Google login failed. Refresh the page to try again.");
    setUser(null);
  };

  // Function to get user monkey and food data if it exists
  const getUserData = async (userEmail) => {
    try {
      const response = await axios.get(
        `http://localhost:3005/monkey/${userEmail}`
      );
      // FIXME: store userMonkey properties in state variables
      console.log("GET monkey with userMonkey res", response.data.userMonkey);
      console.log("'user' after login success is", user); //delme
    } catch {
      console.error("Error in getUserData()");
    }
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
      {!user ? (
        modal
      ) : monkeyName ? (
        <MonkeyPanel
          monkeyName={monkeyName}
          foodCounts={foodCounts}
          setFoodCounts={setFoodCounts}
          hunger={hunger}
          setHunger={setHunger}
        />
      ) : (
        <NewMonkeyForm
          user={user}
          monkeyName={monkeyName}
          setMonkeyName={setMonkeyName}
        />
      )}
    </div>
  );
}

export default MyMonkeyPage;
