import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

// Page for the user to authenticate themselves
function LoginPage({ setUser }) {
  const [msg, setMsg] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const decodedResponse = jwtDecode(credentialResponse.credential);
    setUser(decodedResponse.email);
    setMsg(`Successfully logged in as: ${decodedResponse.email}`);
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
