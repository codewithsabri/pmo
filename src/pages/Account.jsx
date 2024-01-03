import React, { useState } from 'react'
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://gwykwsvwuqburndfcyyq.supabase.co'
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

function PersonnalInfo() {
  const [profile, setProfile] = useState({
    username: 'JohnDoe',
    age: 25,
    country: 'USA',
    avatar_url: null,
  });

  const handleChange = (field, value) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setProfile((prevProfile) => ({
      ...prevProfile,
      avatar: file,
    }));
  };

  const id_user = "111654e4-9f22-487b-9af5-471d4c416d1a"
  const handleUpdateProfile = async () => {
    console.log('Updated Profile:', profile);

    try {
      const { data, error } = await supabase
        .from('profiles')
        .upsert({
          // Update the fields you want to change
          id: id_user,
          username: profile.username,
          age: profile.age,
          country: profile.country,
          updated_at: new Date().toISOString(),
          days: 5
          // ... other fields
        })
        .eq('id', id_user); // Change 'user_id' and 'YOUR_USER_ID' as per your schema

      if (error) {
        console.error('Error updating profile:', error.message);
      } else {
        console.log('Profile updated successfully:', data);
      }
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-200 rounded-md shadow-md max-w-md">
      <h1 className="text-3xl font-semibold mb-4">My Account</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Avatar</label>
        <input
          type="file"
          accept="image/*"
          className="mt-1 p-2 w-full border rounded-md"
          onChange={handleAvatarChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Username</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={profile.username}
          onChange={(e) => handleChange('username', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Age</label>
        <input
          type="number"
          className="mt-1 p-2 w-full border rounded-md"
          value={profile.age}
          onChange={(e) => handleChange('age', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Country</label>
        <input
          type="text"
          className="mt-1 p-2 w-full border rounded-md"
          value={profile.country}
          onChange={(e) => handleChange('country', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          className="mt-1 p-2 w-full border rounded-md"
          value={profile.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Password</label>
        <input
          type="password"
          className="mt-1 p-2 w-full border rounded-md"
          value={profile.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        onClick={handleUpdateProfile}
      >
        Update Profile
      </button>
    </div>
  );
};
export default PersonnalInfo