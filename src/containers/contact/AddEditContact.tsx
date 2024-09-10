import {
  ChangeEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { ContactInte } from "../../types";
import { addContact, updateContact } from "../../store/contact";
import ContactForm from "../../components/contact/ContactForm";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

function AddEditContact() {
  const { id } = useParams<{ id?: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = useSelector((state: RootState) =>
    id ? state.contactReducer.contacts.find((c) => c.id === id) : null
  );
  const [formData, setFormData] = useState<ContactInte>({
    id: "",
    first_name: "",
    last_name: "",
    status: "active",
  });

  useEffect(() => {
    if (id && contact) {
      setFormData(contact);
    }
  }, [id, contact]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { type, name, value } = e.target;
    if (type === "radio") {
      setFormData({
        ...formData,
        [name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const { first_name, last_name, status } = formData;
    const newContact: ContactInte = {
      id: formData.id !== "" ? formData.id : uuidv4(),
      first_name,
      last_name,
      status,
    };

    if (formData.id) {
      dispatch(updateContact(newContact));
    } else {
      dispatch(addContact(newContact));
    }

    navigate("/");
  };

  return (
    <ContactForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      formData={formData}
      title={formData.id ? "Edit Contact" : "Create Contact"}
      buttonLabel={formData.id ? "Update Contact" : "Save Contact"}
    />
  );
}

export default AddEditContact;
