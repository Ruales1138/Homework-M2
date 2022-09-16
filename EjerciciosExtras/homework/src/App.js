import React from "react";
import { Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import UserPosts from "./components/UserPosts/UserPosts";
import Users from "./components/Users/Users";



function App() {
  return (
      <React.Fragment>
         <NavBar />
         <Users/>
      </React.Fragment>
  )
}

export default App
