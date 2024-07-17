import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Profile/Sidebar';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/Loader/Loader';

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  
  const headers = {
    id: localStorage.getItem('id'),
    authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('http://localhost:1000/api/v1/get-user-info', { headers });
        setProfile(response.data);
      } catch (err) {
        setError('Failed to fetch profile information');
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="bg-[#F3F8F9] px-2 md:px-12 flex flex-col md:flex-row h-screen py-8 gap-4">
      {!profile && !error && (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      )}
      {error && (
        <div className="w-full h-full flex items-center justify-center text-red-500">
          {error}
        </div>
      )}
      {profile && (
        <>
          <div className="w-full md:w-1/6">
            <Sidebar data={profile} />
          </div>
          <div className="w-full md:w-5/6">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
