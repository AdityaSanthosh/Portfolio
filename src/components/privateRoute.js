import React from "react"
import { Router } from "@reach/router";
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname === `/thoughts`) {
    navigate("/app/login")
    return null
  }

  return (
    <Router>
      <Component {...rest} />
    </Router>
    )
}

export default PrivateRoute