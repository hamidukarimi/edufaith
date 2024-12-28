import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "black", //a235g
      color: "white", //a235g
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    errorCode: {
      fontSize: "70px",
      fontWeight: "bold",
      margin: "0",
      color: "#ff6b6b",
    },
    message: {
      fontSize: "1.5rem",
      margin: "10px 0",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1rem",
      color: "#fff",
      backgroundColor: "#333",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.errorCode}>404</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <NavLink to="/"><button style={styles.button}>Go Home</button></NavLink>
    </div>
  );
};

export default ErrorPage;
