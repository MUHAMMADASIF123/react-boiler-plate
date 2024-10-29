import React from "react";

function CurrentRoute({ currentRoute }) {
  return (
    <div className="text-gray-600 mb-4">
      <p>{currentRoute}</p>
    </div>
  );
}

export default CurrentRoute;
