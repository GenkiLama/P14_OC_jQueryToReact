import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ListDepartment from "@data/list.department";
import ListState from "@data/list.state";
import { useEmployeeStore } from "@store/employee.store";
import { Employee, FormErrors } from "@customTypes/interfaces";
import DropDown from "@components/dropDown/DropDown";
import "./form.scss";
import { Modal } from "modal-p14-oc-react";

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");

  const addEmployee = useEmployeeStore((s) => s.addEmployee);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const initialFormState = {
    firstname: "",
    lastname: "",
    dateBirth: "",
    startDate: "",
    street: "",
    city: "",
    zip: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: FormErrors = {};

    const validations = [
      { field: "firstname", message: "Firstname is required" },
      { field: "lastname", message: "Lastname is required" },
      { field: "dateBirth", message: "Date of Birth is required" },
      { field: "startDate", message: "Start Date is required" },
      { field: "street", message: "Street is required" },
      { field: "city", message: "City is required" },
      { field: "zip", message: "Zip is required" },
    ];

    validations.forEach((validation) => {
      if (!formData[validation.field as keyof typeof formData]) {
        newErrors[validation.field as keyof typeof newErrors] =
          validation.message;
        isValid = false;
      }
    });

    if (!state) {
      newErrors.state = "State is required";
      isValid = false;
    }

    if (!department) {
      newErrors.department = "Department is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const currentEmployee: Employee = {
    firstname: formData.firstname,
    lastname: formData.lastname,
    dateBirth: new Date(formData.dateBirth).toLocaleDateString("fr-FR"),
    startDate: new Date(formData.startDate).toLocaleDateString("fr-FR"),
    street: formData.street,
    city: formData.city,
    state: state,
    zip: formData.zip,
    department: department,
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      addEmployee(currentEmployee);
      setFormData(initialFormState);
      setState("");
      setDepartment("");
      setIsModalOpen(true);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <fieldset>
        <legend className="form_legend">Personal Information</legend>

        <div className="form_group">
          <div className="form_group_control">
            <label htmlFor="firstname">First name *</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              onChange={handleInputChange}
              value={formData.firstname}
            />
            {errors.firstname && <p className="error">{errors.firstname}</p>}
          </div>
          <div className="form_group_control">
            <label htmlFor="lastname">Last name *</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              onChange={handleInputChange}
              value={formData.lastname}
            />
            {errors.lastname && <p className="error">{errors.lastname}</p>}
          </div>
        </div>
        <div className="form_group">
          <div className="form_group_control">
            <label htmlFor="dateBirth">Date of Birth *</label>
            <input
              type="date"
              id="dateBirth"
              name="dateBirth"
              onChange={handleInputChange}
              value={formData.dateBirth}
            />
            {errors.dateBirth && <p className="error">{errors.dateBirth}</p>}
          </div>
          <div className="form_group_control">
            <label htmlFor="startDate">Start Date *</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              onChange={handleInputChange}
              value={formData.startDate}
            />
            {errors.startDate && <p className="error">{errors.startDate}</p>}
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="form_legend">Address</legend>

        <div className="form_group">
          <div className="form_group_control">
            <label htmlFor="street">Street *</label>
            <input
              type="text"
              id="street"
              name="street"
              onChange={handleInputChange}
              value={formData.street}
            />
            {errors.street && <p className="error">{errors.street}</p>}
          </div>
          <div className="form_group_control">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              onChange={handleInputChange}
              value={formData.city}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
        </div>

        <div className="form_group">
          <div className="drop">
            <label aria-label="Select department">State *</label>
            <DropDown
              data={ListState}
              selectedItem={state}
              setSelectedItem={setState}
            />
            {errors.state && <p className="error">{errors.state}</p>}
          </div>
          <div className="form_group_control">
            <label htmlFor="zip">Zip code *</label>
            <input
              type="number"
              id="zip"
              name="zip"
              onChange={handleInputChange}
              value={formData.zip}
            />
            {errors.zip && <p className="error">{errors.zip}</p>}
          </div>
        </div>
      </fieldset>
      <div className="drop">
        <fieldset>
          <legend className="form_legend">Department</legend>
          <DropDown
            data={ListDepartment}
            selectedItem={department}
            setSelectedItem={setDepartment}
          />
          {errors.department && <p className="error">{errors.department}</p>}
        </fieldset>
      </div>
      <button type="submit" className="form_btn">
        <FontAwesomeIcon icon={faFloppyDisk} />
        <span>Save</span>
      </button>
      {isModalOpen && (
        <div style={{ fontSize: "clamp(2rem, 2.5vw, 2.5rem)" }}>
          <Modal
            text="Employee Created!"
            isOpen={isModalOpen}
            onClose={closeModal}
            textColor="#fff"
            backgroundColor="#157846"
            iconColor="red"
          />
        </div>
      )}
    </form>
  );
};

export default Form;
