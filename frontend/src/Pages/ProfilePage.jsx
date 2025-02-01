import { useRef, useState, useEffect } from 'react';
import './ProfilePage.css';
import { useSelector } from 'react-redux';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from './firebase';
import axios from 'axios'

import { Client } from 'appwrite';

const ProfilePage = () => {
  const {currentUser}=useSelector((state)=>state.user)
  const [profile, setProfile] = useState(currentUser);
 
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(currentUser);
  const [image, setImage] = useState(undefined);
  const fileRef = useRef();
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };
  const handleFileUpload = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    alert("Handle fule upload")
  
    try {
      const response = await axios.put(`/user/upload/${currentUser._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      const { filePath } = response.data;
      const imageUrl = `/${filePath}`;
      console.log(filePath)
      
      // Update profile picture URL in formData
      setFormData({ ...formData, profilePicture: imageUrl});
    
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  };
  
  const handleUpdate = async () => {
    try {
      console.log(currentUser);
  
      const res = await axios.put(
        `/user/update/${currentUser._id}`,
        { ...formData },
        { withCredentials: true } // Ensure cookies are sent
      );
  
      setProfile({ ...formData });
      setIsEditing(false);
      console.log("Profile updated successfully", res.data);
    } catch (error) {
      console.error("Error updating profile", error.response?.data || error.message);
    }
  };
  
  

  return (
    <div className="profile-page">
      <h1 className="profile-heading">PROFILE PAGE</h1>
      <input
          type='file'
          ref={fileRef}
          hidden
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
        />
     <div className="profile-container">
  <div className="profile-pic-container">
    <img
      src={
        currentUser?.profilePicture
          ? `/${currentUser.profilePicture}`
          : formData?.profilePicture
          ? formData.profilePicture
          : "images.jpeg" // Default fallback image
      }
      alt="Profile"
      className="profile-pic"
    />
    <button
      className="change-pic-button"
      onClick={() => fileRef?.current?.click()} // Ensure fileRef is safe to access
    >
      Change Picture
    </button>
  </div>


        <div className="profile-details">
          {isEditing ? (
            <>
             
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                placeholder="Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
              />
              <input
                type="text"
                name="phoneno"
                value={formData.phoneno}
                onChange={handleInputChange}
                placeholder="Phone"
              />
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                placeholder="Age"
              />
              <select
                name="gender"
                value={formData.Designation}
                onChange={handleInputChange}
              >
                <option value="Male">Student</option>
                <option value="Female">Teacher</option>
                <option value="Other">Professional</option>
              </select>
              <button onClick={handleUpdate}>Save</button>
            </>
          ) : (
            <>
              <h2>{profile.fullname}</h2>
              <p>Email: {profile.email}</p>
              <p>Phone: {profile.phoneno}</p>
              <p>Age: {profile.age}</p>
              <p>Designation: {profile.Designation}</p>
              <button onClick={() => setIsEditing(true)}>Update Profile</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
