import React from 'react';
import './ragProfile.css';
import Navbar from '../Navbar/Navbar';

const RagProfile = () => {
    return (
        <>
        
            <Navbar/>
        <div className="profile-container">
            <div className="profile-header">
                <img src="src/assets/profile.png" alt="Profile" className="profile-picture" />
            </div>
            <div className="profile-content">
                <h2>Personal Information</h2>
                <div className="info-group">
                    <h3>Name: John Doe</h3>
                </div>
                <div className="info-group">
                    <h3>Email: john.doe@example.com</h3>
                </div>
                
                <div className="info-group">
                    <h3>Phone: +91 7093949596</h3>
                </div>
                <div className="info-group">
                    <h3>State: Tamil Nadu</h3>
                </div>
                <div className="info-group">
                    <h3>City: Karur</h3>
                </div>
                
            </div>
        </div>
        </>
    );
};

export default RagProfile;
