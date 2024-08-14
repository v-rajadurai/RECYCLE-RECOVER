import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './consumerProfile.css';
import image from '../../../assets/profile.jpg';
import Navbar from '../Navbar/Navbar';
import { useAuth } from '../../AuthContext';
 // Adjust the import path
import { Alert ,Stack} from '@mui/material';
const ConsumerProfile = () => {
  const { user, login } = useAuth();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const [alert, setAlert] = useState(null);
  useEffect(() => {
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    console.log(user);
    const fetchProfile = async () => {
      if (!user?.email) return;

      try {
        const response = await axios.get('http://localhost:8080/api/profile', {
          params: { email: user.email }
        });

        console.log('Profile data:', response.data);
        

        setProfile(response.data);
        setFormData(response.data);
        login(response.data)
        setLoading(false);
      } catch (error) {
        setError('Error fetching profile data.');
        console.error('Error fetching profile data:',error);
      } 
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSave = async () => { 
    try {
      await axios.put('http://localhost:8080/api/profile', {
        email: formData.email,
        pass: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state
      });
      setProfile(formData);
      setEditMode(false);
      setAlert('Changes are saved in profile.');
    } catch (error) {
      setError('Error updating profile data.');
      console.error('Error updating profile data:', error.response ? error.response.data : error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!profile) return <div>No profile data available</div>;

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <img src={image} alt="Profile" className="profile-picture" />
          {/* <button onClick={() => setEditMode(prevMode => !prevMode)}>
            {editMode ? 'Cancel' : 'Edit'}
            </button> */}
        </div>
        <div className="profile-content">
          <div>
            {alert && (
               <Stack sx={{ width: '100%' }} spacing={2}>
  
              <Alert severity="success" onClose={() => setAlert(null)} >{alert}</Alert>
               </Stack>
            )}

          </div>
        <div className="header-and-button">
            <h2>Personal Information</h2>
            <button className="edit-button" onClick={() => setEditMode(prevMode => !prevMode)}>
              {editMode ? 'Cancel' : 'Edit'}
            </button>
          </div>
          {editMode ? (
            <div className="info-group">
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password || ''}
                  onChange={handleChange}
                />
              </label>
              <label>
                Phone:
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <label>
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </label>
              <label>
                State:
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </label>
              <label>
                City:
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </label>
              <button onClick={handleSave} style={{color:"white",backgroundColor:"#000000"}}>Save</button>
            </div>
          ) : (
            <div className="info-group">
              <h3>Name: {profile.firstName} {profile.lastName}</h3>
              <h3>Email: {profile.email}</h3>
              <h3>Phone: {profile.phone}</h3>
              <h3>Address: {profile.address}</h3>
              <h3>State: {profile.state}</h3>
              <h3>City: {profile.city}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ConsumerProfile;
