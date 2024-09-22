import React from 'react'

const UserCard = ({ user }) => {
 
    return (
        <> 
        <div className="box" >
            <div className="border p-4 m-2 rounded-lg shadow-lg bg-white">
              <p className="text-gray-700">Name: {user.name}</p>
              <p className="text-gray-700">Email: {user.email}</p>
              <p className="text-gray-700">
                  Address: {user.address.city}, {user.address.street}, {user.address.zipcode}
              </p>
              <p className="text-gray-700">Company Name: {user.company.name}</p>
            </div>
        </div>
        </>
    );
};


export default UserCard