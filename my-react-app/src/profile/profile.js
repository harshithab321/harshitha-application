import React from 'react';
import profileImage from '../images/profile.jpg'; // Import profile image
import './profile.css'; // Import CSS styles for the profile page

const Profile = () => {
  // Dummy user information
  const user = {
    name: 'harshitha b',
    email: 'harshitha.b225@gmail.com',
    bio: 'hello this is harshitha looking for the graet oppertunity to serve for the company best level'
}

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Profile</h2>
      </div>
      <div className="profile-content">
        <div className="profile-image-container">
          <img className="profile-image" src={profileImage} alt="Profile" />
        </div>
        <div className="profile-info">
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Bio: {user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
