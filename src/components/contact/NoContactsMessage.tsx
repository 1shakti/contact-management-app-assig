import React from "react";

function NoContactsMessage() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-80 p-4 text-center border-black border-2">
        <p className="text-black">
          No Contacts Found. Please add a contact from Create Contact Button.
        </p>
      </div>
    </div>
  );
}

export default NoContactsMessage;
