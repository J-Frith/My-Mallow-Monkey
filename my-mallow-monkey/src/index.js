import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <GoogleOAuthProvider clientId="880838451289-g67m62ll6f71i6c43q1lmbkumumj44p1.apps.googleusercontent.com">
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </GoogleOAuthProvider>
);
