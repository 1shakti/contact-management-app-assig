import React from "react";
import ContactItem from "./ContactItem";
import NoContactsMessage from "./NoContactsMessage";
import { ContactInte } from "../../types";

interface ContactListProps {
  contacts: ContactInte[];
  handleEditForm: (id: string) => void;
  handleDeleteContact: (id: string) => void;
}

function ContactList({
  contacts,
  handleEditForm,
  handleDeleteContact,
}: ContactListProps) {
  return (
    <div className="p-4">
      {contacts.length === 0 ? (
        <NoContactsMessage />
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              handleEditForm={handleEditForm}
              handleDeleteContact={handleDeleteContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
