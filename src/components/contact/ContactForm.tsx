import { ChangeEventHandler, MouseEventHandler } from "react";
import { ContactInte } from "../../types";

interface ContactFormProps {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: MouseEventHandler<HTMLButtonElement>;
  formData: ContactInte;
  title: string;
  buttonLabel: string;
}

function ContactForm({
  handleChange,
  handleSubmit,
  formData,
  title,
  buttonLabel,
}: ContactFormProps) {
  return (
    <div className="flex items-center justify-center h-full bg-gray-300 p-4">
      <div className="w-full max-w-lg">
        <h3 className="text-2xl font-semibold mb-6 text-center">{title}</h3>
        <div className="bg-white rounded-lg p-8 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            <label htmlFor="first_name" className="mb-2 lg:w-1/3 font-medium">
              First Name:
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full lg:w-2/3 px-4 py-2 border border-gray-300 rounded-md text-lg"
              required
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            <label htmlFor="last_name" className="mb-2 lg:w-1/3 font-medium">
              Last Name:
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full lg:w-2/3 px-4 py-2 border border-gray-300 rounded-md text-lg"
              required
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-4">
            <span className="font-medium lg:w-1/3">Status:</span>
            <div className="flex flex-col">
              <label className="flex items-center">
                <input
                  type="radio"
                  id="status_active"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Active</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="status_inactive"
                  name="status"
                  value="inactive"
                  checked={formData.status === "inactive"}
                  onChange={handleChange}
                  className="mr-2"
                />
                <span>Inactive</span>
              </label>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center">
          <button
            onClick={handleSubmit}
            className=" bg-gray-400 text-black font-medium px-1.5 py-2 rounded-md text-lg hover:bg-gray-500 transition"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
