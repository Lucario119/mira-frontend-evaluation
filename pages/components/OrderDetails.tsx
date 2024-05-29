import React from "react";

const OrderDetails: React.FC = () => {
  return (
  <div className="shadow-lg rounded-lg p-6">
    <h1 className="text-2xl font-bold text-indigo-600 mb-6">Order Details</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-700"><strong>Status:</strong> Reviewing</p>
          <span className="text-indigo-500 cursor-pointer">Edit</span>
        </div>
        <p className="text-gray-700"><strong>Member:</strong> ryan.bruns</p>
        <p className="text-gray-700"><strong>Date of Birth:</strong> 01/01/1980</p>
        <p className="text-gray-700"><strong>Request Address:</strong> 98 St Marks Pl, New York, NY</p>
      </div>
      <div className="space-y-4">
        <p className="text-gray-700"><strong>Received:</strong> 01/11/2022</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-700"><strong>Intended Date:</strong> 01/12/2022</p>
          <span className="text-indigo-500 cursor-pointer">Edit</span>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700"><strong>Requested Time of Day:</strong> Morning</p>
          <span className="text-indigo-500 cursor-pointer">Edit</span>
        </div>
        <p className="text-gray-700"><strong>Assigned Agent:</strong> Ryan Bruns</p>
        <p className="text-gray-700"><strong>Time Zone:</strong> EDT</p>
      </div>
    </div>
  </div>
  );
};

export default OrderDetails;
