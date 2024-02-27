import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Alert from "./components/shared/Alert";
import Routing from "./components/shared/Routing";
import { AuthProvider } from "./components/utils/auth";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

function App() {

  let NavBarConfig = [
    { title: "Home", url: "/", auth: true },
    { title: "About", url: "/about", auth:  true},
    { title: "Product", url: "/product", auth: true },
    { title: "Login", url: "/login", auth: false },
  ];

  const [mode, setmode] = useState("dark");
  const [alert, setalert] = useState(null);

  const updateMode = () => {
    if (mode === "dark") {
      autoDissmissAlert();
    } else {
      setmode("dark");
      autoDissmissAlert();
    }

    console.log(mode);
  };

  const autoDissmissAlert = () => {
    setalert("Light mode enable");
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const clearMode = () => {
    setalert(null);
  };

  return (
    <AuthProvider>
      <Router> {/* Wrap your App component with Router */}
        <div>
          <Navbar
            mainData={{ title: "TextUtils", url: "/", isActive: true }}
            data={NavBarConfig}
            updateMode={updateMode}
            mode={mode}
          />
          {alert && <Alert alertData={alert} clearMode={clearMode} />}
          <Routing />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
