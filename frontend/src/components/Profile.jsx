import React from "react";
import Navbar from "./Navbar";

const Profile = () => {
  const [userData, setUserData] = React.useState({});
  React.useEffect(() => {
    setUserData(JSON.parse(sessionStorage.getItem("user")))
  }, [])

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
        <h1 className="text-3xl font-bold w-6/y text-center mt-6 mb-6 w-full text-indigo-700">
          Reserved Books
        </h1>
      </div>
    </>
  );
};

export default Profile;
