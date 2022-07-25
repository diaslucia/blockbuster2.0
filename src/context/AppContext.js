import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AppContext = React.createContext({});

export const DataProvider = ({ children }) => {
  let navigate = useNavigate();
  const [token, setToken] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [movieDetail, setMovieDetail] = useState([]);

  /* Function to validate email and password */
  const validateEmail = (email, password) => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(email === "" || password === "") {
        console.log(
            "Please fill all fields"
        );
    }

    if(!regexEmail.test(email) && email !== "") {
        console.log(
            "Please enter a valid email"
        );
    }

    if(email !== "challenge@alkemy.org" || password !== "react") {      
        console.log(
            "Invalid credentials"
        );
    }
  }

  /* Function to handle submit and go to home */
  const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;

      validateEmail(email, password);

      axios
          .post("http://challenge-react.alkemy.org", { email, password})
          .then(res => {
            sessionStorage.setItem("token", res.data.token);
              handleNavigation("/home");
          })
          .catch(err => {
              console.log(err);
          });
  }

  /* Function to handle token */
  const handleToken = () => {
    if(!token){
      setToken(sessionStorage.getItem("token"));
    }
  }

  const handleNavigation = (address) => {
    navigate(address);
  }

  return (
    <AppContext.Provider
      value={{
        handleSubmit,
        handleToken,
        token,
        setMovieList,
        movieList,
        handleNavigation,
        movieDetail,
        setMovieDetail
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;