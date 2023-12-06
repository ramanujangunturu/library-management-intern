import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/auth/details",
          {
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
          }
        );
        setUserData(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <Navbar />
      <div className="max-w-md w-5/12 bg-white p-8 mt-10 shadow-md rounded-md inline-block">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">
          User Profile
        </h1>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Name:
          </label>
          <div className="text-gray-800 font-medium">
            {userData.firstName} {userData.lastName}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">
            Email:
          </label>
          <div className="text-gray-800">{userData.email}</div>
        </div>
        <div>
          <label className="block text-gray-600 font-semibold mb-2">
            Account Type:
          </label>
          <div className="text-gray-800 capitalize">{userData.accountType}</div>
        </div>
      </div>
      <div className="reservedBooks inline-block w-6/12 h-3/4">
        <h1 className="text-3xl font-bold w-6/12 text-center mt-6 mb-6 w-full text-indigo-700">
          Reserved Books
        </h1>
      </div>
    </>
  );
};

export default Profile;
