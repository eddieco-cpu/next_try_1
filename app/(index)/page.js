//import React from "react";
import styles from "./page.module.css";

const envVar = process.env.TEST_TEXT || "no env";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <p>This is the home page.</p>
      <p>env: {envVar}</p>
    </div>
  );
};

export default HomePage;
