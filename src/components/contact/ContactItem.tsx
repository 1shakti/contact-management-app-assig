import React from "react";
import { ContactInte } from "../../types";

interface ContactItemProps {
  contact: ContactInte;
  handleEditForm: (id: string) => void;
  handleDeleteContact: (id: string) => void;
}

function ContactItem({
  contact,
  handleEditForm,
  handleDeleteContact,
}: ContactItemProps) {
  return (
    <li className="bg-white rounded-md p-4 flex flex-col items-center justify-center space-y-4">
      <img
        src="https://via.placeholder.com/50"
        alt="Contact"
        className="w-18 h-18 rounded-full"
      />

      <span className="font-semibold">
        {contact.first_name} {contact.last_name}
      </span>
      <button
        onClick={() => handleEditForm(contact.id)}
        className="bg-green-500 hover:bg-green-600 font-medium text-white w-24 h-9 rounded-md flex items-center justify-center"
      >
        Edit
      </button>
      <button
        onClick={() => handleDeleteContact(contact.id)}
        className="bg-red-500 hover:bg-red-600 font-medium text-white w-24 h-9 rounded-md flex items-center justify-center"
      >
        Delete
      </button>
    </li>
  );
}

export default ContactItem;
