import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './frontPage.css';

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      <div className="content-container">
        <h1>Recycle & Recover</h1>
        <p>
          Bridge the gap between consumers and rag pickers for easy recycling. Post details about recyclable materials, and rag pickers can accept them.
        </p>
        <div className="button-group">
          <Link to="/consumersignin">
            <Button variant="contained">Consumer</Button>
          </Link>
          <Link to="/signin">
            <Button variant="contained">RagPicker</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
