import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import "./style.css";

export default function Home() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>msg now!</h1>
          <h2>The newest message application on the market</h2>
            <div className="buttons">
              <Button color="primary" variant="contained" component={Link} to="/login">
                Login
              </Button>
              
              <Button color="secondary" variant="contained" component={Link} to="/signup">
                Sign Up
              </Button>
            </div>
        </header>
      </div>
    )
}