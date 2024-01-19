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
  foodCounts,
  setFoodCounts,
  hunger,
  setHunger,
  showLoginModal,
  setShowLoginModal,
}) {
  // Handler for Google login success
  const handleLoginSuccess = async (credentialResponse) => {
    const decodedResponse = jwtDecode(credentialResponse.credential);
    setUser(decodedResponse.email);
    alert(`Successfully logged in as: ${decodedResponse.email}`);
    await getUserData(user);
    setShowLoginModal(false);
  };

  // Handler for Google login error
  const handleLoginError = () => {
    alert("ERROR: Google login failed. Refresh the page to try again.");
    setUser(null);
  };

  // Function to get user monkey and food data if it exists
  const getUserData = async (user_email) => {
    try {
      const response = await axios.get(
        `http://localhost:3005/monkey/${user_email}`
      );
      console.log(response.data.userMonkey); //delme
      setUser(response.data.userMonkey);
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
      {showLoginModal ? (
        modal
      ) : user ? (
        <MonkeyPanel
          foodCounts={foodCounts}
          setFoodCounts={setFoodCounts}
          hunger={hunger}
          setHunger={setHunger}
        />
      ) : (
        <NewMonkeyForm />
      )}
    </div>
  );
}

export default MyMonkeyPage;
