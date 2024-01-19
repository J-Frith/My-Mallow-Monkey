import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import axios from "axios";

// Page for the user to authenticate themselves
function LoginPage({ setUser }) {
  const [msg, setMsg] = useState(null);

  const getUserData = async (user_email) => {
    try {
      const response = await axios.get(
        `http://localhost:3005/monkey/${user_email}`
      );
      console.log(response.data); //delme
    } catch {
      console.error("Error in getUserData()");
    }
  };

  const handleLoginSuccess = async (credentialResponse) => {
    const decodedResponse = jwtDecode(credentialResponse.credential);
    setUser(decodedResponse.email);
    setMsg(`Successfully logged in as: ${decodedResponse.email}`);
    await getUserData(decodedResponse.email);
  };

  const handleLoginError = () => {
    setMsg("ERROR: Google login failed.");
    setUser(null);
  };

  return (
    <div className="m-5 flex flex-col gap-5 items-center justify-center h-full">
      <GoogleLogin onSuccess={handleLoginSuccess} onError={handleLoginError} />
      <p>{msg}</p>
    </div>
  );
}

export default LoginPage;
