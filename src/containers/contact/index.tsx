import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ContactList from "../../components/contact/ContactList";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../../store/contact";
import { useDispatch } from "react-redux";

function ContactContainer() {
  const { contacts } = useSelector((state: RootState) => state.contactReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddForm = () => {
    navigate("/add-edit");
  };

  const handleEditForm = (id:string): void => {
    navigate(`/add-edit/${id}`);
  };

  const handleDeleteContact = (id:string): void => {
    dispatch(deleteContact(id));
  };
  

  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          onClick={handleAddForm}
          className=" bg-gray-400 text-black px-1.5 py-2 rounded-md text-lg hover:bg-gray-500 transition"
        >
          Create Contact
        </button>
      </div>

      <ContactList contacts={contacts} handleEditForm={handleEditForm} handleDeleteContact={handleDeleteContact} />
    </div>
  );
}

export default ContactContainer;
